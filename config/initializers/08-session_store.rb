# Be sure to restart your server when you modify this file.

Rails.logger.debug "Starting #{File.basename(__FILE__)} at #{Time.now.to_s}"

Rails.configuration.after_initialize do
  if ActiveRecord::Base.connection.data_source_exists? 'concerto_configs'
    Rails.application.config.session_store(ConcertoConfig[:session_store].to_sym)
  end
end

Rails.logger.debug "Completed #{File.basename(__FILE__)} at #{Time.now.to_s}"
