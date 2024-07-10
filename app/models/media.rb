# frozen_string_literal: true

class Media < ApplicationRecord
  include ActiveModel::ForbiddenAttributesProtection

  # templates and content
  belongs_to :attachable, polymorphic: true, optional: true

  # switch to active_storage
  has_one_attached :attached_file
  # attachable
  #  has_one_attached :image do |attachable|
  #     attachable.variant( :thumb , resize_to_limit: [80, 80])
  #   end
  # <%= image_tag @picture.image.variant(:thumb) %>

  PREVIEW_MEDIA_VALID_MINS = 3
  PREVIEW_MEDIA_PURGE_MINS = 15

  # Validations
  validates :file_type, presence: true
  validates :file_size, numericality: { greater_than_or_equal_to: 0 }

  scope :original, -> { where key: 'original' }
  scope :processed, -> { where key: 'processed' }
  scope :preview, -> { where key: 'preview' }
  scope :preferred, -> { where(key: %w[original processed]).order('media.key desc') } # processed before original

  # remove preview records that have been abandoned
  def self.cleanup_previews
    Media.where("media.key = 'preview' and created_at < ?", PREVIEW_MEDIA_PURGE_MINS.minutes.ago).find_each(&:destroy)
  end

  # Find a valid preview, if one exists, for a media id.
  # Here we enforce that the media is actually a preview and has been recently uploaded.
  def self.valid_preview(id)
    Media.where(key: 'preview', id:, attachable_id: 0).where('created_at > ?',
                                                             PREVIEW_MEDIA_VALID_MINS.minutes.ago).first
  end
end
