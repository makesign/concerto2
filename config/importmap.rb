# frozen_string_literal: true

# Pin npm packages by running ./bin/importmap

pin 'application'
pin '@hotwired/turbo-rails', to: 'turbo.min.js'
pin '@hotwired/stimulus', to: 'stimulus.min.js'
pin '@hotwired/stimulus-loading', to: 'stimulus-loading.js'
pin_all_from 'app/javascript/controllers', under: 'controllers'
# TODO: add popper and bootstrap again for bootstrap 5.3
# pin 'popper', to: 'popper.js', preload: true
# pin 'bootstrap', to: 'bootstrap.min.js', preload: true
