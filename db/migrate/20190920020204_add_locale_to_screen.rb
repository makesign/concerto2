class AddLocaleToScreen < ActiveRecord::Migration[7.1]
  def change
    add_column :screens, :locale, :string
  end
end
