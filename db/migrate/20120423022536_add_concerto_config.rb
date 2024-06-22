class AddConcertoConfig < ActiveRecord::Migration[7.1]
  def change
    create_table :concerto_configs do |t|
      t.string :key
      t.string :value
      t.string :value_type
      t.string :value_default
    end
  end
end
