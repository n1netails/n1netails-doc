---
sidebar_position: 2
title: N1netails Docker Quickstart
description: Follow this guide to set up the N1netails project.
---

# N1netails Docker Quickstart

Run N1netails with docker.

You can set up the N1netails docker images using the docker compose yaml. If you would like to learn more about customizing N1netails for your own set up start at the readme here. [N1netails Project Github](https://github.com/n1netails/n1netails)

### Install Docker Desktop
Install Docker Desktop on your local computer or server [Docker get started](https://www.docker.com/get-started/)

### Setup Docker Compose for N1netails
After you have docker desktop or docker compose set up on your server you can use the following `docker-compose.yml` to run the N1netails project. 

You will also need to set up a directory called `initdb` and create a sql file with the following name `init-ntail-schema.sql` so docker can generate the `ntail` schema. 

Your folder structure should look like this:
```pgsql
your-directory/
├── docker-compose.yml
└── initdb/
    └── init-ntail-schema.sql
```

⚠️ Note: You can also clone this github repository to get the `docker-compose.yml` file and the `initdb` directory that includes the `init-ntail-schema.sql` file. [N1netails Project Github](https://github.com/n1netails/n1netails)

`init-ntail-schema.sql`
```sql
CREATE SCHEMA IF NOT EXISTS ntail AUTHORIZATION n1netails;
```

`docker-compose.yml`
```yaml
services:
  #  N1neTails API
  api:
    image: shahidfo/n1netails-api:latest
    container_name: n1netails-api
    ports:
      - "9901:9901"
    depends_on:
      liquibase:
        condition: service_completed_successfully
      db:
        condition: service_healthy
    environment:
      SPRING_PROFILE_ACTIVE: docker
      SPRING_DATASOURCE_URL: jdbc:postgresql://db:5432/n1netails
      SPRING_DATASOURCE_USERNAME: n1netails
      SPRING_DATASOURCE_PASSWORD: n1netails
      N1NETAILS_PASSKEY_RELYING_PARTY_ID: localhost
      N1NETAILS_PASSKEY_ORIGINS: http://localhost:8080,http://localhost:9900,http://localhost:9901,http://localhost:4200
  # N1neTails UI
  ui:
    image: shahidfo/n1netails-ui:latest
    container_name: n1netails-ui
    ports:
      - "9900:9900"
    depends_on:
      - api
    environment:
      SPRING_PROFILE_ACTIVE: docker
      # this can be changed to point to other n1netails-api urls
      API_BASE_URL: http://localhost:9901
  # N1neTails Liquibase
  liquibase:
    image: shahidfo/n1netails-liquibase:latest
    container_name: n1netails-liquibase
    depends_on:
      db:
        condition: service_healthy
    environment:
      SPRING_PROFILE_ACTIVE: docker
      SPRING_DATASOURCE_URL: jdbc:postgresql://db:5432/n1netails
      SPRING_DATASOURCE_USERNAME: n1netails
      SPRING_DATASOURCE_PASSWORD: n1netails
  # Postgres Database
  db:
    image: postgres:16-alpine
    container_name: n1netails_db
    environment:
      POSTGRES_DB: n1netails
      POSTGRES_USER: n1netails
      POSTGRES_PASSWORD: n1netails
    volumes:
      - pgdata:/var/lib/postgresql/data
      - ./initdb:/docker-entrypoint-initdb.d
    ports:
      - "5434:5432"
    healthcheck:
      test: [ "CMD-SHELL", "pg_isready -U n1netails" ]
      interval: 10s
      timeout: 5s
      retries: 60

volumes:
  pgdata:

```

### Useful Docker Commands

Build and run the docker container with the following commands.

#### docker compose
```shell
docker-compose up --build
```

#### Remove docker containers
```bash
docker-compose down -v 
```
