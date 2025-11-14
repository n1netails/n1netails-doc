---
sidebar_position: 4
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

Send a new alert to the N1netails API using a valid `N1ne-Token`.  
[Learn how to create a token →](./n1netails-create-n1ne-token)

---

## 🧾 Request Headers

| Header Name     | Description                     | Required |
|-----------------|---------------------------------|----------|
| `N1ne-Token`    | Your unique alert API token     | ✅ Yes   |
| `Content-Type`  | Must be `application/json`      | ✅ Yes   |

---

## 🧬 Request Body

```json
{
  "title": "Tail Title",
  "description": "Tail Description",
  "details": "Tail details (stack trace/logs here)",
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

### Field Definitions

| Field         | Type              | Description                                                                      |
| ------------- | ----------------- | -------------------------------------------------------------------------------- |
| `title`       | `string`          | Short, human-readable title for the alert                                        |
| `description` | `string`          | One-line summary of the issue                                                    |
| `details`     | `string`          | Stack trace, logs, or additional diagnostic information                          |
| `timestamp`   | `ISO-8601 string` | When the issue was detected (UTC recommended)                                    |
| `level`       | `string`          | Alert severity. Supported values: `INFO`, `SUCCESS`, `WARN`, `ERROR`, `CRITICAL` |
| `type`        | `string`          | Classification/category of the alert (examples below)                            |
| `metadata`    | `object`          | Additional context as key-value pairs (environment, region, host, etc.)          |

---

### 🧱 Supported Alert Types (Examples)

You may use any string value for `type`, but here are common examples:

* `SYSTEM_ALERT`
* `USER_REPORT`
* `SCHEDULED_MAINTENANCE`
* `SECURITY_BREACH`
* `PERFORMANCE_ISSUE`
* `INTEGRATION_FAILURE`
* `DATA_INCONSISTENCY`
* `CONFIGURATION_CHANGE`
* `DEPLOYMENT_EVENT`
* `MONITORING_ALERT`

**Success event examples:**

* `SUCCESSFUL_DEPLOYMENT`
* `USER_ACTION_COMPLETED`
* `AUTOMATION_SUCCESS`
* `DATA_SYNC_SUCCESS`
* `BACKUP_COMPLETED`
* `HEALTH_CHECK_PASSED`
* `LOGIN_SUCCESS`
* `PASSWORD_RESET_SUCCESS`
* `SYSTEM_RECOVERY`
* `SLA_MET`

---

## ✅ Example `curl` Request
if you have n1netails running on your localhost you can replace `https://app.n1netails.com/ninetails/alert` with your local instance useually located at `http://localhost:9901/ninetails/alert`

```bash
curl -X POST https://app.n1netails.com/ninetails/alert \
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
