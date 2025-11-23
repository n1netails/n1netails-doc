---
sidebar_position: 2
---

# Add N1netails Client

## Install
Install the telegram client by adding the following dependency:

### Maven
```xml
<dependency>
    <groupId>com.n1netails</groupId>
    <artifactId>n1netails-telegram-client</artifactId>
    <version>0.1.1</version>
</dependency>
```

### Gradle
```groovy
dependencies {
    implementation 'com.n1netails:n1netails-telegram-client:0.1.1'
}
```

## Configure
Here is how you can configure the project for different frameworks

### Spring Boot
Add the following beans to your spring boot application:

```java
import com.n1netails.n1netails.telegram.api.TelegramClient;
import com.n1netails.n1netails.telegram.internal.TelegramClientImpl;
import com.n1netails.n1netails.telegram.service.BotService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class TelegramConfig {

    @Bean
    public BotService botService() { 
        return new BotService(); 
    }

    @Bean
    public TelegramClient telegramClient(BotService service) {
        return new TelegramClientImpl(service);
    }
}
```

### Java

```java
import com.n1netails.n1netails.telegram.internal.TelegramClientImpl;
import com.n1netails.n1netails.telegram.service.BotService;

BotService service = new BotService();
TelegramClient client = new TelegramClientImpl(service);
```

## Use
```java
import com.n1netails.n1netails.telegram.api.TelegramClient;
import com.n1netails.n1netails.telegram.internal.TelegramClientImpl;
import com.n1netails.n1netails.telegram.service.BotService;

public class ExampleService {
    private final TelegramClient telegramClient;

    public ExampleService() {
        this.telegramClient = new TelegramClientImpl(new BotService());
    }

    public void telegramNotificationExample(String content) {
        TelegramMessage telegramMessage = new TelegramMessage("N1netails Telegram Works!", false);
        // replace with your telegram chat id
        String chatId = "your-telegram-chat-id";
        // replace with your telegram bot token
        String botToken = "your-telegram-bot-token";
        telegramClient.sendMessage(chatId, botToken, telegramMessage);
    }
}
```
