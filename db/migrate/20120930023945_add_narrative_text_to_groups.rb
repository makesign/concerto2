class AddNarrativeTextToGroups < ActiveRecord::Migration[7.1]
  def change
    add_column :groups, :narrative, :text
  end
end
