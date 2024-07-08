# frozen_string_literal: true

class AddTemplateOwner < ActiveRecord::Migration[7.1]
  def change
    add_column :templates, :owner_id, :integer
    add_column :templates, :owner_type, :string
  end
end
