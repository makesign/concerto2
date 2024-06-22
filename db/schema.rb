# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2024_06_22_122959) do
  create_table "action_mailbox_inbound_emails", force: :cascade do |t|
    t.integer "status", default: 0, null: false
    t.string "message_id", null: false
    t.string "message_checksum", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["message_id", "message_checksum"], name: "index_action_mailbox_inbound_emails_uniqueness", unique: true
  end

  create_table "action_text_rich_texts", force: :cascade do |t|
    t.string "name", null: false
    t.text "body"
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["record_type", "record_id", "name"], name: "index_action_text_rich_texts_uniqueness", unique: true
  end

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.string "service_name", null: false
    t.bigint "byte_size", null: false
    t.string "checksum"
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "active_storage_variant_records", force: :cascade do |t|
    t.bigint "blob_id", null: false
    t.string "variation_digest", null: false
    t.index ["blob_id", "variation_digest"], name: "index_active_storage_variant_records_uniqueness", unique: true
  end

  create_table "activities", force: :cascade do |t|
    t.string "trackable_type"
    t.integer "trackable_id"
    t.string "owner_type"
    t.integer "owner_id"
    t.string "key"
    t.text "parameters"
    t.string "recipient_type"
    t.integer "recipient_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["owner_id", "owner_type"], name: "index_activities_on_owner_id_and_owner_type"
    t.index ["owner_type", "owner_id"], name: "index_activities_on_owner"
    t.index ["recipient_id", "recipient_type"], name: "index_activities_on_recipient_id_and_recipient_type"
    t.index ["recipient_type", "recipient_id"], name: "index_activities_on_recipient"
    t.index ["trackable_id", "trackable_type"], name: "index_activities_on_trackable_id_and_trackable_type"
    t.index ["trackable_type", "trackable_id"], name: "index_activities_on_trackable"
  end

  create_table "bookings", force: :cascade do |t|
    t.string "title"
    t.string "url"
    t.string "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "concerto_configs", force: :cascade do |t|
    t.string "key"
    t.string "value"
    t.string "value_type"
    t.string "value_default"
    t.string "name"
    t.string "category"
    t.text "description"
    t.boolean "plugin_config"
    t.integer "plugin_id"
    t.boolean "hidden", default: false
    t.boolean "can_cache", default: true
    t.integer "seq_no"
    t.string "select_values"
    t.index ["key"], name: "index_concerto_configs_on_key", unique: true
  end

  create_table "concerto_hardware_players", force: :cascade do |t|
    t.string "ip_address"
    t.integer "screen_id"
    t.boolean "activated"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "screen_on_off"
  end

  create_table "concerto_plugins", force: :cascade do |t|
    t.boolean "enabled"
    t.string "gem_name"
    t.string "gem_version"
    t.string "source"
    t.string "source_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "contents", force: :cascade do |t|
    t.string "name"
    t.integer "duration"
    t.datetime "start_time"
    t.datetime "end_time"
    t.text "data", limit: 16777215
    t.integer "user_id"
    t.integer "kind_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "type"
    t.integer "parent_id"
    t.integer "children_count", default: 0
    t.index ["kind_id"], name: "index_contents_on_kind_id"
    t.index ["user_id"], name: "index_contents_on_user_id"
  end

  create_table "delayed_jobs", force: :cascade do |t|
    t.integer "priority", default: 0
    t.integer "attempts", default: 0
    t.text "handler"
    t.text "last_error"
    t.datetime "run_at"
    t.datetime "locked_at"
    t.datetime "failed_at"
    t.string "locked_by"
    t.string "queue"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["priority", "run_at"], name: "delayed_jobs_priority"
  end

  create_table "feeds", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.integer "parent_id"
    t.integer "group_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "is_viewable", default: true
    t.boolean "is_submittable", default: true
    t.text "content_types"
    t.index ["group_id"], name: "index_feeds_on_group_id"
    t.index ["parent_id"], name: "index_feeds_on_parent_id"
  end

  create_table "field_configs", force: :cascade do |t|
    t.integer "field_id"
    t.string "key"
    t.string "value"
    t.integer "screen_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["field_id"], name: "index_field_configs_on_field_id"
  end

  create_table "fields", force: :cascade do |t|
    t.string "name"
    t.integer "kind_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["kind_id"], name: "index_fields_on_kind_id"
  end

  create_table "groups", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "narrative"
  end

  create_table "kinds", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "media", force: :cascade do |t|
    t.string "attachable_type"
    t.integer "attachable_id"
    t.string "key"
    t.string "file_name"
    t.string "file_type"
    t.integer "file_size"
    t.binary "file_data", limit: 16777216
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["attachable_id", "attachable_type"], name: "index_media_on_attachable_id_and_attachable_type"
    t.index ["attachable_type", "attachable_id"], name: "index_medias_on_attachable"
  end

  create_table "memberships", force: :cascade do |t|
    t.integer "user_id"
    t.integer "group_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "level", default: 1
    t.integer "permissions"
    t.boolean "receive_emails"
    t.index ["group_id"], name: "index_memberships_on_group_id"
    t.index ["receive_emails"], name: "index_memberships_on_receive_emails"
    t.index ["user_id"], name: "index_memberships_on_user_id"
  end

  create_table "pages", force: :cascade do |t|
    t.string "category"
    t.string "title"
    t.string "language"
    t.text "body"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "slug"
  end

  create_table "positions", force: :cascade do |t|
    t.text "style"
    t.decimal "top", precision: 6, scale: 5, default: "0.0"
    t.decimal "left", precision: 6, scale: 5, default: "0.0"
    t.decimal "bottom", precision: 6, scale: 5, default: "0.0"
    t.decimal "right", precision: 6, scale: 5, default: "0.0"
    t.integer "field_id"
    t.integer "template_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["field_id"], name: "index_positions_on_field_id"
    t.index ["template_id"], name: "index_positions_on_template_id"
  end

  create_table "screens", force: :cascade do |t|
    t.string "name"
    t.string "location"
    t.boolean "is_public"
    t.string "owner_type"
    t.integer "owner_id"
    t.integer "template_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "width"
    t.integer "height"
    t.datetime "frontend_updated_at"
    t.string "authentication_token"
    t.string "time_zone"
    t.string "locale"
    t.index ["owner_type", "owner_id"], name: "index_screens_on_owner"
    t.index ["template_id"], name: "index_screens_on_template_id"
  end

  create_table "submissions", force: :cascade do |t|
    t.integer "content_id"
    t.integer "feed_id"
    t.boolean "moderation_flag"
    t.integer "moderator_id"
    t.integer "duration"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "moderation_reason"
    t.datetime "pending_notification_sent"
    t.integer "seq_no"
    t.index ["content_id"], name: "index_submissions_on_content_id"
    t.index ["feed_id", "seq_no"], name: "index_submissions_on_feed_id_and_seq_no"
    t.index ["feed_id"], name: "index_submissions_on_feed_id"
    t.index ["moderator_id"], name: "index_submissions_on_moderator_id"
  end

  create_table "subscriptions", force: :cascade do |t|
    t.integer "feed_id"
    t.integer "field_id"
    t.integer "screen_id"
    t.integer "weight"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["feed_id"], name: "index_subscriptions_on_feed_id"
    t.index ["field_id"], name: "index_subscriptions_on_field_id"
    t.index ["screen_id"], name: "index_subscriptions_on_screen_id"
  end

  create_table "templates", force: :cascade do |t|
    t.string "name"
    t.string "author"
    t.boolean "is_hidden", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "original_width"
    t.integer "original_height"
    t.integer "owner_id"
    t.string "owner_type"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "first_name"
    t.string "last_name"
    t.string "locale"
    t.boolean "is_admin", default: false
    t.boolean "receive_moderation_notifications"
    t.string "time_zone"
    t.string "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string "unconfirmed_email"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "active_storage_variant_records", "active_storage_blobs", column: "blob_id"
end
