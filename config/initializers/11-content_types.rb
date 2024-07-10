# frozen_string_literal: true

Rails.logger.debug { "Starting #{File.basename(__FILE__)} at #{Time.zone.now}" }

Rails.configuration.after_initialize do
  # An array of all the possible content types a user can upload content to.
  # Plugins will want to append their classes to this list.
  Rails.application.config.content_types = [Ticker, Graphic]

  # We need to load unused content types too.
  # Since Rails lazy-loads models, rails doesn't have a complete picture of
  # all the Content children, only the ones that have been loaded / used.

  Rails.application.config._unused_content_types_ = [HtmlText]
end
Rails.logger.debug { "Completed #{File.basename(__FILE__)} at #{Time.zone.now}" }
