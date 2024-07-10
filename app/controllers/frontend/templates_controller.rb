# frozen_string_literal: true

module Frontend
  class TemplatesController < ApplicationController
    # GET /frontend/1/template/1
    # Render the template for display on a screen.
    def show
      allow_cors if ConcertoConfig[:public_concerto]

      template = Template.find(params[:id])
      return unless stale?(last_modified: template.last_modified.utc, etag: template, public: true)

      require 'concerto_image_magick'

      if template.media.blank?
        image = ConcertoImageMagick.new_image(1, 1)
        image.format = 'PNG'
      else
        image = ConcertoImageMagick.load_image(template.media.preferred.first.file_contents)
      end

      width = params[:width].to_f
      height = params[:height].to_f
      if (params.key?(:width) && width <= 0) || (params.key?(:height) && height <= 0)
        render status: :bad_request, plain: 'Bad request.'
        return
      end
      unless width <= 0 && height <= 0
        # Resize the image to a height and width if they are both being set.
        image = ConcertoImageMagick.resize(image, width, height)
      end

      if template.media.present?
        case request.format
        when Mime::Type.lookup_by_extension(:jpg)
          image.format = 'JPG'
        when Mime[:png]
          image.format = 'PNG'
        else
          render status: :not_acceptable, text: 'Unacceptable image type.', content_type: Mime[:text] and return
        end
      end

      send_data image.to_blob,
                filename: "#{template.name.underscore}.#{image.format.downcase}",
                type: image.mime_type, disposition: 'inline'
    end
  end
end
