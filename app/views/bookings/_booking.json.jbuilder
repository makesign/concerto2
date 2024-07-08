# frozen_string_literal: true

json.extract! booking, :id, :title, :url, :description, :created_at, :updated_at
json.url booking_url(booking, format: :json)
