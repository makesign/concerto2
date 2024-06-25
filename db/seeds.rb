# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).

#It's important to use where{attribute}.first_or_create! so as to prevent duplicate creation of records

# Populate the 3 major 'kinds' of content we know as of now.
# There is discussion to move this to a static array / config elsewhere,
# but I don't have a solid grasp on the system-wide repercussions of that
# change at the moment.
# Note: This is replicated in config/initializers/17-required_data.rb because an instance must have kinds.
["Graphics", "Ticker", "Text", "Dynamic"].each do |kind|
  Kind.where(:name => kind).first_or_create!
end

# first, we need a user
user = User.first
if user.nil?
  user = User.new(email: "concerto@infrastructure.de", password: "geheim12", password_confirmation: "geheim12",
   first_name: "Tick", last_name: "Tack", is_admin: true)
end
user.confirmed_at = Date.today
user.receive_moderation_notifications = true
user.save

#Default plugins
enable_plugins = true
ConcertoPlugin.where(:gem_name => "concerto_weather").first_or_create!(:enabled => enable_plugins, :source => "rubygems")
ConcertoPlugin.where(:gem_name => "concerto_remote_video").first_or_create!(:enabled => enable_plugins, :source => "rubygems")
ConcertoPlugin.where(:gem_name => "concerto_simple_rss").first_or_create!(:enabled => enable_plugins, :source => "rubygems")
ConcertoPlugin.where(:gem_name => "concerto_iframe").first_or_create!(:enabled => enable_plugins, :source => "rubygems")
ConcertoPlugin.where(:gem_name => "concerto_calendar").first_or_create!(:enabled => enable_plugins, :source => "rubygems")
ConcertoPlugin.where(:gem_name => "concerto_hardware").first_or_create!(:enabled => enable_plugins, :source => "rubygems")
ConcertoPlugin.where(:gem_name => "concerto_frontend").first_or_create!(:enabled => enable_plugins, :source => "rubygems")

# Establish the 4 major display areas a template usually has.
# In my quick sample, this code will make 68% of the Concerto 1 fields match
# up correct with the new Concerto 2 fields.  Magic will have to handle the other
# 42% of fields with stranger names like "Graphics (Full-Screen)"

# Note: This is replicated in config/initializers/17-required_data.rb because an instance must have fields.
Kind.all.each do |kind|
  field = Field.where(:name => kind.name).first_or_create!(:kind => Kind.where(:name => kind.name).first)
end



def create_template(template_name, image_filename, owner)
  template = Template.where(:name => template_name).first_or_create!(author: "Concerto", owner: owner)

  #Taking care to make this file upload idempotent
  if Media.where(:file_name => image_filename).to_a.empty?
    file = File.new("db/seed_assets/#{image_filename}")
    media = template.media.build(:key => "original", :file_type => "image/jpg",
                                  :file_name => image_filename)
    media.attached_file.attach(io: file, filename: image_filename)
    media.file_size = file.size
    media.save!
  end
  template
end

#Create an initial template
template = create_template "BlueSwoosh", "BlueSwooshNeo_16x9.jpg", user

#Associate each field with a position in the template
concerto_template = template.id
Position.where(:field_id => Field.where(:name => "Graphics").first.id, :template_id => concerto_template).first_or_create!(:top => ".026", :left => ".025", :bottom => ".796", :right => ".592", :style => "border:solid 2px #ccc;")
Position.where(:field_id => Field.where(:name => "Ticker").first.id, :template_id => concerto_template).first_or_create!(:top => ".885", :left => ".221", :bottom => ".985", :right => ".975", :style => "color:#FFF; font-family:Frobisher, Arial, sans-serif; font-weight:bold !important;")
Position.where(:field_id => Field.where(:name => "Text").first.id, :template_id => concerto_template).first_or_create!(:top => ".015", :left => ".68", :bottom => ".811", :right => ".98", :style =>"color:#FFF; font-family:Frobisher, Arial, sans-serif;")
Position.where(:field_id => Field.where(:name => "Time").first.id, :template_id => concerto_template).first_or_create!(:top => ".885", :left => ".024", :bottom => ".974", :right => ".18", :style => "color:#ccc; font-family:Frobisher, Arial, sans-serif; font-weight:bold !important; letter-spacing:.12em !important;")




#Create an initial group
Group.where(:name => "Concerto Admins").first_or_create!

