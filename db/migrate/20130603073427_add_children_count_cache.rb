class AddChildrenCountCache < ActiveRecord::Migration[7.1]
  def change
    add_column :contents, :children_count, :integer, :default => 0
  end
end
