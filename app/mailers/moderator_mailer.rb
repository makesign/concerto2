# frozen_string_literal: true

class ModeratorMailer < ApplicationMailer
  def items_pending(emails)
    return if emails.blank?

    mail to: emails, subject: t('.concerto_submission_pending_approval'),
         from: ConcertoConfig[:mailer_from] || 'concerto@example.com'
  end
end
