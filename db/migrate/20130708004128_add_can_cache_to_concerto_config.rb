# frozen_string_literal: true

class AddCanCacheToConcertoConfig < ActiveRecord::Migration[7.1]
  def change
    add_column :concerto_configs, :can_cache, :boolean, default: true
  end
end
