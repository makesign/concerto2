# frozen_string_literal: true
#
require "test_helper"

class ScreenTest < ActiveSupport::TestCase

  test "valid_fixtures" do
    [:one, :two,  :three].each do |fixture_name|
      t = templates(:two)
      screen = screens( fixture_name )
      screen.template = t
      valid = screen.valid?
      errors = screen.errors.full_messages
      assert_equal [], errors, "#{fixture_name} is not valid"
    end
  end

  test "invalid" do
    [:rpitv ].each do |fixture_name|
      t = templates(:two)
      screen = screens( fixture_name )
      screen.template = t
      valid = screen.valid?
      errors = screen.errors.full_messages
      assert errors.size > 0, "#{fixture_name} is valid"
    end
  end
end