class AddPathToTemplates < ActiveRecord::Migration[7.1]
  def change
    add_column :templates, :path, :string
  end
end
