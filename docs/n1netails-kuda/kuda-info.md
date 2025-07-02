---
sidebar_position: 1
title: Kuda Info
description: Follow this guide to set up N1netails Kuda in your Java application.
---

# Kuda
Integration library that acts as a smart link between your application and the n1netails platform quiet, powerful, and built to vanish into your stack like a spirit fox.

N1netails Kuda is a lightweight, plug-and-play Java library designed to help developers send structured alerts from their applications directly to the N1netails Alerting Platform. Whether it’s uncaught exceptions, manual error reports, or custom warning signals, Kuda makes it easy to generate and transmit these alerts using a simple, extensible API.

With just a few lines of code, your application can:
- Automatically capture uncaught exceptions and forward them to N1netails.
- Send custom alerts tagged with severity, environment, and metadata.
- Integrate seamlessly with Spring Boot or run standalone in any Java environment.
- Improve observability without the need for complex infrastructure or logging setups.

By leveraging Kuda, developers gain instant visibility into application issues, helping teams respond faster and maintain system reliability.

## How to set up kuda
Kuda can act as a simple logger but its main purpose is to send tail data over to `n1netails-api`. More details on setting 
up and using Kuda will be reveled later.

### Requirements
Kuda should be setup alongside the N1netails core system but it can work without it as simple logging service for your application.
Learn how to set up the core system here: [N1netails](https://github.com/n1netails/n1netails) or set up N1netails with the docker quickstart [Docker Quickstart](../n1netails/n1netails-docker-quickstart.md)

⚠️ Note: You can also use Kuda with your own custom service just make sure you have the following endpoint which will receive the tail alerts `/ninetails/alert` and a matching TailRequest POJO in your service.

Example Tail Request POJO:
```java
public class KudaTailRequest {
    // tail title
    private String title;
    // add description about the tail alert
    private String description;
    // place the exception stack trace in the `details` or any extra information that will help with identifying the issue or alert
    private String details;
    // tail timestamp
    private Instant timestamp;
    // tail level (ex. INFO, SUCCESS, WARN, ERROR, CRITICAL)
    private String level;
    // tail type (ex. SYSTEM_ALERT)
    private String type;
    // tail metadata (add information about the application in here)
    private Map<String, String> metadata;
}
```

⚠️ Note: If you want to customize the Api path you can set the path using the `TailConfig`. [Read more in Configure.](./install-and-configure.md#tailconfig)
