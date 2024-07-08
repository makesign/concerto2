require 'test_helper'

class WeightedShuffleIntegrationTest < ActionDispatch::IntegrationTest
  # fixtures :all

  test 'returns expected content' do
    skip "htw_migration: failing test" if (SKIP_HTW_MIGRATION)
    screen = screens(:one)
    field = fields(:one)
    subscriptions = screen.subscriptions.where(field_id: field.id)

    b = WeightedShuffle.new(screen, field, subscriptions)
    n = b.next_contents

    assert_equal n.count, 3 # one + two pieces of content
    assert_equal n.select { |e| e.name == 'Welcome Active Ticker2' }.count, 2
    assert_equal n.select { |e| e.name == 'Welcome Active Ticker' }.count, 1
  end
end
