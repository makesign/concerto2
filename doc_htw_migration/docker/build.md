

https://github.com/ruby/net-pop/issues/26

as gem "net-protocol", "~> 0.2.2" did not work, 

https://github.com/ruby/net-pop/issues/26

# bundle exec bootsnap precompile --gemfile
## docker:
 > [build 5/6] RUN bundle exec bootsnap precompile app/ lib/:
#17 0.208 bundler: failed to load command: bootsnap (/usr/local/bundle/ruby/3.3.0/bin/bootsnap)
#17 0.208 /usr/local/lib/ruby/3.3.0/bundler/definition.rb:594:in `materialize': Could not find concerto_calendar-0.0.9, concerto_frontend-0.4.3, concerto_hardware-0.8, concerto_remote_video-1.2, concerto_simple_rss-1.1, google-api-client-0.53.0, icalendar-2.10.1, video_info-2.5.0, encryptor-3.0.0, ruby-xslt-0.9.10, google-apis-core-0.15.0, google-apis-generator-0.15.0, ice_cube-0.16.4, htmlentities-4.3.4, iso8601-0.13.0, multi_json-1.15.0, oga-3.4, open_uri_redirections-0.2.1, googleauth-1.11.0, httpclient-2.8.3, representable-3.2.0, retriable-3.1.2, gems-1.2.0, google-apis-discovery_v1-0.17.0, ast-2.4.2, ruby-ll-2.1.3, google-cloud-env-2.1.1, jwt-2.8.2, os-1.1.4, signet-0.19.0, declarative-0.0.20, trailblazer-option-0.1.2, uber-0.1.0, ansi-1.5.0 in locally installed gems (Bundler::GemNotFound)
 > 
> 
> 
>
## lokal:

bundle exec bootsnap precompile --gemfile

/Users/kleinen/.rvm/gems/ruby-3.3.3@concerto-new/gems/ruby-xslt-0.9.10/setup.rb:283: warning: key "bin-dir" is duplicated and overwritten on line 284