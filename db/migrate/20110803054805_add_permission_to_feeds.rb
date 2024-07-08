# frozen_string_literal: true

class AddPermissionToFeeds < ActiveRecord::Migration[7.1]
  def change
    add_column :feeds, :is_viewable, :boolean, default: true
    add_column :feeds, :is_submittable, :boolean, default: true
  end
end
