class AddSelectConfig < ActiveRecord::Migration[7.1]
  def change
    change_column :concerto_configs, :hidden, :boolean, :default => false
    add_column :concerto_configs, :select_values, :string
  end
end
