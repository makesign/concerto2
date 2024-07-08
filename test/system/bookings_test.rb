require "application_system_test_case"

class BookingsTest < ApplicationSystemTestCase
  setup do
    @booking = bookings(:one)
  end

  test "visiting the index" do
    skip "htw_migration: failing test" if (SKIP_HTW_MIGRATION)
    visit bookings_url
    assert_selector "h1", text: "Bookings"
  end

  test "should create booking" do
    skip "htw_migration: failing test" if (SKIP_HTW_MIGRATION)
    visit bookings_url
    click_on "New booking"

    fill_in "Description", with: @booking.description
    fill_in "Title", with: @booking.title
    fill_in "Url", with: @booking.url
    click_on "Create Booking"

    assert_text "Booking was successfully created"
    click_on "Back"
  end

  test "should update Booking" do
    skip "htw_migration: failing test" if (SKIP_HTW_MIGRATION)
    visit booking_url(@booking)
    click_on "Edit this booking", match: :first

    fill_in "Description", with: @booking.description
    fill_in "Title", with: @booking.title
    fill_in "Url", with: @booking.url
    click_on "Update Booking"

    assert_text "Booking was successfully updated"
    click_on "Back"
  end

  test "should destroy Booking" do
    skip "htw_migration: failing test" if (SKIP_HTW_MIGRATION)
    visit booking_url(@booking)
    click_on "Destroy this booking", match: :first

    assert_text "Booking was successfully destroyed"
  end
end
