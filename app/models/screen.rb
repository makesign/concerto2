# frozen_string_literal: true

class Screen < ActiveRecord::Base
  include ActiveModel::ForbiddenAttributesProtection

  # Define integration hooks for Concerto Plugins
  define_model_callbacks :frontend_display
  ConcertoPlugin.install_callbacks(self) # Get the callbacks from plugins

  # Define some actions for communication with the Screens form
  AUTH_NO_ACTION = 0
  AUTH_KEEP_TOKEN = 1
  AUTH_LEGACY_SCREEN = 2
  AUTH_NEW_TOKEN = 3
  AUTH_NO_SECURITY = 4

  TEMP_TOKEN_LENGTH = 6 # Must be even.

  # Allow screens to act as accessors for the Frontend API
  # devise

  belongs_to :owner, polymorphic: true
  validates :owner_id, presence: true
  belongs_to :template
  validates :template, presence: true, associated: true

  has_many :subscriptions, dependent: :destroy
  has_many :positions, through: :template
  has_many :field_configs, dependent: :destroy
  has_many :fields, through: :positions
  # has_many :fields, through: :field_configs # this overwrites the prior definition, so leave off

  before_validation :update_authentication

  # Validations
  validates :name, presence: true, uniqueness: true
  # These two validations are used to solve problems with the polymorphic
  # presence and associated tests.

  # validates_inclusion_of :owner_type, in: %w( User Group )
  # The below validation fails loudly if the owner_type isn't a valid class
  # For now, the check will be string based, it should probably be moved to
  # something like if owner_type.is_class (however that would work)
  validates :owner, presence: true, associated: true, if: proc { %w[User Group].include?(owner_type) }
  # Authentication token must be unique, prevents mac address collisions with legacy screens.
  validates :authentication_token, uniqueness: { allow_nil: true, allow_blank: true }
  validate :unsecured_screens_must_be_public

  validates :locale, format: { with: /\A[a-z]{2}(-[A-Z]{2}){0,1}\Z/, message: 'format is xx or xx-XX' },
                     allow_blank: true

  def unsecured_screens_must_be_public
    return unless !is_public? && (unsecured? || auth_by_mac?)

    errors.add(:base, 'Screens must be publicly viewable if they are not secured by a token.')
  end

  # Newsfeed
  include PublicActivity::Common if defined? PublicActivity::Common

  # Scopes
  ONLINE_THRESHOLD = 5.minutes
  OFFLINE_THRESHOLD = 5.minutes
  scope :online, -> { where('frontend_updated_at >= ?', Clock.time - Screen::ONLINE_THRESHOLD) }
  scope :offline, lambda {
                    where('frontend_updated_at IS NULL OR frontend_updated_at < ?', Clock.time - Screen::OFFLINE_THRESHOLD)
                  }

  scope :order_by_name, -> { order 'LOWER(name)' }

  # types of entities that may "own" a screen
  SCREEN_OWNER_TYPES = %w[User Group].freeze

  # Determine the screen's aspect ratio.  If it doesn't exist, calculate it
  def aspect_ratio
    return { width: '', height: '' } if width.nil? || height.nil?

    gcd = gcd(width, height)
    aspect_width = width / gcd
    aspect_height = height / gcd
    { width: aspect_width, height: aspect_height }
  end

  # Run Euclidean algorithm to find GCD
  def gcd(a, b)
    return a if b.zero?

    gcd(b, a.modulo(b))
  end

  def mark_updated
    update_column(:frontend_updated_at, Clock.time)
  end

  # Mark the screen as updated if it will soon fall into offline status
  def sometimes_mark_updated
    return unless is_offline?(Screen::OFFLINE_THRESHOLD - 1.minute)

    mark_updated
  end

  def is_online?
    !frontend_updated_at.nil? && frontend_updated_at >= (Clock.time - Screen::ONLINE_THRESHOLD)
  end

  def is_offline?(within = Screen::OFFLINE_THRESHOLD)
    frontend_updated_at.nil? || frontend_updated_at < (Clock.time - within)
  end

  def self.find_by_mac(mac_addr)
    mac = MacAddr.condense(mac_addr)
    token = "mac:#{mac}"
    Screen.where(authentication_token: token).first
  rescue ActiveRecord::ActiveRecordError
    nil
  end

  def mac_address=(mac_addr)
    mac = MacAddr.condense(mac_addr)
    self.authentication_token = ("mac:#{mac}" unless mac.empty?)
  end

  def mac_address
    mac = token_by_type('mac')
    mac = MacAddr.expand(mac) unless mac.nil?
    mac
  end

  def screen_token
    token_by_type('auth')
  end

  def self.find_by_screen_token(token)
    return nil if token.blank?

    begin
      Screen.where(authentication_token: "auth:#{token}").first
    rescue ActiveRecord::ActiveRecordError
      nil
    end
  end

  def generate_screen_token!
    require 'securerandom'
    token = SecureRandom.hex
    update_attribute(:authentication_token, "auth:#{token}")
    token
  end

  def clear_screen_token!
    update_attribute(:authentication_token, '')
  end

  def clear_screen_token
    self.authentication_token = ''
  end

  def clear_temp_token
    self.new_temp_token = ''
  end

  # The token is first associated with a session, not a Screen, so
  # it is generated independent of a particular instance
  def self.generate_temp_token
    require 'securerandom'
    SecureRandom.hex(3) # Short token (length 3*2) since the user will enter this
  end

  def temp_token=(token)
    return unless !token.nil? && !token.empty? # TODO: Validate

    self.authentication_token = "temp:#{token}"
  end

  def temp_token
    token_by_type('temp')
  end

  def self.find_by_temp_token(token)
    return nil if token.blank?

    begin
      Screen.where(authentication_token: "temp:#{token}").first
    rescue ActiveRecord::ActiveRecordError
      nil
    end
  end

  # System for controlling auth from a form

  # Store the value for this fake param until the callback is run.
  def auth_action=(action)
    action = action.to_i
    @auth_action = if [AUTH_NEW_TOKEN, AUTH_NO_SECURITY].include? action
                     action
                   else
                     AUTH_NO_ACTION
                   end
  end

  # Radio button default
  def auth_action
    return AUTH_NEW_TOKEN unless new_temp_token.blank?
    return AUTH_NO_SECURITY if unsecured?
    return AUTH_KEEP_TOKEN if auth_in_progress? || auth_by_token?
    return AUTH_LEGACY_SCREEN if auth_by_mac?

    0
  end

  # Store the value for this fake param until the callback is run.
  attr_writer :new_temp_token

  def new_temp_token
    @new_temp_token || ''
  end

  # Callback to execute the action requested by the form, based on
  # the provided data.
  def update_authentication
    if @auth_action == AUTH_NO_SECURITY
      clear_screen_token
      clear_temp_token
    elsif @auth_action == AUTH_NEW_TOKEN
      self.temp_token = @new_temp_token
    end
  end

  def unsecured?
    authentication_token.nil? or
      !authentication_token.start_with? 'auth:', 'temp:', 'mac:'
  end

  def auth_by_token?
    !authentication_token.nil? and
      authentication_token.start_with? 'auth:'
  end

  def auth_in_progress?
    !authentication_token.nil? and
      authentication_token.start_with? 'temp:'
  end

  # Not really "authenticated", but you get the point
  def auth_by_mac?
    !authentication_token.nil? and
      authentication_token.start_with? 'mac:'
  end

  # Compute a cache key suitable for use in the frontend.
  # Combines the updated information for the screen, template, positions,
  # and fields to make a single key.
  #
  # @param [Array<#updated_at>] args A list of object to factor in.  These objects should
  #    respond to the `updated_at` method and are skipped if they do not.
  # @return [String] The cache key for this frontend string.
  def frontend_cache_key(*args)
    require 'digest/md5'

    max_updated_at = updated_at.try(:utc).try(:to_i)
    max_updated_at = [template.updated_at.try(:utc).try(:to_i), max_updated_at].max
    template.positions.each do |p|
      max_updated_at = [p.updated_at.try(:utc).try(:to_i), p.field.updated_at.try(:utc).try(:to_i), max_updated_at].max
      p.field.field_configs.each do |field_config|
        max_updated_at = [field_config.updated_at.try(:utc).try(:to_i), max_updated_at].max unless field_config.updated_at.nil?
      end
    end
    template.media.each do |m|
      max_updated_at = [m.updated_at.try(:utc).try(:to_i), max_updated_at].max
    end
    args.each do |ao|
      if ao.respond_to? 'updated_at'
        max_updated_at = [ao.updated_at.try(:utc).try(:to_i), max_updated_at].max
      elsif ao.respond_to? 'each'
        ao.each do |aso|
          max_updated_at = [aso.updated_at.try(:utc).try(:to_i), max_updated_at].max if aso.respond_to? 'updated_at'
        end
      end
    end
    # other items that affect the key but dont have timestamps (such as config settings)
    other = []
    other << ConcertoConfig['screens_clear_last_content']
    other_md5 = Digest::MD5.hexdigest(other.to_s)
    "frontend-screen/#{id}-#{template.id}-#{max_updated_at}-#{other_md5}"
  end

  def portrait?
    width.present? && height.present? && height > width
  end

  private

  # Right now there are three types of tokens
  #   mac -  for public screens that are accessed by legacy clients
  #   auth - for authenticating secure screens once they are set up
  #   temp - used during one-time setup for secure screens
  def token_by_type(type)
    return nil if authentication_token.nil?

    (token_type, value) = authentication_token.split(':')
    return value if type == token_type

    nil
  end
end
