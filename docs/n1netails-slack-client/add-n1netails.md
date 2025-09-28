---
sidebar_position: 2
---

# Add N1netails Client

## Install
Install the slack client by adding the following dependency:

### Maven
```xml
<dependency>
    <groupId>com.n1netails</groupId>
    <artifactId>n1netails-slack-client</artifactId>
    <version>0.1.0</version>
</dependency>
```

### Gradle
```groovy
dependencies {
    implementation 'com.n1netails:n1netails-slack-client:0.1.0'
}
```

## Usage
Here's how to use the client to send a message:

```java
import com.n1netails.n1netails.slack.api.SlackClient;
import com.n1netails.n1netails.slack.internal.SlackClientImpl;
import com.n1netails.n1netails.slack.model.SlackMessage;
import com.n1netails.n1netails.slack.service.BotService;

public class Example {
    public static void main(String[] args) {
        // Your bot token
        String token = "xoxb-your-bot-token";

        // The channel you want to send the message to (e.g., "#general")
        String channel = "#prototype"; // or "#channel-name"

        // Create the bot service
        BotService botService = new BotService(token);

        // Create the Slack client
        SlackClient slackClient = new SlackClientImpl(botService);

        // Create the message
        SlackMessage message = new SlackMessage();
        message.setChannel(channel);
        message.setText("Hello from the N1ne Tails Slack Client!");

        try {
            // Send the message
            slackClient.sendMessage(message);
            System.out.println("Message sent successfully!");
        } catch (Exception e) {
            System.err.println("Error sending message: " + e.getMessage());
        }
    }
}
```