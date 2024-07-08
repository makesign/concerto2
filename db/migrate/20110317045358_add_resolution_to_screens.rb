# frozen_string_literal: true

class AddResolutionToScreens < ActiveRecord::Migration[7.1]
  def self.up
    add_column :screens, :width, :int
    add_column :screens, :height, :int
  end

  def self.down
    remove_column :screens, :height
    remove_column :screens, :width
  end
end
