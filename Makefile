.RECIPEPREFIX = -

rails: open
- bin/dev
#- rails server

sass:
- bin/dartsass:build
ci-all: ci-test ci-lint
ci-test:
- bin/rails test

i18n-js:
- bin/i18n export

ci-lint: bundle-audit brakeman rubocop
bundle-audit:
- bin/bundle-audit --update
brakeman:
- bin/brakeman -q -w3
rubocop:
- bin/rubocop --parallel
rubocop-a:
- bin/rubocop -A

tests-questions:
- git show --name-only 8dc6d81

test-file:
- git diff 8dc6d81 fa4e458 $f 

questions:
- git diff 8dc6d81 fa4e458 *.rb 



create-db:
- bin/rails db:migrate
- bin/rails db:seed

open:
- open http://localhost:3000

bash:
- docker-compose exec concerto2 bash

run-bash:
- docker run -it concerto2 /bin/bash

build-alpine:
- docker build -f Dockerfile -t concerto-alpine .

build:
- docker build -f Dockerfile.rails7 -t concerto2 .

mermaid:
- bin/rails mermaid_erd

ruby_version=$(shell cat .ruby-version)
ruby_gemset=$(shell cat .ruby-gemset)
rvm-info:
- @echo "rvm should use gemset specified in .ruby-version and .ruby-gemset after cd in dir, if not run:"
- @echo
- @echo "rvm gemset use ${ruby_version}@${ruby_gemset}"
- @echo
- rvm gemset list


# -------------------------------------------------------------------
#  Docker
# -------------------------------------------------------------------

# this is quite radical! 
docker-cleanup:
- docker rm $(shell docker ps -aq)
- docker rmi $(shell docker images -qa)


run:
- docker run -p 3001:3000 concerto-stage3

mini-build:
- docker build -f Dockerfile.mini -t mini .

mini-run:
- docker run -it mini /bin/bash

run-stage1:
- docker run -it concerto-stage1 /bin/bash

run-stage2:
- docker run -it concerto-stage2 /bin/bash

run-stage3:
- docker run -it concerto-stage3 /bin/bash


build-stage0:
- docker build -f Dockerfile.rails7 --target concerto-stage0 -t concerto-stage0 .

build-stage1:
- docker build -f Dockerfile.rails7 --target concerto-stage1 -t concerto-stage1 .


build-stage2:
- docker build -f Dockerfile.rails7 --target concerto-stage2 -t concerto-stage2 .

build-stage3:
- docker build -f Dockerfile.rails7 --target concerto-stage3 -t concerto-stage3 .

build-prod:
- docker build -f Dockerfile.rails7 --target concerto-production -t concerto-production .

build-dev:
- docker build -f Dockerfile.rails7 --target concerto-development -t concerto-development .



# -------------------------------------------------------------------
#  docker-compose
# -------------------------------------------------------------------

output:
- docker-compose up > tmp/output/docker-std.txt 2> tmp/output/docker-err.txt
- docker logs concerto-dev -f > tmp/output/docker-std-log.txt 2> tmp/output/docker-err-log.txt


create-container-files:
- mkdir docker-container-mounts
- touch docker-container-mounts/.keep
- mkdir docker-container-mounts/storage
- mkdir docker-container-mounts/tmp
- touch docker-container-mounts/storage/.keep
- touch docker-container-mounts/tmp/.keep

dc:
- docker-compose up -d
- docker logs concerto-dev -f

dd:
- docker-compose down

dc-bash:
- docker-compose run concerto bash

# the container db is located in docker-container-mounts/storage
dc-db:
- docker-compose run concerto bin/rails db:migrate
- docker-compose run concerto bin/rails db:seed


quick-push:
- git commit -am "commit at $(shell date "+%H:%M:%S")" && git push && open https://github.com/htw-imi-showtime/showtime-website/actions
