FROM ruby:3.3.3-alpine AS concerto2-base

ENV MODHAND_IMAGE=concerto2-base
ENV BUNDLER_VERSION=2.5.11

ENV RAILS_ENV production
ENV NODE_ENV production

WORKDIR /concerto2
COPY Gemfile Gemfile.lock ./

ENV GENERAL_DEPS bash gcompat libpq tzdata nodejs imagemagick vips sqlite curl
ENV BUILD_DEPS git linux-headers libpq libxml2-dev libxslt-dev build-base postgresql-dev pkg-config 

ENV NOKOGIRI_SYSTEM_LIBS build-base libxml2-dev libxslt-dev
ENV AO --no-install-recommends --no-cache
# general dependencies
RUN apk update \
  && set -ex \
  && apk add $AO $GENERAL_DEPS \
  && apk add $AO --virtual builddependencies $BUILD_DEPS \
  && apk add $AO $NOKOGIRI_SYSTEM_LIBS \
  && gem install nokogiri --platform=ruby -- --use-system-libraries \
  && gem install bundler -v $BUNDLER_VERSION \
  && bundle config set force_ruby_platform true \
  && bundle config set without 'development test' \
  && bundle config \
  && bundle install  \
  && apk del builddependencies

ENTRYPOINT ["./entrypoints/docker-entrypoint.sh"]

# -------------------------------------------------------------------
# Production without assets (for Pull Requests)
# -------------------------------------------------------------------

FROM concerto2-base AS concerto2-prod-no-assets
ENV MODHAND_IMAGE=concerto2-prod-no-assets

COPY . ./

# -------------------------------------------------------------------
# Production
# -------------------------------------------------------------------

FROM concerto2-prod-no-assets AS concerto2-prod
ENV MODHAND_IMAGE=concerto2-prod
ARG RAILS_MASTER_KEY
ENV RAILS_MASTER_KEY $RAILS_MASTER_KEY

RUN set -ex  \
  && rails assets:precompile

# -------------------------------------------------------------------
# Development
# -------------------------------------------------------------------

FROM concerto2-base AS concerto2-dev
ENV MODHAND_IMAGE=concerto2-dev

ENV RAILS_ENV development
ENV NODE_ENV development

RUN bundle config unset without \
    && bundle config \
    && bundle install

RUN set -ex  \
  && apk add $AO  firefox
