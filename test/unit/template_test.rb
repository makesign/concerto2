require 'test_helper'
include ActionDispatch::TestProcess

class TemplateTest < ActiveSupport::TestCase

  fixtures :all

  # Test the ability to import a simple xml descriptor
  test "importing a simple template" do
    t = Template.new
    file = fixture_file_upload("/files/simple_template.xml", 'text/xml')
    assert t.import_xml(file.read)
    actual = t.positions.first
    assert_small_delta 0.025, actual.left
    assert_small_delta 0.026, actual.top
    assert_small_delta 0.592, actual.right
    assert_small_delta 0.796, actual.bottom
    assert_equal false, t.is_hidden
  end

  test "importing a template with multiple positions" do
    t = Template.new
    file = fixture_file_upload("/files/two_field_template.xml", 'text/xml')
    assert t.import_xml(file.read)
    actual = t.positions
    # first position
    assert_small_delta 0.025, actual.first.left
    assert_small_delta 0.026, actual.first.top
    assert_small_delta 0.592, actual.first.right
    assert_small_delta 0.796, actual.first.bottom
    # second position
    assert_small_delta 0.025, actual.last.left
    assert_small_delta 0.796, actual.last.top
    assert_small_delta 0.592, actual.last.right
    assert_small_delta 1.000, actual.last.bottom

  end

  # Test the ability to import a template without fields
  test "importing an empty template" do
    t = Template.new
    file = fixture_file_upload("/files/no_fields_template.xml", 'text/xml')
    assert t.import_xml(file.read)
  end

  test "calling import_archive with nil or non-zip file" do
    t = Template.new
    assert !t.import_archive(nil)
    file = ActionDispatch::Http::UploadedFile.new({:tempfile => 'bogus', :filename => 'bogus.txt', :head => nil, :type => 'txt'})
    assert !t.import_archive(file)
  end

  test "don't import package missing image" do
    t = Template.new
    file = fixture_file_upload("/files/ArchiveWithoutImage.zip", 'application/zip')
    assert !t.import_archive(file)
    assert t.errors.messages.values.detect { |m| m.join(",").include?('missing a background image') }
  end

  test "don't import package missing xml" do
    t = Template.new
    file = fixture_file_upload("/files/ArchiveWithoutXml.zip", 'application/zip')
    assert !t.import_archive(file)
    assert t.errors.messages.values.detect { |m| m.join(",").include?('missing an xml descriptor') }
  end

  test "package xml missing required values" do
    t = Template.new
    file = fixture_file_upload("/files/ArchiveWithEmptyXml.zip", 'application/zip')
    assert !t.import_archive(file)
    assert t.errors.messages.values.detect { |m| m.join(",").include?('invalid XML') }
  end

  test "package has invalid xml" do
    t = Template.new
    file = fixture_file_upload("/files/ArchiveWithInvalidXml.zip", 'application/zip')
    assert !t.import_archive(file)
    assert t.errors.messages.values.detect { |m| m.join(",").include?('invalid XML') }
  end

  test "template names must be unique" do
    t = templates(:one)
    templ = Template.new({:name => t.name})
    assert_equal t.name, templ.name, "Names are set equal"
    assert !templ.valid?, "Names can't be equal"
    templ.name = "Fooasdasdasda"
    assert templ.valid?, "Unique name is OK"
  end

  test "can't delete template if in use" do
    t = templates(:one)
    assert !t.is_deletable?
  end

  test "get screens that use this template" do
    t = templates(:one)
    t.screen_dependencies.include?(screens(:one))
  end

  test "exporting a simple template produces a valid descriptor" do
    t = Template.new
    file = fixture_file_upload("/files/simple_template.xml", 'text/xml')
    t.import_xml(file.read)

    u = Template.new
    x = t.xml_descriptor
    assert u.import_xml(x)
  end

end
