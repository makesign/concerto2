# frozen_string_literal: true

class CreateTypes < ActiveRecord::Migration[7.1]
  def self.up
    create_table :types do |t|
      t.string :name

      t.timestamps
    end
  end

  def self.down
    drop_table :types
  end
end
