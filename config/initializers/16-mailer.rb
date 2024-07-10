# frozen_string_literal: true

Rails.logger.debug { "Starting #{File.basename(__FILE__)} at #{Time.zone.now}" }
Rails.configuration.after_initialize do
  if ActiveRecord::Base.connection.data_source_exists? 'concerto_configs'
    ActionMailer::Base.delivery_method = ConcertoConfig[:mailer_protocol].to_sym unless ConcertoConfig[:mailer_protocol].nil?
    ActionMailer::Base.default_url_options = { host: ConcertoConfig[:mailer_host] }
    ActionMailer::Base.asset_host = "http://#{ConcertoConfig[:mailer_host]}/"

    if ConcertoConfig[:mailer_protocol] == 'smtp'
      ActionMailer::Base.smtp_settings = {
        address: ConcertoConfig[:smtp_address],
        port: ConcertoConfig[:smtp_port],
        enable_starttls_auto: true
      }
      if ConcertoConfig[:openssl_verify_mode_none] == true
        ActionMailer::Base.smtp_settings[:openssl_verify_mode] =
          'none'
      end
      if ConcertoConfig[:smtp_username].present?
        ActionMailer::Base.smtp_settings[:authentication] = ConcertoConfig[:smtp_auth_type]
        ActionMailer::Base.smtp_settings[:user_name] = ConcertoConfig[:smtp_username]
        ActionMailer::Base.smtp_settings[:password] = ConcertoConfig[:smtp_password]
      end
    end
  end
end
Rails.logger.debug { "Completed #{File.basename(__FILE__)} at #{Time.zone.now}" }
