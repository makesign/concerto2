# frozen_string_literal: true

class RenameMediasToMedia < ActiveRecord::Migration[7.1]
  def self.up
    rename_table :medias, :media
  end

  def self.down
    rename_table :media, :medias
  end
end
