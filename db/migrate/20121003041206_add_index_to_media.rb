class AddIndexToMedia < ActiveRecord::Migration[7.1]
  def change
    add_index :media, [:attachable_id, :attachable_type]
  end
end
