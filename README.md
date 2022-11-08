# neunotes-ts

Backend application for neunotes. A understandable human notes for everyday use.

## Typeorm migrations

- Create migration: (use only on develop mode)
  > npm run m:create
- Generate migration: (when changes some model)

  > npm run m:gen -- [path]

  Example:

  > npm run m:gen -- src/migrations/migrationName

- run migrations:
  > npm run m:run

## Dockers

Dockers use .env file to set params for docker-compose

- Docker commands are managed with make:
  - Build containers:
    > make docker-build
  - Run dockers:
    > make run-daemonized
  - Dockers down:
    > make dockers-down
