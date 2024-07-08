# frozen_string_literal: true

require 'test_helper'

class MacAddrTest < ActiveSupport::TestCase
  test 'to_i' do
    assert_equal 1_829_701_878_732, MacAddr.to_i('01:AA:02:BB:03:CC')
  end

  test 'to_hex' do
    assert_equal '01:aa:02:bb:03:cc', MacAddr.to_hex(1_829_701_878_732)
  end
end
