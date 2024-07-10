# frozen_string_literal: true

require 'simplecov'
SimpleCov.start

SKIP_HTW_MIGRATION = true

ENV['RAILS_ENV'] = 'test'
require File.expand_path('../config/environment', __dir__)
require 'rails/test_help'
load "#{Rails.root}/config/initializers/02-concerto_config.rb"

module ActiveSupport
  class TestCase
    # Setup all fixtures in test/fixtures/*.(yml|csv) for all tests in alphabetical order.
    #
    # Note: You'll currently still have to declare fixtures explicitly in integration tests
    # -- they do not yet inherit this setting
    fixtures :all

    # Add more helper methods to be used by all tests here...
    def assert_login_failure
      assert_redirected_to root_url
      assert flash[:notice]
      assert flash[:notice].include? 'not authorized'
    end

    def assert_small_delta(expected, actual)
      assert_in_delta(expected, actual, 0.00001)
    end
  end
end

ALREADY_TRACED = [].to_set
module FixtureFileHelpers
  def trace(a_string)
    if ALREADY_TRACED.include?(a_string)
      logger.warn("already traced: #{a_string}")
    else
      ALREADY_TRACED.add(a_string)
    end
    a_string
  end
end
ActiveRecord::FixtureSet.context_class.include FixtureFileHelpers
