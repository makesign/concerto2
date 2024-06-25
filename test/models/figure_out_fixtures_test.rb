
require "test_helper"

class FigureOutFixturesTest < ActiveSupport::TestCase
  test "one" do
    fc = field_configs(:one)
    assert_equal "", fc.screen
  end

  test "field->kind" do
    field = fields(:one)
    assert_equal "", field.kind
  end
end

# s = Screen.build(name: "my screen", owner: User.first, template: Template.first, is_public: true)