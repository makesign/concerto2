# frozen_string_literal: true

# Be sure to restart your server when you modify this file.

Rails.logger.debug { "Starting #{File.basename(__FILE__)} at #{Time.zone.now}" }

Rails.configuration.after_initialize do
  Rails.application.config.session_store(ConcertoConfig[:session_store].to_sym) if ActiveRecord::Base.connection.data_source_exists? 'concerto_configs'
end

Rails.logger.debug { "Completed #{File.basename(__FILE__)} at #{Time.zone.now}" }
