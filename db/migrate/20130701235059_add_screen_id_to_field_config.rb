class AddScreenIdToFieldConfig < ActiveRecord::Migration[7.1]
  def change
    add_column :field_configs, :screen_id, :integer
  end
end
