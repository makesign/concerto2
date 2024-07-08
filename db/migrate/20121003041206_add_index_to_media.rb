# frozen_string_literal: true

class AddIndexToMedia < ActiveRecord::Migration[7.1]
  def change
    add_index :media, %i[attachable_id attachable_type]
  end
end
