# wie weiter



## Grundsätzlich: zum vergleichen gibt es

- das alte concerto / rails5 branch: https://github.com/makesign/concerto/tree/rails5-bk
- neue rails 7 app mit devise und activestorage zum vergleichen, mit vielen kleinen commits: https://github.com/makesign/rails7-tryout-with-devise
(hier kann man gut abgucken, wie eine moderne rails7 app aussehen muss)
- Modulhandbuch: ca. 4 Jahre alte app, inzwischen auf rails 7.0 mit docker-compose und Dockerfile, evtl. Gh actions, deployment(noch nicht automatisch)
https://github.com/modulehandbook/modulehandbook



# Overview
- ich bin vom rails5 branch in concerto/concerto ausgegangen, da in [concerto_by_bamnet](https://github.com/makesign/concerto_by_bamnet) kaum änderungen zu master waren

- nach ca. 2-3 h habe ich den versuch, die alte version zu starten aufgegeben: zuviele libraries sind so alt, dass es ständig inkompatibilitäten und auf dem mac compilefehler beim installieren der alten gems gibt
- ich habe versucht das Dockerfile und docker-compose zu fixen, dort liessen sich alle alten gems installieren, aber rails startete nicht / nur mit fehlern im containern, auch das warten auf die db mit nmap funktionierte nicht mehr 

versuch ist im branch rails5-bk:  https://github.com/makesign/concerto/tree/rails5-bk

-> das aufgegeben und stattdessen in einer neuen rails-app begonnen, concerto "einzufüllen":

[makesign/concerto2.git](https://github.com/makesign/concerto2)

# Alte Liste mit Todos, markiert mit Done oder link zu issue Thursday, 11.July 2024 
## Done: Entscheidung Asset Pipeline 

https://mixandgo.com/learn/ruby-on-rails/how-to-install-bootstrap

- vorerst weiter mit altem Bootstrap und Sprockets , see
https://guides.rubyonrails.org/asset_pipeline.html#how-to-use-sprockets

### Done: validation & foreign keys

Wednesday, 26.June 2024: BK
belongs_to validiert inzwischen automatisch presence.

in alten rails versionen war das nicht so. Das muss überprüft werden, ob hier nicht besser
ein optional: true eingefügt werden sollte.
belongs_to :parent, optional: true

https://discuss.rubyonrails.org/t/belongs-to-without-raising-an-exception-if-association-does-not-exist/82192



## Done Frontend/Bootstrap (bootstrap gem wieder ausgebaut)
- ich habe bootstrap mit gem installiert , concerto basiert auf einem uraltem bootstrap deren componenten direkt in den sourcecode aufgenommen waren:* bootstrap-tab.js v2.3.2

siehe: 
https://github.com/twbs/bootstrap-rubygem

in tryout habe ich es mit einer neueren methode vollständig umgesetzt:

### Done: js / asset pipeline (using sprockets)

https://github.com/twbs/bootstrap-rubygem
gibt als alternativen sprockets und importmaps

rails7:
da scheinen die aktuellen alternativen importmap und sprockets zu sein.

https://guides.rubyonrails.org/working_with_javascript_in_rails.html#choosing-between-import-maps-and-a-javascript-bundler

trotzdem mit sprockets weiter probieren?

https://mixandgo.com/learn/ruby-on-rails/how-to-install-bootstrap

## Done: Tests (except https://github.com/makesign/concerto2/issues/18)

- angefangen tests zu fixen **in branch fix_tests**
- https://github.com/makesign/concerto2/tree/fix_tests
- viel Model validation; teilweise angefangen reine model tests von test/unit nach test/model umzuziehen

## Attachments -> https://github.com/makesign/concerto2/issues/19
- attachments wurden mit einem alten gem "attachable" über
die Model Class "Media" eingebunden (v.a. Image, auch andere??)
- punktuell mit active storage ersetzt
- wahrscheinlich kann viel raus

## Plugins -> https://github.com/makesign/concerto2/issues/7
- concerto plugins einbinden oder eher rauslassen?
- die sind auch sehr alt, müssen vermutlich auch angepasst werden
- also erstmal rauslassen?
- evlt. einige nicht optional?

siehe doc für plugins und engines:
https://guides.rubyonrails.org/plugins.html
https://guides.rubyonrails.org/engines.html

## Client Computer? -> https://github.com/makesign/concerto2/issues/20
Update image: 
- https://github.com/makesign/concerto-player
(erster fund dazu, vielleicht gibt es bessere)
- https://opensource.com/article/21/7/custom-raspberry-pi-image


## Jobs/worker -> https://github.com/makesign/concerto2/issues/21
- habe ich mir noch gar nicht angesehen




