# frozen_string_literal: true

Rails.configuration.after_initialize do
  Rails.logger.debug { "Starting #{File.basename(__FILE__)} at #{Time.zone.now}" }

  secret_token = ENV.fetch('SECRET_TOKEN', nil)

  if secret_token.blank? && ActiveRecord::Base.connection.data_source_exists?('concerto_configs')
    # Try go get secret key from concerto config or auto-generate it
    secret_token = ConcertoConfig[:secret_token]
  end

  if secret_token.blank?
    require 'securerandom'
    secret_token = SecureRandom.hex(64)
    Rails.logger.debug 'Auto-generated secret token'

    ConcertoConfig.set('secret_token', secret_token) if ActiveRecord::Base.connection.data_source_exists?('concerto_configs')
  end

  # Secret key for verifying the integrity of signed cookies.
  Rails.application.config.secret_token = secret_token
  Rails.application.config.secret_key_base = secret_token
  ENV['SECRET_KEY_BASE'] = secret_token
  Rails.logger.debug { "Completed #{File.basename(__FILE__)} at #{Time.zone.now}" }
end
