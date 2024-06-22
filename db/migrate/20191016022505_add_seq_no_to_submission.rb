class AddSeqNoToSubmission < ActiveRecord::Migration[7.1]
  def change
    add_column :submissions, :seq_no, :integer
    add_index :submissions, [:feed_id, :seq_no]
  end
end
