class ApplicationRecord < ActiveRecord::Base
  primary_abstract_class
  # concerto-original: self.abstract_class = true
end