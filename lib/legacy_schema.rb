# frozen_string_literal: true

class V1User < ApplicationRecord
  self.table_name = 'user'
  establish_connection :legacy
end

class V1Group < ApplicationRecord
  self.table_name = 'group'
  has_and_belongs_to_many :users, class_name: 'V1User', join_table: 'user_group',
                                  foreign_key: 'group_id', association_foreign_key: 'user_id'
  establish_connection :legacy
end

class V1Feed < ApplicationRecord
  self.table_name = 'feed'
  self.inheritance_column = ''
  belongs_to :group, class_name: 'V1Group'
  establish_connection :legacy
end

class V1Type < ApplicationRecord
  self.table_name = 'type'
  establish_connection :legacy
end

class V1Content < ApplicationRecord
  self.table_name = 'content'
  self.inheritance_column = ''
  belongs_to :user, class_name: 'V1User'
  belongs_to :type, class_name: 'V1Type'
  establish_connection :legacy
end

class V1Submission < ApplicationRecord
  self.table_name = 'feed_content'
  establish_connection :legacy
end

class V1Template < ApplicationRecord
  self.table_name = 'template'
  establish_connection :legacy
  has_many :fields, class_name: 'V1Field', foreign_key: 'template_id'
end

class V1Field < ApplicationRecord
  self.table_name = 'field'
  belongs_to :template, class_name: 'V1Template'
  belongs_to :type, class_name: 'V1Type'
  establish_connection :legacy
end

class V1Screen < ApplicationRecord
  self.table_name = 'screen'
  self.inheritance_column = ''
  establish_connection :legacy
  belongs_to :template, class_name: 'V1Template'
  has_many :subscriptions, class_name: 'V1Subscription', foreign_key: 'screen_id'
end

class V1Subscription < ApplicationRecord
  self.table_name = 'position'
  belongs_to :field, class_name: 'V1Field'
  belongs_to :screen, class_name: 'V1Screen'
  belongs_to :feed, class_name: 'V1Feed'
  establish_connection :legacy
end
