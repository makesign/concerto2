# frozen_string_literal: true

class Field < ActiveRecord::Base
  def initialize(*args, &block)
    puts '------- field initialize ------'
    super(*args, &block)
  end
  include ActiveModel::ForbiddenAttributesProtection

  belongs_to :kind
  validates :kind_id, presence: true

  has_many :subscriptions, dependent: :destroy
  has_many :positions, dependent: :destroy
  has_many :field_configs, dependent: :destroy
  # has_many :screens, through: :field_configs   # valid, but not used yet

  attr_accessor :config # for setup.json formatting

  # Validations
  validates :name, presence: true
end
