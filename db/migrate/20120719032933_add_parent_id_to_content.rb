# frozen_string_literal: true

class AddParentIdToContent < ActiveRecord::Migration[7.1]
  def change
    add_column :contents, :parent_id, :integer
  end
end
