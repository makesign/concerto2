# frozen_string_literal: true

Rails.logger.debug "Starting #{File.basename(__FILE__)} at #{Time.now}"

module ActiveSupport
  class BufferedLogger
    def formatter=(formatter)
      @log.formatter = formatter
    end
  end
end

class ScrubbingFormatter < Logger::Formatter
  def scrub_file_data(input)
    input.gsub(/\["file_data", ".*, \["file_name/, '["file_data", "REDACTED"], ["file_name')
  end

  def call(_severity, _timestamp, _progname, msg)
    "#{scrub_file_data msg}\n"
  end
end

# Rails.logger.formatter = ScrubbingFormatter.new

Rails.logger.debug "Completed #{File.basename(__FILE__)} at #{Time.now}"
