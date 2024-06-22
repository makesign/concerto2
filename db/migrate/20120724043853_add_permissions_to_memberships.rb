class AddPermissionsToMemberships < ActiveRecord::Migration[7.1]
  def change
    add_column :memberships, :permissions, :integer
  end
end
