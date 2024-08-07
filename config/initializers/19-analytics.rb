# frozen_string_literal: true

Rails.logger.debug { "Starting #{File.basename(__FILE__)} at #{Time.zone.now}" }
Rails.configuration.after_initialize do
  # Concerto user analytics configuration
  if ActiveRecord::Base.connection.data_source_exists?('concerto_configs') && ConcertoConfig.columns_hash.key?('plugin_id')
    ConcertoConfig.make_concerto_config('analytics_enabled', 'false', value_type: 'boolean', value_default: 'false', category: 'Analytics', seq_no: 1,
                                                                      description: 'If checked, enables Google Analytics.')
    ConcertoConfig.make_concerto_config('analytics_property_id', 'UA-XXXX-Y', value_type: 'string', value_default: 'UA-XXXX-Y', category: 'Analytics', seq_no: 2,
                                                                              description: 'The Web Property ID provided by Google Analytics.')
  end
end
Rails.logger.debug { "Completed #{File.basename(__FILE__)} at #{Time.zone.now}" }
