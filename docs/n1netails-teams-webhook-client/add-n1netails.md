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
    <version>0.2.0</version>
</dependency>
```

### Gradle
```groovy
dependencies {
    implementation 'com.n1netails-teams-webhook-client:0.2.0'
}
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

#### Example simple message output
<div align="center">
  <img src="/img/communication-messages/teams-message-simple.png" alt="N1netails teams webhook message simple" width="500"/>
</div>

### Message Card
The message card is a more flexible and customizable way to send messages.
```java
import com.n1netails.n1netails.teams.api.TeamsWebhookClient;
import com.n1netails.n1netails.teams.internal.TeamsWebhookClientImpl;
import com.n1netails.n1netails.teams.model.Fact;
import com.n1netails.n1netails.teams.model.MessageCard;
import com.n1netails.n1netails.teams.model.Section;
import com.n1netails.n1netails.teams.service.WebhookService;

import java.util.ArrayList;
import java.util.List;

public class Example {
    public static void main(String[] args) {
        try {
            WebhookService webhookService = new WebhookService();
            TeamsWebhookClient client = new TeamsWebhookClientImpl(webhookService);

            MessageCard messageCard = new MessageCard();
            messageCard.setTitle("Message Card Title");
            messageCard.setSummary("Message Card Summary");

            List<Section> sections = new ArrayList<>();
            Section section = new Section();
            section.setTitle("Section Title");

            List<Fact> facts = new ArrayList<>();
            facts.add(new Fact("Fact 1", "Fact 1 Value"));
            facts.add(new Fact("Fact 2", "Fact 2 Value"));
            section.setFacts(facts);
            sections.add(section);

            messageCard.setSections(sections);

            client.sendMessage("YOUR_WEBHOOK_URL", messageCard);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

#### Example message block output
<div align="center">
  <img src="/img/communication-messages/teams-message-block.png" alt="N1netails teams webhook message block" width="500"/>
</div>
