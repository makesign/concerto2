# frozen_string_literal: true

class Field < ApplicationRecord
  def initialize(*, &)
    Rails.logger.debug '------- field initialize ------'
    super
  end
  include ActiveModel::ForbiddenAttributesProtection

  belongs_to :kind

  has_many :subscriptions, dependent: :destroy
  has_many :positions, dependent: :destroy
  has_many :field_configs, dependent: :destroy
  # has_many :screens, through: :field_configs   # valid, but not used yet

  attr_accessor :config # for setup.json formatting

  # Validations
  validates :name, presence: true
end
