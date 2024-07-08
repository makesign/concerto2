# frozen_string_literal: true

class AddLevelToMembership < ActiveRecord::Migration[7.1]
  def up
    remove_column :memberships, :is_leader
    add_column :memberships, :level, :integer, default: 0
  end

  def down
    add_column :memberships, :is_leader, :boolean, default: false
    remove_column :memberships, :level
  end
end
