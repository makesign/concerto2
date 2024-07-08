# frozen_string_literal: true

class Subscription < ActiveRecord::Base
  include ActiveModel::ForbiddenAttributesProtection

  define_model_callbacks :filter_contents
  ConcertoPlugin.install_callbacks(self)

  # Weight Levels
  WEIGHTS = {
    # A very frequent chance of content showing up.
    "very frequently": 5,
    # A frequent chance of content showing up.
    frequently: 4,
    # Neither a frequent, nor an infrequent chance of
    # content showing up.
    "no preference": 3,
    # An infrequent chance of content showing up.
    rarely: 2,
    # A very infrequent chance of content showing up.
    "very rarely": 1
  }.freeze

  # Associations
  belongs_to :feed
  belongs_to :field
  belongs_to :screen

  # Validations
  validates :feed, presence: true, associated: true
  validates :screen, presence: true, associated: true
  validates :field, presence: true, associated: true
  validates_uniqueness_of :feed_id, scope: %i[screen_id field_id]

  # Get weight name of a subscription
  def weight_name
    (Subscription::WEIGHTS.respond_to?(:key) ? Subscription::WEIGHTS.key(weight) : Subscription::WEIGHTS.index(weight)).to_s
  end

  # Get an array of all the approved active content to be shown in a screen's field.
  def contents
    @contents = feed.approved_contents.active.all.reorder('submissions.seq_no, contents.start_time').to_a
    run_callbacks :filter_contents do
      @contents.select! { |c| c.can_display_in?(screen, field) }
    end

    @contents
  end
end
