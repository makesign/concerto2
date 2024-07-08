# frozen_string_literal: true

class CreateFields < ActiveRecord::Migration[7.1]
  def self.up
    create_table :fields do |t|
      t.string :name
      t.references :type

      t.timestamps
    end
  end

  def self.down
    drop_table :fields
  end
end
