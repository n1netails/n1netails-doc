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

---

### N1netails Environment Variables

This section lists all environment variables used across **N1netails API**, **N1netails UI**, and **N1netails Liquibase**. Defaults are provided where applicable.

---

## 🔧 N1netails-API

### **Required**
- **PORT** — Application port (default: `9901`)
- **POSTGRES_URL** — Database URL (default: `jdbc:postgresql://localhost/n1netails`)
- **POSTGRES_USERNAME** — Database user (default: `n1netails`)
- **POSTGRES_PASSWORD** — Database password (default: `n1netails`)
- **N1NETAILS_PASSKEY_RELYING_PARTY_ID** — Passkey relying party ID (default: `localhost`)
- **N1NETAILS_PASSKEY_ORIGINS** — Allowed passkey origins  
  (default: ``http://localhost:8080,http://localhost:9900,http://localhost:9901,http://localhost:4200``)

---

### 🤖 AI Integration
- **OPENAI_ENABLED** — Enable OpenAI features (default: `false`)
- **OPENAI_API_KEY** — Your OpenAI API key
- **OPENAI_API_URL** — OpenAI API base URL (default: `https://api.openai.com`)

---

### 🔑 OAuth2 (GitHub)
- **GITHUB_OAUTH2_ENABLED** — Enable GitHub OAuth2 login (default: `false`)
- **AUTH_OAUTH2_REDIRECT_SUCCESS** — Redirect after successful OAuth  
  (default: ``http://localhost:4200/#/oauth2/success?token=``)
- **GITHUB_CLIENT_ID** — GitHub OAuth2 Client ID  
- **GITHUB_CLIENT_SECRET** — GitHub OAuth2 Client Secret  
  *(Generate both at `https://github.com/settings/developers`)*

---

### ✉️ Email Settings
- **EMAIL_ENABLED** — Enable email sending (default: `false`)
- **EMAIL_HOST** — SMTP host (default: `localhost`)
- **EMAIL_PORT** — SMTP port (default: `1025`)
- **EMAIL_USERNAME** — Email username (leave blank when using Mailhog)
- **EMAIL_PASSWORD** — Email password (leave blank when using Mailhog)
- **EMAIL_SENDER** — Email "from" address
- **EMAIL_PROPERTIES_AUTH** — SMTP auth enabled (default: `false`)
- **EMAIL_PROPERTIES_STARTTLS_ENABLE** — STARTTLS enabled (default: `false`)
- **N1NETAILS_UI** — Base UI URL (default: `http://localhost:4200`)

---

### 🔔 Notifications
- **N1NETAILS_ENCRYPTION_SECRET_KEY** — AES secret key  
  *(default: `nkey`; **you must generate your own secure key**)*
- **N1NETAILS_NOTIFICATIONS_ENABLED** — Enable notifications (default: `false`)
- **N1NETAILS_NOTIFICATIONS_EMAIL_ENABLED** — Enable Email notifications (default: `false`)
- **N1NETAILS_NOTIFICATIONS_MSTEAMS_ENABLED** — Enable Microsoft Teams notifications (default: `false`)
- **N1NETAILS_NOTIFICATIONS_SLACK_ENABLED** — Enable Slack notifications (default: `false`)
- **N1NETAILS_NOTIFICATIONS_DISCORD_ENABLED** — Enable Discord notifications (default: `false`)
- **N1NETAILS_NOTIFICATIONS_TELEGRAM_ENABLED** — Enable Telegram notifications (default: `false`)

---

## 🖥️ N1netails-UI

### **Required**
- **PORT** — UI port (default: `9900`)
- **API_BASE_URL** — Base URL of N1netails API (default: `http://localhost:9901`)

---
### 📖 DOC Url
- **API_DOC_URL** — (documentation url defaults to https://n1netails.com)

---

### 🤖 AI Integration
- **OPENAI_ENABLED** — Enable OpenAI integration (default: `false`)

---

### 🔑 OAuth2
- **GITHUB_OAUTH2_ENABLED** — Enable GitHub OAuth login (default: `false`)

---

### 🔔 Notifications
- **N1NETAILS_NOTIFICATIONS_ENABLED** — Enable notifications (default: `false`)
- **N1NETAILS_NOTIFICATIONS_EMAIL_ENABLED** — Enable Email notifications (default: `false`)
- **N1NETAILS_NOTIFICATIONS_MSTEAMS_ENABLED** — Enable Teams notifications (default: `false`)
- **N1NETAILS_NOTIFICATIONS_SLACK_ENABLED** — Enable Slack notifications (default: `false`)
- **N1NETAILS_NOTIFICATIONS_DISCORD_ENABLED** — Enable Discord notifications (default: `false`)
- **N1NETAILS_NOTIFICATIONS_TELEGRAM_ENABLED** — Enable Telegram notifications (default: `false`)

---

## 🗄️ N1netails-Liquibase

### **Required**
- **POSTGRES_URL** — Database URL
- **POSTGRES_USERNAME** — Database user
- **POSTGRES_PASSWORD** — Database password

---

### Useful Docker Commands

Below are common Docker commands for building, running, and removing your N1netails containers.  
Note that **Windows uses `docker-compose`**, while **Linux uses `docker compose`**.

---

#### 🚀 Start Containers (Build & Run)

**Windows**
```sh
docker-compose up --build
````

**Linux**

```sh
docker compose up --build
```

---

#### 🗑️ Remove Containers & Volumes

**Windows**

```sh
docker-compose down -v
```

**Linux**

```sh
docker compose down -v
```
