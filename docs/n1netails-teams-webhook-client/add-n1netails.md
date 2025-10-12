---
sidebar_position: 3
---

# Add N1netails Client

## Install
Install the teams webhook client by adding the following dependency:
```xml
<dependency>
    <groupId>com.n1netails</groupId>
    <artifactId>n1netails-teams-webhook-client</artifactId>
    <version>0.1.0</version>
</dependency>
```

## Usage
To send a message to your Teams channel, use the `TeamsWebhookClient`.

```java
import com.n1netails.n1netails.teams.api.TeamsWebhookClient;
import com.n1netails.n1netails.teams.internal.TeamsWebhookClientImpl;
import com.n1netails.n1netails.teams.model.WebhookMessage;
import com.n1netails.n1netails.teams.service.WebhookService;

public class Example {
    public static void main(String[] args) {
        try {
            WebhookService webhookService = new WebhookService();
            TeamsWebhookClient client = new TeamsWebhookClientImpl(webhookService);

            WebhookMessage message = new WebhookMessage();
            message.setContent("Hello, from n1netails-teams-webhook-client!");

            client.sendMessage("YOUR_WEBHOOK_URL", message);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```