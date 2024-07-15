# frozen_string_literal: true

class ApplicationRecord < ActiveRecord::Base
  primary_abstract_class

  def to_s
    self.inspect
  end
  # concerto-original: self.abstract_class = true
end
