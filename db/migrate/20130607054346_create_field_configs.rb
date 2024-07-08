# frozen_string_literal: true

class CreateFieldConfigs < ActiveRecord::Migration[7.1]
  def change
    create_table :field_configs do |t|
      t.references :field
      t.string :key
      t.string :value
      t.string :value_type
      t.string :value_default
    end
  end
end
