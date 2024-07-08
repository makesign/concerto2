# frozen_string_literal: true

class AddContentTypesToFeeds < ActiveRecord::Migration[7.1]
  def change
    add_column :feeds, :content_types, :text
  end
end
