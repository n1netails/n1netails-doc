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
    <version>0.2.0</version>
</dependency>
```

### Gradle
```groovy
dependencies {
    implementation 'com.n1netails:n1netails-telegram-client:0.2.0'
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
import com.n1netails.n1netails.telegram.model.Button;
import com.n1netails.n1netails.telegram.model.InlineKeyboardMarkup;
import com.n1netails.n1netails.telegram.model.TelegramMessage;
import com.n1netails.n1netails.telegram.service.BotService;

import java.util.Collections;

public class ExampleService {
    private final TelegramClient telegramClient;

    public ExampleService() {
        this.telegramClient = new TelegramClientImpl(new BotService());
    }

    public void telegramNotificationExample(String content) {
        Button button = new Button("Visit N1netails", "https://n1netails.com");
        InlineKeyboardMarkup keyboardMarkup = new InlineKeyboardMarkup(Collections.singletonList(Collections.singletonList(button)));
        TelegramMessage telegramMessage = new TelegramMessage("N1netails Telegram Works!", false, keyboardMarkup);
        // replace with your telegram chat id
        String chatId = "your-telegram-chat-id";
        // replace with your telegram bot token
        String botToken = "your-telegram-bot-token";
        telegramClient.sendMessage(chatId, botToken, telegramMessage);
    }
}
```

#### Example message output
<div align="center">
  <img src="/img/communication-messages/telegram-message.png" alt="N1netails telegram message simple" width="500"/>
</div>
