# frozen_string_literal: true

Rails.logger.debug "Starting #{File.basename(__FILE__)} at #{Time.now}"
Rails.configuration.after_initialize do
  if ActiveRecord::Base.connection.data_source_exists?('kinds') && Kind.none?
    Rails.logger.error('All kinds are missing, creating some.')
    %w[Graphics Ticker Text Dynamic].each do |kind|
      Kind.where(name: kind).first_or_create
    end
  end

  # If there are no fields, create some.
  if ActiveRecord::Base.connection.data_source_exists?('fields') && ActiveRecord::Base.connection.data_source_exists?('kinds') && Field.none?
    Rails.logger.error('All fields are missing, creating some.')
    Kind.all.each do |kind|
      Field.where(name: kind.name).first_or_create(kind: Kind.where(name: kind.name).first)
    end
    # The time is just a special text field.
    Field.where(name: 'Time').first_or_create(kind: Kind.where(name: 'Text').first)
  end
end
Rails.logger.debug "Completed #{File.basename(__FILE__)} at #{Time.now}"
