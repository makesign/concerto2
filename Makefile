.RECIPEPREFIX = -

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

ruby_version=$(shell cat .ruby-version)
ruby_gemset=$(shell cat .ruby-gemset)
rvm-info:
- @echo "rvm should use gemset specified in .ruby-version and .ruby-gemset after cd in dir, if not run:"
- @echo
- @echo "rvm gemset use ${ruby_version}@${ruby_gemset}"
- @echo
- rvm gemset list

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


quick:
- docker build -f Dockerfile.stage1.quick -t concerto-stage1-quick .

