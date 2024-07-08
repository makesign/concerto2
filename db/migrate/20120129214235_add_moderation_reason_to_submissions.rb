# frozen_string_literal: true

class AddModerationReasonToSubmissions < ActiveRecord::Migration[7.1]
  def up
    add_column :submissions, :moderation_reason, :text
  end

  def down
    remove_column :submissions, :moderation_reason
  end
end
