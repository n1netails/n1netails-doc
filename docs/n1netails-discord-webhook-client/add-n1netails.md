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
    <version>0.2.0</version>
</dependency>
```

### Gradle
```groovy
dependencies {
    implementation 'com.n1netails:n1netails-discord-webhook-client:0.2.0'
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

#### Example message output
<div align="center">
  <img src="/img/communication-messages/discord-message-simple.png" alt="N1netails discord message simple" width="500"/>
</div>

## Customize Webhook Message
Discord webhook resource:
https://discord.com/developers/docs/resources/webhook

Send customized webhooks by utilizing the n1netails Pojo's 

- `WebhookMessage`
  - `content`
  - `username`
  - `avatar_url`
  - `tts`
  - `embeds`
- `Embed`
  - `title`
  - `description`
  - `url`
  - `color`
  - `author`
    - `name`
    - `url`
    - `icon_url`
  - `fields`
    - `name`
    - `value`
    - `inline`
  - `footer`
    - `text`
    - `icon_url`
  - `image`
    - `url`
  - `thumbnail`
    - `url`
  - `timestamp`

Example:

```java
import com.n1netails.n1netails.discord.DiscordColor;
import com.n1netails.n1netails.discord.api.DiscordWebhookClient;
import com.n1netails.n1netails.discord.model.Embed;
import com.n1netails.n1netails.discord.model.WebhookMessage;
import com.n1netails.n1netails.discord.model.WebhookMessageBuilder;
import com.n1netails.n1netails.discord.model.EmbedBuilder;
import java.util.Collections;
import java.time.Instant;

public class ExampleService {
  private final DiscordWebhookClient webhookClient;

  public ExampleService() {
    this.webhookClient = new DiscordWebhookClientImpl(new WebhookService());
  }

  public void webhookExample(String content) {
    Embed.Author author = new Embed.Author();
    author.setName("N1ne Tails");
    author.setUrl("https://n1netails.com/");
    author.setIcon_url("https://raw.githubusercontent.com/n1netails/n1netails/refs/heads/main/n1netails_icon_transparent.png");

    Embed.EmbedField field = new Embed.EmbedField();
    field.setName("Environment");
    field.setValue("Development");
    field.setInline(true);

    Embed.Footer footer = new Embed.Footer();
    footer.setText("N1ne Tails @ 2024");
    footer.setIcon_url("https://raw.githubusercontent.com/n1netails/n1netails/refs/heads/main/n1netails_icon_transparent.png");

    Embed.Image image = new Embed.Image();
    image.setUrl("https://raw.githubusercontent.com/n1netails/n1netails/refs/heads/main/n1netails_icon_transparent.png");

    Embed.Thumbnail thumbnail = new Embed.Thumbnail();
    thumbnail.setUrl("https://raw.githubusercontent.com/n1netails/n1netails/refs/heads/main/n1netails_icon_transparent.png");

    Embed embed = new EmbedBuilder()
        .withTitle("Build Notification")
        .withDescription("The build has succeeded ✅")
        .withUrl("https://n1netails.com/")
        .withColor(DiscordColor.BLUE.getValue())
        .withAuthor(author)
        .withFields(Collections.singletonList(field))
        .withFooter(footer)
        .withImage(image)
        .withThumbnail(thumbnail)
        .withTimestamp(Instant.now().toString())
        .build();

    WebhookMessage msg = new WebhookMessageBuilder()
        .withUsername("CI Bot")
        .withContent("Deployment update")
        .withEmbeds(Collections.singletonList(embed))
        .build();

    // replace with your discord webhook url
    String webhookUrl = "https://discord.com/api/webhooks/xxx/yyy";
    webhookClient.sendMessage(webhookUrl, msg);
  }
}
```

#### Example customized message output
<div align="center">
  <img src="/img/communication-messages/discord-message-enhanced.png" alt="N1netails discord message customized" width="500"/>
</div>
