# frozen_string_literal: true

require 'test_helper'

class FeedsHelperTest < ActionView::TestCase
  test 'default dfs tree' do
    skip 'htw_migration: failing test' if SKIP_HTW_MIGRATION
    tree = dfs_tree
    assert_equal tree.length, Feed.all.length

    i = tree.index(feeds(:announcements))
    j = tree.index(feeds(:boring_announcements))
    assert_equal tree[j + 1], feeds(:sleepy_announcements)

    offset = if j - i == 1
               j + 2
             else
               i + 1
             end
    assert_equal tree[offset], feeds(:important_announcements)
  end

  test 'excluding dfs tree' do
    skip 'htw_migration: failing test' if SKIP_HTW_MIGRATION
    feed = feeds(:boring_announcements)
    tree = dfs_tree(Feed.roots, feed)
    assert_equal tree.length, Feed.all.length - 2

    assert !tree.include?(feeds(:boring_announcements))
    assert !tree.include?(feeds(:sleepy_announcements))
  end
end
