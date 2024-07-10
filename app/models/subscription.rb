# frozen_string_literal: true

class Subscription < ApplicationRecord
  include ActiveModel::ForbiddenAttributesProtection

  define_model_callbacks :filter_contents
  ConcertoPlugin.install_callbacks(self)

  # Weight Levels
  WEIGHTS = {
    # A very frequent chance of content showing up.
    'very frequently': 5,
    # A frequent chance of content showing up.
    frequently: 4,
    # Neither a frequent, nor an infrequent chance of
    # content showing up.
    'no preference': 3,
    # An infrequent chance of content showing up.
    rarely: 2,
    # A very infrequent chance of content showing up.
    'very rarely': 1
  }.freeze

  # Associations
  belongs_to :feed
  belongs_to :field
  belongs_to :screen

  # Validations
  validates :feed, associated: true
  validates :screen, associated: true
  validates :field, associated: true
  validates :feed_id, uniqueness: { scope: %i[screen_id field_id] }

  # Get weight name of a subscription
  def weight_name
    (Subscription::WEIGHTS.respond_to?(:key) ? Subscription::WEIGHTS.key(weight) : Subscription::WEIGHTS.index(weight)).to_s
  end

  # Get an array of all the approved active content to be shown in a screen's field.
  def contents
    @contents = feed.approved_contents.active.reorder('submissions.seq_no, contents.start_time').to_a
    run_callbacks :filter_contents do
      @contents.select! { |c| c.can_display_in?(screen, field) }
    end

    @contents
  end
end
