# frozen_string_literal: true

# Adding a new configuration variable:
# Either in your plugin, or in the seeds file, add a row as such:
#  ConcertoConfig.find_or_create_by_key(key: "default_upload_type", value: "graphic", value_default: "graphic", value_type: "string")
# The value type and default will allow the Dashboard to properly create the form for editing the variable
# Also ensure to provide a translation in an appropriate YAML file:
#  default_upload_type: "Default content upload type"

# The variable can then be accessed like this: ConcertoConfig[:public_concerto]
# and modified by calling ConcertoConfig.set(public_concerto,true)

class ConcertoConfig < ApplicationRecord
  include ActiveModel::ForbiddenAttributesProtection

  validates :key, presence: true
  validates :key, uniqueness: true

  # Newsfeed
  include PublicActivity::Common if defined? PublicActivity::Common

  after_destroy :cache_expire

  # a whitelist of valid ConcertoConfigs that is populated when make_concerto_config is called
  @@config_items = []

  # Enable hash-like access to table for ease of use
  # Shortcut for self.get(key)
  def self.[](key)
    get(key.to_s)
  end

  # Make setting values from Rails nice and easy
  def self.set(key, value)
    setting = ConcertoConfig.where(key:).first
    if setting.nil?
      setting = ConcertoConfig.new(key:)
      setting.save
    end
    value == 'true' if (setting.value_type == 'boolean') && value
    setting.update_column(:value, value)
    ConcertoConfig.cache_expire if setting.can_cache?
  end

  # Make getting values from Rails nice and easy
  # Returns false if key isn't found or the config is broken.
  def self.get(key, allow_cache = true)
    # First try a cache hit.
    begin
      if allow_cache
        cache_value = ConcertoConfig.cache_get(key)
        return cache_value unless cache_value.nil?
      end
    rescue Exception => e
      Rails.logger.info("Config cache read failed - #{e.message}")
    end

    setting = ConcertoConfig.where(key:).first
    raise "Concerto Config key #{key} not found!" if setting.nil?

    if setting.value_type == 'boolean'
      %w[true t 1].include?(setting.value) ? (return true) : (return false)
    end

    # Rebuild the cache if there was a cache miss.
    begin
      ConcertoConfig.cache_rebuild if allow_cache && setting.can_cache?
    rescue Exception => e
      Rails.logger.info("Config cache rebuild failed - #{e.message}")
    end

    setting.value
  end

  # Creates a Concerto Config entry by taking the key and value desired
  # Also takes the following options: value_type, value_default, name, category, seq_no, description, plugin_config, and plugin_id
  # If they're not specified, the type is assumed to be string and the default value the key that is set
  # and seq_no to 99, and category to 'Miscellaneous'
  def self.make_concerto_config(config_key, config_value, options = {})
    defaults = {
      value_type: 'string',
      value_default: config_value,
      can_cache: true,
      seq_no: 99,
      category: 'Miscellaneous'
    }
    options = defaults.merge(options)

    @@config_items.push(config_key)

    # push the key and value into the options set so we can pass them implicitly to the first_or_create
    options[:key] = config_key
    options[:value] = config_value

    # if the model does not yet support the option (column) then remove it from the set
    options = options.delete_if { |k, _v| !ConcertoConfig.columns_hash.key?(k.to_s) }

    # first_or_create: check whether first returns nil or not; if it does return nil, create is called
    entry = ConcertoConfig.where(key: config_key).first_or_create(options)

    # resync the following attributes - category and seqno
    resync_columns = %i[category seq_no description]
    options_to_resync = {}
    resync_columns.each do |column_key|
      next unless ConcertoConfig.columns_hash.key?(column_key.to_s)

      options_to_resync[column_key] = options[column_key] if entry[column_key].nil? || (entry[column_key] != options[column_key])
    end
    return if options_to_resync.empty?

    entry.update(options_to_resync)
  end

  # Update the config_last_updated entry to indicate the cached data is no longer valid.
  def self.cache_expire
    updated = ConcertoConfig.where(key: 'config_last_updated').first
    return if updated.nil?

    updated.update_column(:value, (Time.now.to_f * 1_000_000).to_i)
  end

  def cache_expire
    ConcertoConfig.cache_expire
  end

  # Attempt to get a key from the cache.
  # Load the cache and return the key if it exists and if the cache's last update
  # is not older than the config's last update.
  def self.cache_get(key)
    last_updated = ConcertoConfig.get('config_last_updated', false)
    return nil if last_updated.nil? # No validation data for the cache.

    hit = Rails.cache.read('ConcertoConfig')

    if hit.nil? || hit[key].nil? || hit['config_last_updated'].nil? || last_updated != hit['config_last_updated']
      Rails.logger.debug { "Cache miss on #{key}" }
      nil
    else
      Rails.logger.debug { "Cache hit on #{key} -  #{hit[key]}" }
      hit[key]
    end
  end

  # Rebuild the entire cache.
  # Dump the whole config and build a hash of the keys and values.
  # We include the last update entry in this hash and use it later for cache validation.
  def self.cache_rebuild
    data = {}
    ConcertoConfig.find_each do |config|
      next unless config.can_cache?

      data[config.key] = if config.value_type == 'boolean'
                           (config.value == 'true')
                         else
                           config.value
                         end
    end
    Rails.logger.debug('Writing cache')
    Rails.cache.write('ConcertoConfig', data)
  end

  def self.set_config_items(keys)
    @@config_items = keys
  end

  def self.delete_unused_configs
    # remove any config items not in the whitelist on the ConcertoConfig class
    ConcertoConfig.find_each do |config|
      config.destroy unless @@config_items.include?(config.key)
    end
  end
end
