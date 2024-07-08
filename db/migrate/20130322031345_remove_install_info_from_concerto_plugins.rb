# frozen_string_literal: true

class RemoveInstallInfoFromConcertoPlugins < ActiveRecord::Migration[7.1]
  def up
    remove_column :concerto_plugins, :installed
    remove_column :concerto_plugins, :module_name
  end

  def down
    add_column :concerto_plugins, :module_name, :string
    add_column :concerto_plugins, :installed, :boolean
  end
end
