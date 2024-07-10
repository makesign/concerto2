# frozen_string_literal: true

class Submission < ApplicationRecord
  include ActiveModel::ForbiddenAttributesProtection

  belongs_to :content, autosave: true
  validates :content, associated: true

  belongs_to :feed
  validates :feed, associated: true

  belongs_to :moderator, class_name: 'User', optional: true
  validates :moderator, presence: { unless: proc { |s| s.is_pending? || (s.content && s.content.is_expired?) } },
                        associated: true

  after_save :update_child_moderation

  # Validations

  validates :duration, numericality: { greater_than: 0 }
  validates :content_id, uniqueness: { scope: :feed_id } # Enforce content can only be submitted to a feed once

  # Scoping shortcuts for approved/denied/pending
  scope :approved, -> { where moderation_flag: true }
  scope :denied, -> { where moderation_flag: false }
  scope :pending, -> { where(moderation_flag: nil) }
  scope :unsent, -> { where(pending_notification_sent: nil) }

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

  # Newsfeed
  include PublicActivity::Common if defined? PublicActivity::Common

  def moderation_text
    case moderation_flag
    when true
      I18n.t(:approved)
    when false
      I18n.t(:rejected)
    else
      I18n.t(:pending)
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
    return false if moderation_flag || moderation_flag.nil?

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
    return unless changed.include?('moderation_flag') && content.has_children?

    content.children.each do |child|
      similiar_submissions = Submission.where(content_id: child.id, feed_id:,
                                              moderation_flag: moderation_flag_was)
      similiar_submissions.each do |child_submission|
        child_submission.update({ moderation_flag:, moderator_id: })
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
      # Rails.logger.info submission
      # print submission.to_yaml
      # print submission.errors.to_yaml
      submission.save
    end
  end

  # if there are any pending submissions, send a notice to the unique list of moderators
  def self.send_moderation_request_notifications
    items = Submission.pending.unsent
    emails = items.map do |s|
               s.feed.group.moderators
             end.flatten.compact.map do |m|
      m.user.email if m.receive_emails && m.user.receive_moderation_notifications
    end.compact.sort.uniq

    return unless items.present? && emails.present?

    Rails.logger.info "moderation request email sent to #{emails.join(', ')}"
    ModeratorMailer.items_pending(emails).deliver_now

    # indicate that we sent a notification so we dont repeat emails for the same content
    items.each do |s|
      s.update(pending_notification_sent: DateTime.now)
    end
  end
end
