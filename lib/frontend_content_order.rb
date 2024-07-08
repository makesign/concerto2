# frozen_string_literal: true

# Provide a module to assist in loading shuffling algoritms
# and supporting code for the frontend.
module FrontendContentOrder
  # Load a shuffling algorithm.
  # #{require} the file name if the class does not exist,
  # then return the class to be used for shuffling content.
  #
  # @param [String] shuffler_name Class name of the shuffle algorithm to load.
  #    Defaults to a BaseShuffle algorithm.
  # @return [Class] Shuffle algorithm class.
  def self.load_shuffler(shuffler_name = 'BaseShuffle')
    require shuffler_name.underscore unless defined? shuffler_name.constantize
    shuffler_name.constantize
  rescue StandardError
    Rails.logger.error("Trouble loading shuffler: #{shuffler_name}.")
    BaseShuffle
  end
end
