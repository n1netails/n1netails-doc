---
sidebar_position: 1
title: Setup MailHog to mock emails
description: Steps on how to setup MailHog for local email testing.
---

Here’s a **step-by-step guide on how to use MailHog**, a fake SMTP server for development and testing email sending in local environments.

---

## 1. **Install MailHog**

### Option 1: **Download binary**

* Go to: [https://github.com/mailhog/MailHog/releases](https://github.com/mailhog/MailHog/releases)
* Download the binary for your OS (e.g., `MailHog_windows_amd64.exe` for Windows)
* Rename it to `mailhog.exe` and move it somewhere like `C:\mailhog\` or add it to your system PATH

### Option 2: **Go install (if using Go)**

```bash
go install github.com/mailhog/MailHog@latest
```

### Option 3: **Docker**

```bash
docker run -d -p 1025:1025 -p 8025:8025 mailhog/mailhog
```

---

## 2. **Run MailHog**

### If you used the binary:

```bash
./mailhog
```

### If you're using Docker, it’s already running with:

* SMTP: `localhost:1025`
* Web UI: [http://localhost:8025](http://localhost:8025)

---

## 3. **Configure your application to use MailHog**

### Use the following SMTP settings:

```yaml
# N1netails example (application.yml)
n1netails:
  email:
    enabled: ${EMAIL_ENABLED:false}

spring:
  mail:
    host: ${EMAIL_HOST:localhost}
    port: ${EMAIL_PORT:1025}
    username: ${EMAIL_USERNAME:host-username}
    password: ${EMAIL_PASSWORD:host-password}
    from: ${EMAIL_SENDER:support@n1netails.com}
```

## 4. **Send a test email**

You can now trigger an email from N1netails — it will be captured by MailHog, not actually sent.

---

## 5. **View the email**

1. Open browser → [http://localhost:8025](http://localhost:8025)
2. You’ll see a simple web UI
3. Click on the email to view its content (HTML/plaintext/headers/etc.)

---

## 6. **Optional: Clean up or script it**

* You can use MailHog’s API to clean the inbox, script testing, etc.
* API Docs: [https://github.com/mailhog/MailHog/blob/master/docs/APIv1.md](https://github.com/mailhog/MailHog/blob/master/docs/APIv1.md)
