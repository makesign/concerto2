
# Todos

## nprogress
das wurde nicht gefunden: 
(kam evtl. Aus einem Gem?)
//@import "nprogress";



# Guides notes

Console:

Rails.application.config.assets.paths

## dartsass

./bin/rails dartsass:install

did NOT gitignore

app/assets/builds/

**starten mit:**

    bin/dev


## sass
https://sass-lang.com/documentation/breaking-changes/slash-div/

sass-migrator division **/*.scss

# fonts:

E, [2024-07-10T20:44:31.462537 #39292] ERROR -- :
ActionController::RoutingError (No route matches [GET] "/webfonts/fa-solid-900.ttf"):

https://docs.fontawesome.com/web/use-with/ruby-on-rails

@import "font-awesome";

## i18n


### original: 
i18n-js-3.0.11
find . -name "i18n"
./vendor/bundle/ruby/3.3.0/gems/i18n-js-3.0.11/app/assets/javascripts/i18n
./vendor/bundle/ruby/3.3.0/gems/i18n-js-3.0.11/spec/ruby/i18n
./vendor/bundle/ruby/3.3.0/gems/i18n-js-3.0.11/lib/i18n
./vendor/bundle/ruby/3.3.0/gems/i18n-js-3.0.11/lib/rails/generators/i18n
./vendor/bundle/ruby/3.3.0/gems/i18n-tasks-1.0.14/lib/i18n
./vendor/bundle/ruby/3.3.0/gems/i18n-1.14.5/lib/i18n

### now:
grep 18 Gemfile.lock
      i18n (>= 1.6, < 2)
    bootsnap (1.18.3)
    i18n (1.14.5)
    i18n-js (4.2.3)
      i18n
  i18n-js (~> 4.2)

#### https://github.com/makesign/concerto2/issues/16
to update translations (app/javascript/i18n/translation.js) run
i18n-js:
- bin/i18n export

-> should be automated. See
see https://github.com/fnando/i18n-js
  

## Turbolinks

ersetzt durch turbo, siehe 
https://github.com/turbolinks/turbolinks


https://github.com/hotwired/turbo
https://github.com/hotwired/turbo-rails
