
require 'rubygems'

ENV["BUNDLE_GEMFILE"] ||= File.expand_path("../Gemfile", __dir__)
require "bundler/setup" # Set up gems listed in the Gemfile.
require "bootsnap/setup" # Speed up boot time by caching expensive operations.


# >>> Concerto-specific modifications ahead. <<<

# Include "which" and "command?" methods:
require File.expand_path('../../lib/command_check.rb', __FILE__)

#load low-level config yaml to check installation config params
require 'yaml'
# concerto_base_config = YAML.load_file("./config/concerto.yml")

#To do automagical bundle installation, frozen gems must NOT be in use,
#the eponymous option must be set in concerto.yml,
#and Concerto cannot be running in the test environment (or at least not Travis')
# if ENV['FROZEN'] != "1" && concerto_base_config['automatic_bundle_installation'] == true && ENV['RAILS_ENV'] != 'test'
#   if command?('gem') == false && command?('bundle') == false
#     raise "Gem and Bundler are required to run Concerto gem installation.\n" +
#     	  "You can disable automatic gem installation in config/concerto.yml"
#   end
# 
#   if system_has_mysql?
#     db_options = " --without postgres"
#   elsif system_has_postgres?
#     db_options = " --without mysql"
#   else
#     db_options = " --without postgres mysql"
#   end

  #get output of the bundle install command for later possible use
  # bundle_output = `bundle install #{db_options} #{concerto_base_config['bundle_install_options']}`
  #use the magical object from $? to get status of output
  # result = $?.success?

  #if the command doesn't work, retrieve the backup Gemfile and restart
  # if !result
  #   if File.file? "Gemfile-plugins.bak"
  #     old_gemfile = IO.read("Gemfile-plugins.bak")
  #     File.open("Gemfile-plugins", 'w') {|f| f.write(old_gemfile) }
  #   end
  #   raise "Bundler error: #{bundle_output}"
  # end
end

# >>> End of concerto-specific mods. Proceed with booting app. <<<

# require 'bundler/setup' if File.exist?(ENV['BUNDLE_GEMFILE'])
