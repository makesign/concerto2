# frozen_string_literal: true

class ModeratorMailer < ActionMailer::Base
  def items_pending(emails)
    return unless emails.present?

    mail to: emails, subject: t('.concerto_submission_pending_approval'),
         from: ConcertoConfig[:mailer_from] || 'concerto@example.com'
  end
end
