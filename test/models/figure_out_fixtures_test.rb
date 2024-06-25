
require "test_helper"

class FigureOutFixturesTest < ActiveSupport::TestCase
  test "counts" do
    assert_equal 1, Kind.count
  end
  test "one" do
    skip
    fc = field_configs(:one)
    assert_equal "", fc.screen
  end



  test "kind.name" do
    kind = kinds(:fof_kind)
    assert_equal "FigureOutFixtures_Kind", kind.name
    assert_equal [], kind.errors.full_messages
  end

  test "field->kind" do
    field = fields(:fof_field)

    field.valid?
    assert_equal [], field.errors.full_messages
    assert_not_nil field.kind_id
    kind_id = field.kind_id
    kind_found = Kind.find(kind_id)
    kind = kinds(:fof_kind)
    fields = kind.fields
    assert_not_nil kind_found
    assert_not_nil field.kind
    assert_equal "", field.kind.name
  end

end

# s = Screen.build(name: "my screen", owner: User.first, template: Template.first, is_public: true)