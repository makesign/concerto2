class AddPendingNotificationSentToSubmission < ActiveRecord::Migration[7.1]
  def change
    add_column :submissions, :pending_notification_sent, :datetime
  end
end
