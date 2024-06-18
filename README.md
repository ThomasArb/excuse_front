# Excuses de Dev - Frontend

## How to start ?

This project runs fully on _docker_ and _docker-compose_. To start it, just use the command below at the project root :
```shell
docker-compose -p excuses_de_dev_front -f docker/docker-compose.yml up -d
```

## How to use ?

The app is available at `localhost:8888`.

Four routes are available in this service :
* `/` : Default page with the button
* `/lost` : A gif and a redirection to home after 5 secondes
* `/code/:code` : Display a specific code
* `*` : A 404 error page 
