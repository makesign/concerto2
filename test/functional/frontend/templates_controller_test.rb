# frozen_string_literal: true

require 'test_helper'

# TODO: Media class has no method file_contents (all three tests fail because of that)
module Frontend
  class TemplatesControllerTest < ActionDispatch::IntegrationTest
    include Devise::Test::ControllerHelpers
    # fixtures :screens
    # fixtures :templates

    test '0x0 template fails gracefully' do
      skip 'htw_migration: failing test' if SKIP_HTW_MIGRATION
      get(:show,
          params: { id: templates(:one).id, screen_id: screens(:one).id, width: 0, height: 0, format: :png })
      assert_response :bad_request
    end

    test 'no size templates are ok' do
      skip 'htw_migration: failing test' if SKIP_HTW_MIGRATION
      get(:show, params: { id: templates(:one).id, screen_id: screens(:one).id, format: :png })
      assert_response :ok
    end
  end
end
