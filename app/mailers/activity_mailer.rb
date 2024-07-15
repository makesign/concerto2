# frozen_string_literal: true

class ActivityMailer < ApplicationMailer
  def submission_update(activity)
    @activity = activity
    return unless @activity.trackable.content.user.receive_moderation_notifications?

    mail to: @activity.recipient.email,
         subject: "Your Concerto Submission: #{@activity.trackable.content.name} has been #{@activity.parameters[:status] ? 'approved' : 'denied'}", from: @activity.owner.email
  end

  def test_email(to)
    mail to:,
         subject: t('.subject'),
         body: t('.body'),
         from: ConcertoConfig[:mailer_from]
  end
end
