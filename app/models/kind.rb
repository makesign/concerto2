# frozen_string_literal: true

class Kind < ApplicationRecord
  include ActiveModel::ForbiddenAttributesProtection

  has_many :contents
  has_many :fields

  # Validations
  validates :name, presence: true, uniqueness: true
end
