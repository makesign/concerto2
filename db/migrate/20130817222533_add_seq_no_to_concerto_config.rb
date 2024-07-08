# frozen_string_literal: true

class AddSeqNoToConcertoConfig < ActiveRecord::Migration[7.1]
  def change
    add_column :concerto_configs, :seq_no, :integer
  end
end
