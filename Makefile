.RECIPEPREFIX = -

open:
- open http://localhost:3000
bash:
- docker-compose exec concerto bash

build:
- docker build -t concerto .

build-new:
- docker build -f Dockerfile.new_from_mh -t concerto_new .

ruby_version=$(shell cat .ruby-version)
ruby_gemset=$(shell cat .ruby-gemset)
rvm-info:
- @echo "rvm should use gemset specified in .ruby-version and .ruby-gemset after cd in dir, if not run:"
- @echo
- @echo "rvm gemset use ${ruby_version}@${ruby_gemset}"
- @echo
- rvm gemset list