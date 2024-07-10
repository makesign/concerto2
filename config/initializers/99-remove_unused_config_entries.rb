# frozen_string_literal: true

Rails.configuration.after_initialize do
  Rails.logger.debug { "Starting #{File.basename(__FILE__)} at #{Time.zone.now}" }

  # remove any obsolete config entries
  ConcertoConfig.delete_unused_configs if ActiveRecord::Base.connection.data_source_exists? 'concerto_configs'

  Rails.logger.debug { "Completed #{File.basename(__FILE__)} at #{Time.zone.now}" }
end
