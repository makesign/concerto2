# syntax = docker/dockerfile:1

# Make sure RUBY_VERSION matches the Ruby version in .ruby-version and Gemfile
ARG RUBY_VERSION=3.3.3
FROM registry.docker.com/library/ruby:$RUBY_VERSION-bookworm as concerto-base


# Rails app lives here
WORKDIR /rails

# Set production environment
# ENV RAILS_ENV="production" \
#     BUNDLE_DEPLOYMENT="1" \
#     BUNDLE_PATH="/usr/local/bundle" \
#     BUNDLE_WITHOUT="development"

ENV RAILS_ENV="development" \
    BUNDLE_DEPLOYMENT="1" \
    BUNDLE_PATH="/usr/local/bundle" \
    GEM_PATH="/usr/local/bundle" 

# Throw-away build stage to reduce size of final image
FROM concerto-base as concerto-base-with-gems
WORKDIR /rails
ENV RAILS_ENV="development" \
    BUNDLE_DEPLOYMENT="1" \
    BUNDLE_PATH="/usr/local/bundle" \
    GEM_PATH="/usr/local/bundle"

# Install packages needed to build gems
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y \
    git libvips pkg-config nodejs\
    libmagickwand-dev 

# Install application gems
COPY Gemfile Gemfile.lock ./
RUN bundle config set frozen false && \
    bundle install && \
    rm -rf ~/.bundle/ "${BUNDLE_PATH}"/ruby/*/cache "${BUNDLE_PATH}"/ruby/*/bundler/gems/*/.git && \
    bundle exec bootsnap precompile --gemfile

# -------------------------------------------------------------------------------------------

FROM concerto-base-with-gems as concerto-precompiled
WORKDIR /rails
ENV RAILS_ENV="development" \
    BUNDLE_DEPLOYMENT="1" \
    BUNDLE_PATH="/usr/local/bundle" \
    GEM_PATH="/usr/local/bundle" 

# Copy application code
COPY . .

# Precompile bootsnap code for faster boot times
RUN bundle exec bootsnap precompile app/ lib/
# fehler
# #17 0.234 bundler: failed to load command: bootsnap (/usr/local/bundle/ruby/3.3.0/bin/bootsnap)


# Precompiling assets for production without requiring secret RAILS_MASTER_KEY
RUN SECRET_KEY_BASE_DUMMY=1 ./bin/rails assets:precompile

# -------------------------------------------------------------------------------------------
# Final stage for app image
FROM concerto-precompiled as concerto-app
# -------------------------------------------------------------------------------------------
WORKDIR /rails
ENV RAILS_ENV="development" \
    BUNDLE_DEPLOYMENT="1" \
    BUNDLE_PATH="/usr/local/bundle" \
    GEM_PATH="/usr/local/bundle"

# Install packages needed for deployment
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y \
           curl \
           imagemagick \
           libsqlite3-0 libvips && \
    rm -rf /var/lib/apt/lists /var/cache/apt/archives

# Copy built artifacts: gems, application
COPY --from=build /usr/local/bundle /usr/local/bundle
COPY --from=build /rails /rails

# Run and own only the runtime files as a non-root user for security
RUN useradd rails --create-home --shell /bin/bash && \
    chown -R rails:rails db log storage tmp
# USER rails:rails

# Entrypoint prepares the database.
ENTRYPOINT ["/rails/bin/docker-entrypoint"]

# Start the server by default, this can be overwritten at runtime
EXPOSE 3210
# CMD ["./bin/rails", "server", "-p", "3210"]
CMD ["bash"]

