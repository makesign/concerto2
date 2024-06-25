#Key-value store for field-specific configurations
class FieldConfig < ActiveRecord::Base
  include ActiveModel::ForbiddenAttributesProtection
  include PublicActivity::Common if defined? PublicActivity::Common

  belongs_to :field
  validates_presence_of :field_id
  belongs_to :screen, optional: true

  validates_presence_of :key
  # each combination of screen & field can only have one fieldconfig
  validates_uniqueness_of :key, scope: [:screen_id, :field_id]
  validates :value, numericality: { only_integer: true }, if: proc { |r| r.key_type == :integer }

  #
  scope :default, -> { where(screen_id: nil) }

  def self.get(screen, field, key)
    field_config = FieldConfig.where(screen_id: screen.id, field_id: field.id, key: key).first
    if !field_config.nil?
      return field_config.value
    else
      return nil
    end
  end

  # Identify the type of key, if it is being used from the global
  # field_config application config hash.
  #
  # @return [Symbol, nil] The type of key or nil if not found.
  def key_type
    return nil if key.nil?
    sym_key = key.to_sym
    if Rails.application.config.respond_to?(:field_configs) and Rails.application.config.field_configs.include?(sym_key)
      return Rails.application.config.field_configs[sym_key][:type]
    end
    return nil
  end

  # Grab any options that they key has from the global field_config hash.
  #
  # @return [Array, nil] Returns the options or nil if there are none.
  #   For :select keys, this will return an array of the possible values.
  def key_options
    case key_type
      when :select
        return Rails.application.config.field_configs[key.to_sym][:values]
      else
        return nil
    end
  end
end
