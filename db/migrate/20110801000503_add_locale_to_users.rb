# frozen_string_literal: true

class AddLocaleToUsers < ActiveRecord::Migration[7.1]
  def change
    add_column :users, :locale, :string
  end
end
