# frozen_string_literal: true

class Position < ApplicationRecord
  include ActiveModel::ForbiddenAttributesProtection

  belongs_to :field
  validates :field, associated: true

  belongs_to :template, optional: true

  before_save :clean_styles

  # Validations

  validates :right, numericality: { greater_than_or_equal_to: -1, less_than_or_equal_to: 1 }
  validates :left, numericality: { greater_than_or_equal_to: -1, less_than_or_equal_to: 1 }
  validates :top, numericality: { greater_than_or_equal_to: -1, less_than_or_equal_to: 1 }
  validates :bottom, numericality: { greater_than_or_equal_to: -1, less_than_or_equal_to: 1 }

  attr_accessor :field_contents_path

  # Compute the width of the position block.
  # A Concerto-1 style attribute, figuring out
  # the total width of the element.
  def width
    right - left
  end

  # Enable the width to be set of a position.
  # The right is adjusted relative to the left.
  # A Concerto-1 style accessor, mainly used
  # for importing templates.
  def width=(size)
    self.right = left + size.to_f
  end

  # Enabling the height to be set for a position.
  # The bottom is adjusted relative to the top.
  # A Concerto-1 style accessor, mainly used
  # for importing templates.
  def height=(size)
    self.bottom = top + size.to_f
  end

  # Compute the height of the position block.
  # Another Concerto-1 style attribute, figuring out
  # the total height of the element.
  def height
    bottom - top
  end

  # Given a hash of position data, potentially from a
  # Concerto 1 template descriptor, build this position
  # to have the correct attributes.
  def import_hash(data)
    return false if data.blank?

    # If these keys exist, we need to process them first.
    # This prevents race conditions where calling width before
    # left will set the wrong right.
    priority_keys = %w[top left bottom right]
    priority_keys.each do |key|
      if data.key?(key)
        send(:"#{key}=", data[key].to_f)
        data.delete(key)
      end
    end
    # The name of a position shold be used to try and
    # identify the field.  This is for backwards compatability
    # purposes with v1 descriptors.
    if data.key?('name')
      self.field = Field.where(name: data['name']).first
      data.delete('name')
    end
    # Handle everything else...
    data.each_pair do |key, value|
      send(:"#{key}=", value) if respond_to?(:"#{key}=")
    end
  end

  # Remove any traces of important! from the styles. It breaks the frontend.
  def clean_styles
    style&.gsub!('!important', '')
  end
end
