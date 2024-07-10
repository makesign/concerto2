# frozen_string_literal: true

require 'test_helper'

class ScreenTest <  ActionController::TestCase
  test 'valid_fixtures' do
    skip 'htw_migration: failing test' if SKIP_HTW_MIGRATION
    %i[one two three].each do |fixture_name|
      t = templates(:two)
      screen = screens(fixture_name)
      screen.template = t
      screen.valid?
      errors = screen.errors.full_messages
      assert_equal [], errors, "#{fixture_name} is not valid"
    end
  end

  test 'invalid' do
    [:rpitv].each do |fixture_name|
      t = templates(:two)
      screen = screens(fixture_name)
      screen.template = t
      screen.valid?
      errors = screen.errors.full_messages
      assert errors.size.positive?, "#{fixture_name} is valid"
    end
  end
end
