# frozen_string_literal: true

class Page < ActiveRecord::Base
  before_create :add_slug
  before_update :add_slug
  validates_uniqueness_of :title

  def add_slug
    self.slug = title.parameterize
  end

  def to_param
    slug
  end
end
