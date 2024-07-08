# frozen_string_literal: true

class RenameUserIdToModeratorIdOnSubmissions < ActiveRecord::Migration[7.1]
  def self.up
    rename_column :submissions, :user_id, :moderator_id
  end

  def self.down
    rename_column :submissions, :moderator_id, :user_id
  end
end
