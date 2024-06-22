class CreateBookings < ActiveRecord::Migration[7.1]
  def change
    create_table :bookings do |t|
      t.string :title
      t.string :url
      t.string :description

      t.timestamps
    end
  end
end
