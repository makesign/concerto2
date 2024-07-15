# frozen_string_literal: true

namespace :content do
  desc 'Purges all expired and unused content in Concerto'
  task purge_unused_content: :environment do
    Content.find_each do |c|
      c.destroy if c.is_orphan? && c.is_expired?
    end
  end

  desc 'Purges all expired content in Concerto'
  task purge_expired_content: :environment do
    Content.find_each do |c|
      c.destroy if c.is_expired?
    end
  end
end
