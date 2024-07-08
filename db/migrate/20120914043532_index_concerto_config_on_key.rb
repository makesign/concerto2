# frozen_string_literal: true

class IndexConcertoConfigOnKey < ActiveRecord::Migration[7.1]
  def up
    add_index :concerto_configs, :key, unique: true
  end

  def down
    remove_index :concerto_configs, :key
  end
end
