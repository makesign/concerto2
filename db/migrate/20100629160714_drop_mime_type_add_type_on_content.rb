class DropMimeTypeAddTypeOnContent < ActiveRecord::Migration[7.1]
  def self.up
    remove_column :contents, :mime_type
    add_column :contents, :type, :string
  end

  def self.down
    add_column :contents, :mime_type, :string
    remove_column :contents, :type
  end
end
