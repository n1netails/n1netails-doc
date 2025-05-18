---
sidebar_position: 3
---

# Add N1netails Client

## Install
Install the discord webhook client by adding the following dependency:

### Maven
```xml
<dependency>
    <groupId>com.n1netails</groupId>
    <artifactId>n1netails-discord-webhook-client</artifactId>
    <version>0.1.0</version>
</dependency>
```

### Gradle
```groovy
dependencies {
    implementation 'com.n1netails:n1netails-discord-webhook-client:0.1.0'
}
```

## Configure
Here is how you can configure the project for different frameworks

### Spring Boot
Add the following beans to your spring boot application:

```java
import com.n1netails.n1netails.discord.api.DiscordWebhookClient;
import com.n1netails.n1netails.discord.internal.DiscordWebhookClientImpl;
import com.n1netails.n1netails.discord.service.WebhookService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DiscordWebhookConfig {

    @Bean
    public WebhookService webhookService() {
        return new WebhookService();
    }

    @Bean
    public DiscordWebhookClient discordWebhookClient(WebhookService service) {
        return new DiscordWebhookClientImpl(service);
    }
}
```

### Java

```java
import com.n1netails.n1netails.discord.internal.DiscordWebhookClientImpl;
import com.n1netails.n1netails.discord.service.WebhookService;

WebhookService service = new WebhookService();
DiscordWebhookClient client = new DiscordWebhookClientImpl(service);
```

## Use
```java
import com.n1netails.n1netails.discord.api.DiscordWebhookClient;
import com.n1netails.n1netails.discord.internal.DiscordWebhookClientImpl;
import com.n1netails.n1netails.discord.service.WebhookService;

public class ExampleService {
    private final DiscordWebhookClient webhookClient;

    public ExampleService() {
        this.webhookClient = new DiscordWebhookClientImpl(new WebhookService());
    }

    public void webhookExample(String content) {
        WebhookMessage message = new WebhookMessage(content);
        // replace with your discord webhook url
        String webhookUrl = "https://discord.com/api/webhooks/xxx/yyy";
        webhookClient.sendMessage(webhookUrl, message);
    }
}
```

## Customize Webhook Message
Discord webhook resource:
https://discord.com/developers/docs/resources/webhook

Send customized webhooks by utilizing the n1netails Pojo's 
- `WebhookMessage`
- `Embed`
  - `Footer`
  - List of `EmbedField`

Example:

```java
import com.n1netails.n1netails.discord.DiscordColor;
import com.n1netails.n1netails.discord.api.DiscordWebhookClient;
import com.n1netails.n1netails.discord.model.Embed;
import com.n1netails.n1netails.discord.model.WebhookMessage;

public class ExampleService {
  private final DiscordWebhookClient webhookClient;

  public ExampleService() {
    this.webhookClient = new DiscordWebhookClientImpl(new WebhookService());
  }

  public void webhookExample(String content) {
    Embed embed = new Embed();
    embed.setTitle("Build Notification");
    embed.setDescription("The build has succeeded ✅");
    embed.setColor(DiscordColor.BLUE.getValue());

    WebhookMessage msg = new WebhookMessage();
    msg.setUsername("CI Bot");
    msg.setContent("Deployment update");
    msg.setEmbeds(List.of(embed));

    // replace with your discord webhook url
    String webhookUrl = "https://discord.com/api/webhooks/xxx/yyy";
    webhookClient.sendMessage(webhookUrl, msg);
  }
}
```
