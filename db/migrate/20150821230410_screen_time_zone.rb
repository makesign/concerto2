# frozen_string_literal: true

class ScreenTimeZone < ActiveRecord::Migration[7.1]
  def change
    rename_column :screens, :locale, :time_zone
  end
end
