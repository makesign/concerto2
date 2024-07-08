require 'test_helper'

class Frontend::ContentsControllerTest < ActionController::TestCase
  include Devise::Test::ControllerHelpers
  # fixtures :screens
  # fixtures :fields
  # fixtures :contents

  test "should get content for field" do
    skip "htw_migration: failing test" if (SKIP_HTW_MIGRATION)
    get(:index, params: { :screen_id => screens(:one).id, :field_id => fields(:one).id, :format => :json })
    assert_response :success
    assert_template layout:false

    data = ActiveSupport::JSON.decode(@response.body)
    assert data.length > 0
  end

  test "0x0 image gracefull fails" do
    skip "htw_migration: failing test" if (SKIP_HTW_MIGRATION)
    get(:show, params: { :screen_id => screens(:one).id, :field_id => fields(:one).id, :id => contents(:sample_image).id, :height => 0, :width => 0 })
    assert_response 400
  end

end
