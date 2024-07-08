# frozen_string_literal: true

# Check the latest version of Concerto 2 via remote sources.
module VersionCheck
  def self.latest_version
    version = Rails.cache.read 'concerto_version'
    version_updated = Rails.cache.read 'concerto_version_time'
    if !version.nil? && version_updated.is_a?(Time) && !version_updated.nil? # Version is cached.
      version = Octokit.latest_release('concerto/concerto').tag_name if version_updated < Time.now - 86_400 # Stale (older than 24 hours).
    else # Fetch the latest version.
      Rails.logger.info 'Downloading latest Concerto version information for the first time.'
      begin
        version = Octokit.latest_release('concerto/concerto').tag_name
      rescue Faraday::ConnectionFailed => e
        Rails.logger.error "Unable to fetch Concerto version - #{e.message}"
        version = nil
      end
    end
    version
  rescue Octokit::TooManyRequests
    Rails.logger.error 'Exceeded Github API quota when trying to fetch Concerto version.'
    Concerto::Version::STRING
  end
end
