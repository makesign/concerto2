# frozen_string_literal: true

class RemovePluginName < ActiveRecord::Migration[7.1]
  def change
    remove_column :concerto_plugins, :name
  end
end
