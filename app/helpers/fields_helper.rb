# frozen_string_literal: true

module FieldsHelper
  def field_templates(field)
    templates = []
    field.positions.each do |p|
      templates << p.template unless templates.include?(p.template)
    end
    templates.sort { |a, b| a.name <=> b.name }
  end
end
