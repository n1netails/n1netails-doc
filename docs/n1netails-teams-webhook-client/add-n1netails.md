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
    <version>0.3.0</version>
</dependency>
```

Gradle (Groovy)
```groovy
implementation 'com.n1netails:n1netails-teams-webhook-client:0.3.0'
```

## Usage
To send a message to your Teams channel, use the `TeamsWebhookClient`.

### Simple Message

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
import com.n1netails.n1netails.teams.model.*;
import com.n1netails.n1netails.teams.service.WebhookService;

import java.util.ArrayList;
import java.util.Arrays;
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
            section.setImageUrl("https://raw.githubusercontent.com/n1netails/n1netails/refs/heads/main/n1netails_icon_transparent.png");
            sections.add(section);

            messageCard.setSections(sections);

            List<Action> actions = new ArrayList<>();
            actions.add(new Action("View Website", "https://github.com/n1netails/n1netails-teams-webhook-client"));
            messageCard.setActions(actions);

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

### Image Message

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
            message.setImageUrl("https://raw.githubusercontent.com/n1netails/n1netails/refs/heads/main/n1netails_icon_transparent.png");

            List<Action> actions = new ArrayList<>();
            actions.add(new Action("Visit Website", "https://github.com/n1netails/n1netails-teams-webhook-client"));
            message.setActions(actions);

            client.sendMessage("YOUR_WEBHOOK_URL", message);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

#### Example image message output
<div align="center">
  <img src="/img/communication-messages/teams-message-image.png" alt="N1netails teams webhook message image" width="500"/>
</div>

### GIF Message

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
            // Gifs are also supported
            message.setImageUrl("https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmEwajlsZjBqb2d2Zmk1bmJoYTEyN2Q0czRmOWtmYjd4YWVzMHoxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xsE65jaPsUKUo/giphy.gif");

            List<Action> actions = new ArrayList<>();
            actions.add(new Action("Visit Website", "https://github.com/n1netails/n1netails-teams-webhook-client"));
            message.setActions(actions);

            client.sendMessage("YOUR_WEBHOOK_URL", message);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

#### Example gif message output
<div align="center">
  <img src="/img/communication-messages/teams-message-gif.png" alt="N1netails teams webhook message gif" width="500"/>
</div>