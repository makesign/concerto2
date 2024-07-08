# frozen_string_literal: true

class AddFeedIndex < ActiveRecord::Migration[7.1]
  def up
    add_index :feeds, :parent_id
  end

  def down
    remove_index :feeds, :parent_id
  end
end
