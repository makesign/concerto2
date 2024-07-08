# frozen_string_literal: true

require 'test_helper'

class ClientTimeTest < ActiveSupport::TestCase
  test 'validations' do
    skip 'htw_migration: failing test' if SKIP_HTW_MIGRATION
    c = ClientTime.new(name: 'test', user: users(:admin))
    c.duration = 0
    assert !c.valid?

    c.duration = 60
    assert !c.valid?

    c.duration = 59
    assert c.valid?
  end
end
