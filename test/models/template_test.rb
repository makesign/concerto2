# frozen_string_literal: true

require 'test_helper'

class TemplateModelTest < ActiveSupport::TestCase
  test 'valid_fixtures' do
    %i[one two hidden].each do |fixture_name|
      template = templates(fixture_name)
      template.valid?
      errors = template.errors.full_messages
      assert_equal [], errors
    end
  end
end
