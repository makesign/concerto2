# frozen_string_literal: true

# config/initializers/dartsass.rb
# see https://github.com/rails/dartsass-rails
Rails.application.config.dartsass.builds = {
  'frontend/application.scss' => 'frontend/application.css',
  'application.scss' => 'application.css'
}
