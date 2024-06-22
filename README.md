# README

    rvm use 3.3.3@concerto-new

    bin/rails db:migrate

# Todo

fix migration in (refers to model, was not found)
db/migrate/20150512235521_add_front_end_plugin.rb

in 01-db_create_load... wtf?
- # is_manual_migration = File.split($0).last == 'rake' && $*.first == 'db:migrate'

# Major changes

# initialization

## config/initializers/01-db_create_load_or_migrate.rb


# Notes

## there is a whole own plugin mechanism....
in Gemfile:
    # The Gemfile-plugins gem list is managed by Concerto itself,
    # through the ConcertoPlugins controller.
    group :concerto_plugins do
      eval File.read("#{basedir}/Gemfile-plugins") if     File.exist?("#{basedir}/Gemfile-plugins")
    end

contained a self-knit db migration logic.
## references to model in initialization
There were many references to Concerto Model classes in the initialization process
-> surrounded with
Rails.configuration.after_initialize do

see https://guides.rubyonrails.org/configuring.html#config-after-initialize

tbd: this will have changed the order of init steps - order ok?


### Issues
[DEVISE] Please review the [changelog] and [upgrade guide] for more info on Hotwire / Turbo integration.

  [changelog] https://github.com/heartcombo/devise/blob/main/CHANGELOG.md
  [upgrade guide] https://github.com/heartcombo/devise/wiki/How-To:-Upgrade-to-Devise-4.9.0-%5BHotwire-Turbo-integration%5D


  /Users/kleinen/mine/current/htw/courses/project-makerspace/code/concerto-new/concerto2/config/initializers/02-concerto_config.rb:5: warning: Socket.gethostbyname is deprecated; use Addrinfo.getaddrinfo instead.

/Users/kleinen/mine/current/htw/courses/project-makerspace/code/concerto-new/concerto2/config/initializers/02-concerto_config.rb:5: warning: Socket.gethostbyname is deprecated; use Addrinfo.getaddrinfo instead.
  
## git diff app/assets/config/manifest.js

@@ -1,4 +1,6 @@
 //= link_tree ../images
+//= link_directory ../javascripts .js
 //= link_directory ../stylesheets .css
 //= link_tree ../../javascript .js
 //= link_tree ../../../vendor/javascript .js
+//= link_directory ../fonts


# /config

	modified:   config/application.rb
	modified:   config/boot.rb
	modified:   config/environment.rb
	modified:   config/environments/development.rb
	modified:   config/environments/production.rb
	modified:   config/environments/test.rb
	modified:   config/locales/en.yml
	modified:   config/routes.rb
