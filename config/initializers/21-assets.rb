# frozen_string_literal: true

# Be sure to restart your server when you modify this file.

Rails.logger.debug "Starting #{File.basename(__FILE__)} at #{Time.now}"

# rails 7.1.:
# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Add additional assets to the asset load path.
# Rails.application.config.assets.paths << Emoji.images_path

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in the app/assets
# folder are already added.
# Rails.application.config.assets.precompile += %w( admin.js admin.css )
# TBD: some can probably be removed?
Rails.application.config.assets.precompile += %w[application.css application.js frontend/application.css
                                                 frontend/application.js **/*.js **/*.css]

Rails.application.config.assets.precompile += %w[bootstrap.min.js popper.js]

Rails.logger.debug "Completed #{File.basename(__FILE__)} at #{Time.now}"
