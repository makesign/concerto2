.RECIPEPREFIX = -

open:
- open http://localhost:3000

bash:
- docker-compose exec concerto2 bash

run-bash:
- docker run -it concerto2 /bin/bash

build:
- docker build -f Dockerfile -t concerto2 .

ruby_version=$(shell cat .ruby-version)
ruby_gemset=$(shell cat .ruby-gemset)
rvm-info:
- @echo "rvm should use gemset specified in .ruby-version and .ruby-gemset after cd in dir, if not run:"
- @echo
- @echo "rvm gemset use ${ruby_version}@${ruby_gemset}"
- @echo
- rvm gemset list

docker-cleanup:
- docker rmi $(docker images -qa)
- docker rm $(docker ps -aq)