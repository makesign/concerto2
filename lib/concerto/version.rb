# frozen_string_literal: true

module Concerto
  module Version
    MAJOR = 2
    MINOR = 4
    PATCH = 0
    PRE = 'beta.1'
    BUILD = nil

    # https://semver.org/
    STRING = [[[MAJOR, MINOR, PATCH].compact.join('.'), PRE].compact.join('-'), BUILD].compact.join('+')

    def self.dynamic
      Rails.cache.fetch('Version::dynamic') do
        `git describe --always --tags`.strip
      rescue StandardError
        ''
      end
    end
  end
end
