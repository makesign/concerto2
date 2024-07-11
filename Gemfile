# frozen_string_literal: true

source 'https://rubygems.org'

ruby '3.3.3'

# workaround for net-pop till fixed with ruby 3.3.4
gem 'net-pop', github: 'ruby/net-pop'

# TBD: is nokogiri still needed in rails 7?
# gem 'nokogiri', '~> 1.13', '>= 1.13.10' # pin while on ruby < 2.7
gem 'rails', '~> 7.1.3', '>= 7.1.3.4'

# Get the absolute path of this Gemfile so the includes below still work
# when the current directory for a bundler command isn't the application's
# root directory.
# TBD: still needed?
basedir = File.dirname(__FILE__)

# ConcertoPlugins start

# The Gemfile-plugins gem list is managed by Concerto itself,
# through the ConcertoPlugins controller.

group :concerto_plugins do
  # gem 'concerto_calendar'
  # gem 'concerto_frontend'
  # gem 'concerto_hardware'
  # gem "concerto_iframe"
  # gem 'concerto_remote_video'
  # TODO: see https://github.com/makesign/concerto2/issues/4
  # gem 'concerto_simple_rss'
  # gem "concerto_weather", :git => 'https://github.com/concerto/concerto-weather.git', :branch => 'rails5'
end

# Load a local Gemfile if it exists
eval File.read("#{basedir}/Gemfile.local") if File.exist?("#{basedir}/Gemfile.local")

# ConcertoPlugins end

# The original asset pipeline for Rails [https://github.com/rails/sprockets-rails]
gem 'sprockets-rails'

# Use sqlite3 as the database for Active Record
gem 'sqlite3', '~> 1.4'

# new rails gems (somewhere between rails 3 and rails 7)

# Use the Puma web server [https://github.com/puma/puma]
gem 'puma', '>= 5.0'

# Use JavaScript with ESM import maps [https://github.com/rails/importmap-rails]
gem 'importmap-rails'

# Hotwire's SPA-like page accelerator [https://turbo.hotwired.dev]
gem 'turbo-rails'

# Hotwire's modest JavaScript framework [https://stimulus.hotwired.dev]
gem 'stimulus-rails'

# Build JSON APIs with ease [https://github.com/rails/jbuilder]
gem 'jbuilder'

# Use Redis adapter to run Action Cable in production
# gem "redis", ">= 4.0.1"

# Use Kredis to get higher-level data types in Redis [https://github.com/rails/kredis]
# gem "kredis"

# Use Active Model has_secure_password [https://guides.rubyonrails.org/active_model_basics.html#securepassword]
# gem "bcrypt", "~> 3.1.7"

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: %i[windows jruby]

# Reduces boot times through caching; required in config/boot.rb
gem 'bootsnap', require: false

# Use Active Storage variants [https://guides.rubyonrails.org/active_storage_overview.html#transforming-images]
gem 'image_processing', '~> 1.2'

group :development, :test do
  # See https://guides.rubyonrails.org/debugging_rails_applications.html#debugging-with-the-debug-gem
  gem 'debug', platforms: %i[mri windows]
end

group :development do
  # Use console on exceptions pages [https://github.com/rails/web-console]
  gem 'web-console'

  gem 'i18n-js', '~> 4.2'

  gem 'i18n-tasks', '~> 1.0'

  # Add speed badges [https://github.com/MiniProfiler/rack-mini-profiler]
  # gem "rack-mini-profiler"

  # Speed up commands on slow machines / big apps [https://github.com/rails/spring]
  # gem "spring"
end

group :test do
  # Use system testing [https://guides.rubyonrails.org/testing.html#system-testing]
  gem 'capybara'
  gem 'selenium-webdriver'
  gem 'simplecov'
end

gem 'cancancan', '~> 3.6'
gem 'devise'

# extra gems in concerto

gem 'mime-types', '~> 3.5'
# https://github.com/rails/dartsass-rails
gem 'dartsass-rails', '~> 0.5.0'

gem 'delayed_job', '~> 4.1'

gem 'kaminari', '~> 1.2'

gem 'font-awesome-sass', '~> 6.5'

gem 'faraday-retry', '~> 2.2'

gem 'rmagick', '~> 6.0'

gem 'faraday-multipart', '~> 1.0'

gem 'rails-controller-testing', '~> 1.0'

gem 'rails-mermaid_erd', '~> 0.5.0'

gem 'redcarpet', '~> 3.6'

gem 'bundler-audit', '~> 0.9.1'

gem 'brakeman', '~> 6.1'

gem 'rubocop', '~> 1.64'

gem 'pg', '~> 1.5'

gem 'jquery-rails', '~> 4.6'

gem 'bootstrap-datepicker-rails', '~> 1.10'

gem 'twitter-bootstrap-rails-confirm', '~> 2.0'

gem 'jquery-timepicker-rails', '~> 1.11'

gem 'rubocop-rails', '~> 2.25'

gem "rubocop-capybara", "~> 2.21"
