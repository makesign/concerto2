class Submission < ActiveRecord::Base
  include ActiveModel::ForbiddenAttributesProtection

  belongs_to :content, autosave: true
  belongs_to :feed
  belongs_to :moderator, class_name: "User"

  after_save :update_child_moderation

  # Validations
  validates :feed, presence: true, associated: true
  validates :content, presence: true, associated: true
  validates :moderator, presence: { unless: Proc.new { |s| s.is_pending? || s.content.is_expired? }}, associated: true
  validates :duration, numericality: { greater_than: 0 }
  validates_uniqueness_of :content_id, scope: :feed_id  #Enforce content can only be submitted to a feed once

  # Scoping shortcuts for approved/denied/pending
  scope :approved, -> { where moderation_flag: true }
  scope :denied, -> { where moderation_flag: false }
  scope :pending, -> { where "moderation_flag IS NULL" }
  scope :unsent, -> { where "pending_notification_sent IS NULL" }

  # Scoping shortcuts for active/expired/future
  def self.active
    joins(:content).merge(Content.active)
  end

  def self.expired
    joins(:content).merge(Content.expired)
  end

  def self.future
    joins(:content).merge(Content.future)
  end

  #Newsfeed
  include PublicActivity::Common if defined? PublicActivity::Common

  def moderation_text
    case self.moderation_flag
      when true
        return I18n.t(:approved)
      when false
        return I18n.t(:rejected)
      else
        return I18n.t(:pending)
    end
  end

  # Test if the submission has been approved.
  # (moderation flag is true)
  def is_approved?
    moderation_flag ? true : false
  end

  # Test if the submission has been denied.
  # (moderation flag is false)
  def is_denied?
    return false if moderation_flag || moderation_flag == nil
    true
  end

  # Test if the submission has not yet been moderated.
  # (moderation flag is nil)
  def is_pending?
    moderation_flag.nil?
  end

  # Cascade moderation to children submissions as well.
  # Child content submitted to the same feed will receive the same moderation
  # as a parent content.
  def update_child_moderation
    if self.changed.include?('moderation_flag') and self.content.has_children?
      self.content.children.each do |child|
        similiar_submissions = Submission.where(content_id: child.id, feed_id: self.feed_id, moderation_flag: self.moderation_flag_was)
        similiar_submissions.each do |child_submission|
          child_submission.update_attributes({moderation_flag: self.moderation_flag, moderator_id: self.moderator_id})
        end
      end
    end
  end

  # Deny content which has previously expired.
  # Any submission belonging to content which has expired but has not yet been
  # reviewed is denied here.  We made a special exception to validations to allow
  # submissions to not have a moderator_id if the content has expired.
  def self.deny_old_expired
    Submission.pending.expired.readonly(false).each do |submission|
      submission.moderation_flag = false
      submission.moderation_reason = I18n.t(:content_expired_mod)
      #Rails.logger.info submission
      #print submission.to_yaml
      #print submission.errors.to_yaml
      submission.save
    end
  end

  # if there are any pending submissions, send a notice to the unique list of moderators
  def self.send_moderation_request_notifications
    items = Submission.pending.unsent
    emails = items.map{|s| s.feed.group.moderators }.flatten.compact.map{|m| m.user.email if m.receive_emails && m.user.receive_moderation_notifications }.compact.sort.uniq

    if items.present? && emails.present?
      Rails.logger.info "moderation request email sent to #{emails.join(', ')}"
      ModeratorMailer.items_pending(emails).deliver_now
    
      # indicate that we sent a notification so we dont repeat emails for the same content
      items.each do |s|
        s.update_attributes(pending_notification_sent: DateTime.now)
      end
    end
  end

end