#Create a sample Full-Screen
screen = Screen.where(:name => "Sample Screen").first_or_create!(:location => "Cafe", :is_public => true, :owner_id => Group.first.id, :owner_type => "Group", :template_id => concerto_template, :width => 1024, :height => 768, :time_zone => Time.zone.name)

# The time is just a special text field.
time_field = Field.where(:name => 'Time').first_or_create!(:kind => Kind.where(:name => 'Text').first)
# default scope does not make any sense here as screen is given and thus cannot be nil!
FieldConfig.where(:field_id => time_field.id, :key => 'entry_transition', :screen => screen).first_or_create!(:value => 'replace')
FieldConfig.where(:field_id => time_field.id, :key => 'exit_transition', :screen => screen).first_or_create!(:value => 'replace')
# FieldConfig.default.where(:field_id => time_field1.id, :key => 'entry_transition', :screen => screen).first_or_create!(:value => 'replace')
# FieldConfig.default.where(:field_id => time_field2.id, :key => 'exit_transition', :screen => screen).first_or_create!(:value => 'replace')



#Determine installed content types for enabling them in the initial feed
#This is not the ideal way but unfortunately they're not registered yet at this point
installed_content_types = { "Graphic"=>"1", "Ticker"=>"1" } # these are native
# enables the content types if the gems are found (even if they aren't going to be registered, unfortunately)
if Gem.loaded_specs.has_key? "concerto_simple_rss"
  installed_content_types.merge!({ "SimpleRss" => "1" })
end
if Gem.loaded_specs.has_key? "concerto_remote_video"
  installed_content_types.merge!({ "RemoteVideo" => "1" })
end
if Gem.loaded_specs.has_key? "concerto_weather"
  installed_content_types.merge!({ "Weather" => "1" })
end

#Create an initial feed
feed = Feed.where(:name => "Concerto").first_or_create!(
    :description => "Initial Concerto Feed",
    :group_id => Group.first.id,
    :is_viewable => 1,
    :is_submittable => 1,
    :content_types => installed_content_types)


# -------------- Waves -------------------
template = create_template "Waves", "Waves_16x9.jpg", user

#Associate each field with a position in the template
waves_template = template.id
Position.where(:field_id => Field.where(:name => "Graphics").first.id, :template_id => waves_template).first_or_create!(:top => ".009", :left => ".046", :bottom => ".816", :right => ".641", :style => "font-family:Frobisher, sans-serif; font-size:0.8em; font-weight:bold; ")
Position.where(:field_id => Field.where(:name => "Text").first.id, :template_id => waves_template).first_or_create!(:top => ".009", :left => ".712", :bottom => ".809", :right => ".967", :style =>"font-family:Frobisher, sans-serif;")
Position.where(:field_id => Field.where(:name => "Time").first.id, :template_id => waves_template).first_or_create!(:top => ".858", :left => ".691", :bottom => ".975", :right => ".938", :style => "font-family:Frobisher, sans-serif; font-size:0.8em; font-weight:bold;")


# -------------- Stoic -------------------

template = create_template "Stoic", "Stoic_16x9.jpg", user

stoic_template = template.id
Position.where(:field_id => Field.where(:name => "Graphics").first.id, :template_id => stoic_template).first_or_create!(:top => ".023", :left => ".016", :bottom => ".838", :right => ".626", :style => "font-family:Frobisher, Arial, sans-serif; color:#000;")
Position.where(:field_id => Field.where(:name => "Ticker").first.id, :template_id => stoic_template).first_or_create!(:top => ".903", :left => ".27", :bottom => ".995", :right => ".97", :style => "font-family:Frobisher, Arial, sans-serif; color:#FFF;")
Position.where(:field_id => Field.where(:name => "Text").first.id, :template_id => stoic_template).first_or_create!(:top => ".01", :left => ".652", :bottom => ".816", :right => ".992", :style =>"font-family:Frobisher, Arial, sans-serif; color:#FFF;")
Position.where(:field_id => Field.where(:name => "Time").first.id, :template_id => stoic_template).first_or_create!(:top => ".903", :left => ".091", :bottom => ".995", :right => ".231", :style => "font-family:Frobisher, Arial, sans-serif; color:#FFF;")


# -------------- Simplicity -------------------
template = create_template "Simplicity", "Simplicity.jpg", user

