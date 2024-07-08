# frozen_string_literal: true

class ChangeLevelInMembership < ActiveRecord::Migration[7.1]
  def up
    change_column :memberships, :level, :integer, default: 1
  end

  def down
    change_column :memberships, :level, :integer, default: 0
  end
end
