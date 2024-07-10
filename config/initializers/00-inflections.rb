# frozen_string_literal: true

# Be sure to restart your server when you modify this file.

Rails.logger.debug { "Starting #{File.basename(__FILE__)} at #{Time.zone.now}" }

# Add new inflection rules using the following format
# (all these examples are active by default):
ActiveSupport::Inflector.inflections do |inflect|
  #   inflect.plural /^(ox)$/i, '\1en'
  #   inflect.singular /^(ox)en/i, '\1'
  #   inflect.irregular 'person', 'people'
  #   inflect.uncountable %w( fish sheep )
  inflect.irregular 'media', 'media'
end

# These inflection rules are supported but not enabled by default:
# ActiveSupport::Inflector.inflections(:en) do |inflect|
#   inflect.acronym 'RESTful'
# end

Rails.logger.debug { "Completed #{File.basename(__FILE__)} at #{Time.zone.now}" }
