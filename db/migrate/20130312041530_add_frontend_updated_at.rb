class AddFrontendUpdatedAt < ActiveRecord::Migration[7.1]
  def change
    add_column :screens, :frontend_updated_at, :datetime
  end
end
