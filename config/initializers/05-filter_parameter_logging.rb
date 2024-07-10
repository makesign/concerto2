# frozen_string_literal: true

# Be sure to restart your server when you modify this file.

Rails.logger.debug { "Starting #{File.basename(__FILE__)} at #{Time.zone.now}" }

# Configure parameters to be partially matched (e.g. passw matches password) and filtered from the log file.
# Use this to limit dissemination of sensitive information.
# See the ActiveSupport::ParameterFilter documentation for supported notations and behaviors.
Rails.application.config.filter_parameters += %i[
  passw secret token _key crypt salt certificate otp ssn
]
Rails.logger.debug { "Completed #{File.basename(__FILE__)} at #{Time.zone.now}" }
