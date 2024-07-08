# frozen_string_literal: true

class AddTimestampToFieldConfig < ActiveRecord::Migration[7.1]
  def change
    add_timestamps(:field_configs)
  end
end
