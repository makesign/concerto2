class RemoveTypesFromFieldConfig < ActiveRecord::Migration[7.1]
  def change
    remove_column :field_configs, :value_type
    remove_column :field_configs, :value_default
  end
end
