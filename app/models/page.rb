# frozen_string_literal: true

class Page < ApplicationRecord
  before_create :add_slug
  before_update :add_slug
  validates :title, uniqueness: true

  def add_slug
    self.slug = title.parameterize
  end

  def to_param
    slug
  end
end
