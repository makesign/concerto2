# frozen_string_literal: true

class Template < ApplicationRecord
  require 'mime/types'

  include ActiveModel::ForbiddenAttributesProtection
  include PublicActivity::Common if defined? PublicActivity::Common

  # Define integration hooks for Concerto Plugins
  define_callbacks :is_deletable
  define_callbacks :screen_dependencies
  ConcertoPlugin.install_callbacks(self) # Get the callbacks from plugins

  has_many :screens, dependent: :restrict_with_exception
  has_many :positions, -> { order(:id) }, dependent: :destroy
  has_many_attached :media

  accepts_nested_attributes_for :positions, allow_destroy: true

  belongs_to :owner, polymorphic: true, optional: true

  # Validations
  validates :name, presence: true, uniqueness: true

  default_scope { order('templates.name asc') }

  # Placeholder attributes
  attr_accessor :path, :css_path

  def is_deletable?
    # allow the template to see if any plugins have dependencies on it
    run_callbacks :is_deletable do
      @deletable = screens.empty?
    end
    @deletable
  end

  # returns the screens that have dependencies on this template
  def screen_dependencies
    run_callbacks :screen_dependencies do
      @dependencies = screens
    end
    @dependencies&.uniq
  end

  # Given a string from an XML descriptor, build the template
  # to try and match the description.  Each position will be
  # constructed from the descriptor.  If a position can't be
  # validated, usually because there was no matching field,
  # that position will be rejected but the other sucessful
  # positions will be saved.
  #
  # This means that many templates may only import a few of
  # their fields(v1 term) / positions(v2 term).  We'll either
  # need to strengthn up the matching approach or clean the
  # templates we make publicly available.
  def import_xml(xml)
    data = Hash.from_xml(xml)

    self.name = data['template']['name']
    self.author = data['template']['author']
    self.is_hidden = data['template']['hidden'] || false

    if data['template'].key?('field')
      data['template']['field'] = [data['template']['field']] unless data['template']['field'].is_a?(Array)
      data['template']['field'].each do |field|
        position = positions.build
        position.import_hash(field)
        next if position.valid?

        # This position might not actually be deleted,
        # instead it will be marked for deletion (aka not creating it)
        position.destroy
      end
    end
    valid?
  end

  # Find the last time this template was modified by looking at the
  # template, fields, and original media.  Return the largest update_at value.
  def last_modified
    timestamps = [updated_at]
    latest_position = positions.reorder('updated_at DESC').first
    timestamps.append(latest_position.updated_at) unless latest_position.nil?
    latest_media = media.original.order('updated_at DESC').first
    timestamps.append(latest_media.updated_at) unless latest_media.nil?
    timestamps.max
  end

  # for cachebusting
  def last_modified_md5
    require 'digest/md5'
    Digest::MD5.hexdigest(last_modified.to_s)
  end

  # Generate a preview image of a template.
  # Hide the fields all together, or just hide the field text.
  # Or just show certain fields
  def preview_image(hide_fields = false, hide_text = false, only_fields = [])
    require 'concerto_image_magick'

    image = if media.blank?
              ConcertoImageMagick.new_image(1024, 768)
            else
              # active_storage
              # image = ConcertoImageMagick.load_image(self.media.preferred.first.attached_file)
              media.preferred.first.attached_file
            end

    height = image.rows
    width = image.columns

    if !hide_fields && !positions.empty?
      dw = ConcertoImageMagick.new_drawing_object

      positions.each do |position|
        next if !only_fields.empty? && only_fields.exclude?(position.field_id)

        dw = ConcertoImageMagick.draw_block(dw, fill_color: 'black', stroke_opacity: 0, fill_opacity: 0.6,
                                                width:, height:, left: position.left, right: position.right, top: position.top, bottom: position.bottom)

        unless hide_text
          dw = ConcertoImageMagick.draw_text(dw, stroke_color: 'white', fill_color: 'white', opacity: 1, width:,
                                                 height:, left: position.left, right: position.right, top: position.top, bottom: position.bottom, field_name: position.field.name)
        end
      end
      ConcertoImageMagick.draw_image(dw, image)
    end
    image
  end

  def export_archive
    require 'zip'
    require 'zip/filesystem'

    name = SecureRandom.uuid
    img = media.find_by(key: 'original')
    css = media.find_by(key: 'css')
    xml = xml_descriptor

    # get a temp zip file name
    zipfile = Tempfile.new([name, '.zip'])
    zipfile_path = zipfile.path
    zipfile.unlink

    Zip::File.open(zipfile_path, Zip::File::CREATE) do |zipfile|
      zipfile.file.open("#{name}.xml", 'w') { |f| f.print xml }
      zipfile.file.open(img.file_name, 'w') { |f| f.write img.file_contents } if img.present?
      zipfile.file.open(css.file_name, 'w') { |f| f.print css.file_contents } if css.present?
    end

    zipfile_path
  end

  def xml_descriptor(options = {})
    require 'builder'
    options[:indent] ||= 2
    options[:skip_instruct] ||= true
    xml = options[:builder] ||= ::Builder::XmlMarkup.new(indent: options[:indent])
    xml.instruct! unless options[:skip_instruct]
    xml.template do
      xml.tag!(:name, name)
      xml.tag!(:author, author)
      xml.tag!(:hidden, is_hidden)

      positions.each do |p|
        xml.field do
          xml.tag! :name, p.field.name
          xml.tag! :type, p.field.kind.name
          xml.tag! :style, p.style
          xml.tag! :top, p.top
          xml.tag! :left, p.left
          xml.tag! :bottom, p.bottom
          xml.tag! :right, p.right
        end
      end
    end
  end

  def import_archive(archive)
    if archive.blank?
      errors.add(:base, I18n.t('templates.new.template_import_requires_archive'))
      return false
    end

    unless archive.content_type.include? 'zip'
      errors.add(:base, I18n.t('templates.new.template_import_requires_zip'))
      return false
    end

    file = archive.path

    require 'zip'
    zip_file = Zip::File.open(file)
    xml_data = image_file = css_file = nil
    zip_file.each do |entry|
      # Skip anything in the hidden __macosx directory.
      next if entry.name.downcase.include?('__macosx/')

      extension = entry.name.split('.')[-1].downcase
      if extension == 'xml'
        xml_data = entry.get_input_stream.read
      elsif extension == 'css'
        css_file = entry
      elsif %w[jpg png].include?(extension) && entry.name.exclude?('preview')
        image_file = entry
      end
    end

    if xml_data.blank?
      errors.add(:base, I18n.t('templates.new.template_import_requires_xml'))
      return false
    end

    if image_file.blank?
      errors.add(:base, I18n.t('templates.new.template_import_requires_image'))
      return false
    end

    begin
      if import_xml(xml_data)
        media.build({ key: 'original', file_name: image_file.name,
                      file_type: MIME::Types.type_for(image_file.name).first.content_type })
        media.first.file_size = image_file.size
        media.first.file_data = image_file.get_input_stream.read

        unless css_file.nil?
          m = media.build({ key: 'css', file_name: css_file.name,
                            file_type: MIME::Types.type_for(css_file.name).first.content_type })
          m.file_size = css_file.size
          m.file_data = css_file.get_input_stream.read
        end
        true
      else
        errors.add(:base, I18n.t('templates.new.invalid_xml'))
        false
      end
    rescue REXML::ParseException => e
      Rails.logger.error("invalid xml when importing template package - #{e.message}")
      errors.add(:base, I18n.t('templates.new.invalid_xml'))
      false
    end
  end
end
