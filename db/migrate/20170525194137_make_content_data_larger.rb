class MakeContentDataLarger < ActiveRecord::Migration[7.1]
  def change
    change_column :contents, :data, :text, limit: 16777215
  end
end
