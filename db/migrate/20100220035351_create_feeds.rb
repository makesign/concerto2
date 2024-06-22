class CreateFeeds < ActiveRecord::Migration[7.1]
  def self.up
    create_table :feeds do |t|
      t.string :name
      t.text :description
      t.integer :parent_id
      t.references :group

      t.timestamps
    end
  end

  def self.down
    drop_table :feeds
  end
end
