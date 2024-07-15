# frozen_string_literal: true

class Group < ApplicationRecord
  include ActiveModel::ForbiddenAttributesProtection

  before_save :update_membership_perms
  after_create :create_leader

  has_many :feeds, dependent: :restrict_with_error
  has_many :memberships, dependent: :destroy
  accepts_nested_attributes_for :memberships

  has_many :users, -> { where ['memberships.level > ?', Membership::LEVELS[:pending]] }, through: :memberships
  has_many :screens, as: :owner, dependent: :restrict_with_error

  has_many :templates, as: :owner

  # Scoped relation for members and pending members
  has_many :all_users, lambda {
                         where.not(memberships: { level: Membership::LEVELS[:denied] })
                       }, through: :memberships, source: :user

  # Scoped relation for leaders
  has_many :leaders, lambda {
                       where 'memberships.level' => Membership::LEVELS[:leader]
                     }, through: :memberships, source: :user

  # Validations
  validates :name, presence: true, uniqueness: true

  default_scope { order 'LOWER(groups.name)' }

  # Newsfeed
  include PublicActivity::Common if defined? PublicActivity::Common

  # have getters and setters for a new_leader virtual attribute
  attr_accessor :new_leader

  # Manually cascade the callbacks for membership permissions.
  def update_membership_perms
    memberships.each do |m|
      m.run_callbacks(:save)
    end
  end

  def create_leader
    return if new_leader.blank?

    self.new_leader = Membership.create(user_id: new_leader, group_id: id,
                                        level: Membership::LEVELS[:leader])
  end

  # Deliver a list of only users not currently in the group
  # Used for adding new users to a group and avoiding duplication
  def users_not_in_group
    users = User.all.to_a
    memberships.each do |m|
      users.delete_if { |key, _value| key.id == m.user_id }
    end
    users
  end

  def is_deletable?
    no_screens = screens.empty?
    no_feeds = feeds.empty?
    no_screens and no_feeds
  end

  # Test if a user is part of this group
  def has_member?(user)
    users.include?(user)
  end

  # Test if a user has requested membership in this group
  def made_request?(user)
    all_users.include?(user)
  end

  def moderators
    memberships.map { |m| m if m.is_moderator? }
  end

  # Test if a user can be demoted to regular member or removed from a group
  def can_resign_leadership?(membership)
    leaders.count > 1 || !membership.is_leader?
  end

  # Test if a user has a certain permission at a level within a group.
  # Sample usage: user_has_permissions?(user, :regular, :screen, [:subscribe, :all])
  # will test if the `user` has either :all or :subscribe permissions as a supporter in
  # the screen permission type of the current group.
  def user_has_permissions?(user, level, type, permissions)
    return false if user.nil?

    m = memberships.where(user_id: user, level: Membership::LEVELS[level]).first
    return false if m.nil?
    return false unless m.perms.include?(type)

    permissions = [permissions] if permissions.is_a? Symbol
    permissions.each do |p|
      return true if m.perms[type] == p
    end
    false
  end
end
