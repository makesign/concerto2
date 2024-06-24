

# empty content
https://docs.docker.com/compose/networking/


https://docs.docker.com/compose/compose-file/
https://stackoverflow.com/questions/41964172/docker-container-sending-empty-responses

solution: set ip binding on server startup:

bin/rails server --port=3000 --binding=0.0.0.0


# todos
- fehler in docker
Cannot render console from 172.20.0.1! Allowed networks: 127.0.0.0/127.255.255.255, ::1