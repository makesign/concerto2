# frozen_string_literal: true

class AddAuthenticationTokenToScreens < ActiveRecord::Migration[7.1]
  def change
    add_column :screens, :authentication_token, :string
  end
end
