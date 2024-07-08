# frozen_string_literal: true

class Membership < ActiveRecord::Base
  include ActiveModel::ForbiddenAttributesProtection

  # Membership levels
  LEVELS = {
    # A denied member is not a member of the group.
    denied: 0,
    # A pending member has not yet been accepted into a group.
    # We need to update authorization to reflect this.
    pending: 1,
    # A regular member is a member of the group with full read permission.
    regular: 2,
    # A leader controls the group.
    leader: 9
  }.freeze

  # Membership Permissions
  PERMISSIONS = {
    regular: {
      screen: {
        none: 0, # No screen write privledges
        subscriptions: 3, # Can update subscriptions
        all: 9 # Full write privledges
      },
      feed: {
        none: 0, # No feed write privledges
        submissions: 3, # Can update submissions (moderate)
        all: 9 # Full write privledges
      }
    }
  }.freeze

  after_initialize :expand_permissions
  before_save :compact_permissions

  belongs_to :user
  validates :user, presence: true, associated: true
  belongs_to :group
  validates :group, presence: true, associated: true

  # Newsfeed
  include PublicActivity::Common if defined? PublicActivity::Common

  # Validations
  validates_uniqueness_of :user_id, scope: :group_id

  # Scoping shortcuts for leaders/regular
  scope :leader, -> { where level: Membership::LEVELS[:leader] }
  scope :regular, -> { where level: Membership::LEVELS[:regular] }

  # Scoping shortcuts for workflow (approved/pending/denied)
  scope :approved, -> { where('level > ?', Membership::LEVELS[:pending]) }
  scope :pending, -> { where level: Membership::LEVELS[:pending] }
  scope :denied, -> { where level: Membership::LEVELS[:denied] }

  attr_accessor :perms

  def expand_permissions
    self.perms = {}
    level_sym = level_name.to_sym
    if PERMISSIONS.include?(level_sym) && !permissions.nil?
      local_perms = PERMISSIONS[level_sym]
      local_perms.each_with_index do |(key, _value), index|
        if index.zero?
          p_value = permissions % 10
        else
          p_value = permissions / (10**index)
          p_value %= 10
        end
        type = (local_perms[key].respond_to?(:key) ? local_perms[key].key(p_value) : local_perms[key].index(p_value))
        perms[key] = (type unless type.nil?)
      end
    end
    perms
  end

  def compact_permissions
    level_sym = level_name.to_sym
    return unless PERMISSIONS.include?(level_sym)

    local_perms = PERMISSIONS[level_sym]
    new_permissions = 0
    local_perms.each_with_index do |(key, _value), index|
      p_value = 0
      unless perms[key].nil?
        p_sym = perms[key].to_sym
        p_value = local_perms[key][p_sym]
      end
      if index.zero?
        new_permissions = if !p_value.nil?
                            p_value
                          else
                            0
                          end
      else
        new_permissions += p_value * (10**index)
      end
    end
    self.permissions = new_permissions
  end

  # Get level name of a membership
  def level_name
    (Membership::LEVELS.respond_to?(:key) ? Membership::LEVELS.key(level) : Membership::LEVELS.index(level)).to_s
  end

  # Test if the membership has been approved.
  def is_approved?
    level > Membership::LEVELS[:pending]
  end

  # Test if the membership has been denied.
  def is_denied?
    level == Membership::LEVELS[:denied]
  end

  # Test if the membership is pending.
  def is_pending?
    level == Membership::LEVELS[:pending]
  end

  # A shortcut to test if a membership represents a leader
  def is_leader?
    level == Membership::LEVELS[:leader]
  end

  def is_moderator?
    is_leader? || (is_approved? && (perms[:feed] == :all || perms[:feed] == :submissions))
  end

  # action can be {"approve, deny, promote, demote"}
  def update_membership_level(action)
    case action
    when 'approve'
      # Can only approve if current level is pending
      if level == Membership::LEVELS[:pending] && update({ level: Membership::LEVELS[:regular] })
        return true, :membership_approved
      end

      return false, :membership_approved_failure

    when 'deny'
      # Can only deny if current level is pending
      if level == Membership::LEVELS[:pending] && update({ level: Membership::LEVELS[:denied] })
        return true, :membership_denied
      end

      return false, :membership_denied_failure

    when 'promote'
      # Can only promote regular members
      if level == Membership::LEVELS[:regular] && update({ level: Membership::LEVELS[:leader] })
        return true, :membership_promoted
      end

      return false, :membership_promoted_failure

    when 'demote'
      # Only Leaders can be demoted, but only when there is more than one.
      if can_resign_leadership? && update({ level: Membership::LEVELS[:regular] })
        return true, :membership_demoted
        true
      else
        return false, :membership_demoted_failure
        false
      end
    when 'unblock'
      if level == Membership::LEVELS[:denied] && update({ level: Membership::LEVELS[:regular] })
        return true, :membership_approved
      end

      return false, :membership_approved_failure

    end
    # default is failure
    [false, :membership_unknown_action]
  end

  # Returns whether a particular member object can resign leadership
  def can_resign_leadership?
    group.leaders.count > 1 && is_leader?
  end
end
