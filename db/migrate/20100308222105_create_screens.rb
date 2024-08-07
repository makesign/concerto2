# frozen_string_literal: true

class CreateScreens < ActiveRecord::Migration[7.1]
  def self.up
    create_table :screens do |t|
      t.string :name
      t.string :location
      t.boolean :is_public
      t.references :owner, polymorphic: true
      t.references :template

      t.timestamps
    end
  end

  def self.down
    drop_table :screens
  end
end
