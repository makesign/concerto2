# frozen_string_literal: true

class MakeContentDataLarger < ActiveRecord::Migration[7.1]
  def change
    change_column :contents, :data, :text, limit: 16_777_215
  end
end
