# frozen_string_literal: true

class FixConcertoConfigGroup < ActiveRecord::Migration[7.1]
  def change
    rename_column :concerto_configs, :group, :category
  end
end
