---
sidebar_position: 3
title: Post Tail Alert to N1netails
description: Follow this guide to learn how to send tail alerts to the N1netails API
---

# Post Tail Alerts to N1netails

In the context of **N1netails**, a **tail alert** refers to a lightweight, structured notification triggered by a client system (such as a service, application, or script) to report an event, issue, or anomaly. These alerts are designed to be easy to emit, fast to process, and rich in metadata — making them ideal for real-time monitoring, embedded systems, or edge environments.

## 🦊 Why “Tail”?

The term **"tail"** in `n1netails` plays on two ideas:

1. **Log tailing** – Observing the last lines of logs (like `tail -f`) to detect anomalies in real-time.
2. **Fox tails (kitsune/ninetails)** – Thematically tied to the project’s branding, each "tail" represents a meaningful signal from your system.

> A **tail alert** is essentially your system saying:
>
> _"Something noteworthy just happened — here's what it is, and here’s the relevant context."_

---

## 📡 API Endpoint

### `POST /ninetails/alert`

Sends a new alert to the N1netails API using a valid `N1ne-Token`.

### 🔐 How to Get Your N1ne Token

1. Log in to the N1netails UI.
2. Click your profile icon in the top-right corner.
3. Select **Account Settings**.
4. Navigate to **N1ne Token Manager** → **Create New Token**.
5. Generate token by setting Token Name, Organization (default n1netails), Expriration Date (Optional).

### 🧾 Request Headers

| Header Name   | Description                  | Required |
|---------------|------------------------------|----------|
| `N1ne-Token`  | Your unique alert API token  | ✅ Yes   |
| `Content-Type`| Must be `application/json`   | ✅ Yes   |

### 🧬 Request Body

```json
{
  "title": "Tail Title",
  "description": "Tail Description",
  "details": "Tail details (place stack trace/logs here)",
  "timestamp": "2025-07-02T20:00:00Z",
  "level": "ERROR",
  "type": "SYSTEM_ALERT",
  "metadata": {
    "region": "us-east-1",
    "cluster": "db-primary",
    "environment": "production"
  }
}
````

| Field         | Type              | Description                                                     |
| ------------- | ----------------- | --------------------------------------------------------------- |
| `title`       | `string`          | Short title for the alert                                       |
| `description` | `string`          | One-line summary of the issue                                   |
| `details`     | `string`          | Throwable stack trace or log data                               |
| `timestamp`   | `ISO-8601 string` | When the issue was detected (UTC recommended)                   |
| `level`       | `string`          | Alert severity (`INFO`, `SUCCESS`, `WARN`, `ERROR`, `CRITICAL`) |
| `type`        | `string`          | Custom type/category for this alert                             |
| `metadata`    | `object` (map)    | Additional key-value context for investigation                  |

---

## ✅ Example `curl` Request

```bash
curl -X POST http://localhost:9901/ninetails/alert \
  -H "Content-Type: application/json" \
  -H "N1ne-Token: YOUR_TOKEN_HERE" \
  -d '{
    "title": "Database Alert",
    "description": "High latency observed",
    "details": "The read queries in the US-East cluster have been above 2s for over 5 minutes.",
    "timestamp": "2025-07-02T20:00:00Z",
    "level": "ERROR",
    "type": "SYSTEM_ALERT",
    "metadata": {
      "region": "us-east-1",
      "cluster": "db-primary",
      "environment": "production"
    }
  }'
```

> Replace `YOUR_TOKEN_HERE` with your actual token.

---

## 🧠 Notes

* This endpoint returns **204 No Content** on success.
* Unauthorized requests return **401 Unauthorized** and are logged internally.
* Ensure the timestamp uses the **UTC ISO-8601** format.
