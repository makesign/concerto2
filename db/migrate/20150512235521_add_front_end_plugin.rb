class AddFrontEndPlugin < ActiveRecord::Migration[7.1]
  def up
    ConcertoPlugin.where(:gem_name => "concerto_frontend").first_or_create(:enabled => true, :source => "rubygems")
  end
end
