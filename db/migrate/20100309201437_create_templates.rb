class CreateTemplates < ActiveRecord::Migration[7.1]
  def self.up
    create_table :templates do |t|
      t.string :name
      t.string :author
      t.boolean :is_hidden

      t.timestamps
    end
  end

  def self.down
    drop_table :templates
  end
end