simplicity_template = template.id
Position.where(:field_id => Field.where(:name => "Graphics").first.id, :template_id => simplicity_template).first_or_create!(:top => "0", :left => "0", :bottom => "1", :right => "1", :style => "")




# -------------- Ruby -------------------
template = create_template "Waves", "Ruby_16x9.jpg", user

ruby_template = template.id
Position.where(:field_id => Field.where(:name => "Graphics").first.id, :template_id => ruby_template).first_or_create!(:top => ".196", :left => ".042", :bottom => ".879", :right => ".606", :style => "font-family:Frobisher, Arial, sans-serif; color:#000; border:solid 1px #ccc;")
Position.where(:field_id => Field.where(:name => "Ticker").first.id, :template_id => ruby_template).first_or_create!(:top => ".011", :left => ".078", :bottom => ".15", :right => ".606", :style => "font-family:Frobisher, Arial, sans-serif; color:#FFF;")
Position.where(:field_id => Field.where(:name => "Text").first.id, :template_id => ruby_template).first_or_create!(:top => ".117", :left => ".671", :bottom => ".819", :right => ".991", :style =>"font-family:Frobisher, Arial, sans-serif; color:#FFF;")
Position.where(:field_id => Field.where(:name => "Time").first.id, :template_id => ruby_template).first_or_create!(:top => ".011", :left => ".689", :bottom => ".074", :right => ".99", :style => "font-family:Frobisher, Arial, sans-serif; color:#FFF;")



# -------------- Ribbon -------------------
template = create_template "Ribbon", "Ribbon_16x9.jpg", user

ribbon_template = template.id
Position.where(:field_id => Field.where(:name => "Graphics").first.id, :template_id => ribbon_template).first_or_create!(:top => ".013", :left => ".038", :bottom => ".832", :right => ".633", :style => "border:solid 2px #999 ;")
Position.where(:field_id => Field.where(:name => "Ticker").first.id, :template_id => ribbon_template).first_or_create!(:top => ".867", :left => ".012", :bottom => ".986", :right => ".572", :style => "font-family:Arial, sans-serif ;")
Position.where(:field_id => Field.where(:name => "Text").first.id, :template_id => ribbon_template).first_or_create!(:top => ".293", :left => ".76", :bottom => ".837", :right => ".96", :style =>"color:#FFF ; font-family:Arial, sans-serif ;")
Position.where(:field_id => Field.where(:name => "Time").first.id, :template_id => ribbon_template).first_or_create!(:top => ".033", :left => ".84", :bottom => ".233", :right => ".972", :style => "color:#ccc ; font-family:Arial, sans-serif ;")



# -------------- GraySwoosh -------------------
template = create_template "GraySwoosh", "GraySwoosh_16x9.jpg", user

grayswoosh_template = template.id
Position.where(:field_id => Field.where(:name => "Graphics").first.id, :template_id => grayswoosh_template).first_or_create!(:top => ".2", :left => ".412", :bottom => ".95", :right => ".975", :style => "border: solid 2px #FFF;")
Position.where(:field_id => Field.where(:name => "Ticker").first.id, :template_id => grayswoosh_template).first_or_create!(:top => ".023", :left => ".458", :bottom => ".11", :right => ".988", :style => "color: #000; font-family:Frobisher, sans-serif;")
Position.where(:field_id => Field.where(:name => "Text").first.id, :template_id => grayswoosh_template).first_or_create!(:top => ".2", :left => ".04", :bottom => ".95", :right => ".38", :style =>"font-family: Frobisher, sans-serif; color:#FFF;")
Position.where(:field_id => Field.where(:name => "Time").first.id, :template_id => grayswoosh_template).first_or_create!(:top => ".018", :left => ".11", :bottom => ".118", :right => ".335", :style => "color:#333; font-family:Frobisher, sans-serif; font-size:1.05em; font-weight:bold; letter-spacing:0.07em;")


#Create initial subscriptions for the sample Screen
feed_id = feed.id
screen_id= screen.id
Field.where('name NOT IN (?)', ['Dynamic', 'Time']).each do |f|
  Subscription.where(:feed_id => feed_id, :field_id => f.id, :screen_id => screen_id).first_or_create!(:weight => 1)
end

#Page import
seed_file = File.join(Rails.root, 'db', 'seed_assets' ,'pages.yml')
seeds = YAML::load_file(seed_file)
Page.create(seeds["pages"])

puts "created seeds in #{Rails.env}"