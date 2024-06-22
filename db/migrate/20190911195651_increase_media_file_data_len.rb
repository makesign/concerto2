class IncreaseMediaFileDataLen < ActiveRecord::Migration[7.1]
  def change
    change_column :media, :file_data, :binary, limit: 16.megabytes
  end
end
