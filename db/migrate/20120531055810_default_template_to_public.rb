# frozen_string_literal: true

class DefaultTemplateToPublic < ActiveRecord::Migration[7.1]
  def up
    change_column_default :templates, :is_hidden, false
  end

  def down
    change_column_default :templates, :is_hidden, nil
  end
end
