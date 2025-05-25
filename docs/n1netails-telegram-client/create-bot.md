---
sidebar_position: 1
title: Create Telegram Bot for N1netails Notifications
description: Follow this guide to create a Telegram bot and obtain a bot token for N1netails, enabling real-time alert notifications via Telegram.
---

# Create Telegram bot

## How to set up telegram

Telegram is an application you can download on your smartphone. You can download Telegram here
https://telegram.org/

** Note: Telegram needs to be set up on your smartphone before you can use it on your desktop. **

## How to create a telegram bot

To send messages using the N1ne Tails Telegram Client, you need to create a Telegram bot and retrieve its **bot token**. Follow these steps:

#### 1. Start a chat with [@BotFather](https://t.me/BotFather)

[@BotFather](https://t.me/BotFather) is the official Telegram bot for creating and managing other bots.

#### 2. Create a new bot

Send the following command to BotFather:

```
/newbot
```

You will be prompted to:

* **Name your bot** (this can be anything, like `N1neTailsBot`)
* **Choose a username** (this must end with `bot`, e.g. `n1netails_alertbot`)

#### 3. Get your bot token

After creating your bot, BotFather will send you an HTTP API token that looks like this:

```
123456789:ABCdefGhIJKlmNoPQRstuVWXyz
```

> 📌 **Important:** Keep this token secure. Anyone with access can control your bot.

#### 4. Add the bot to a chat or group

* Create or open an existing Telegram **group chat**.
* Add your bot to the group like you would any other user.
* Ensure the bot has permission to **send messages** in the group.

#### 5. Get the chat ID

To send messages to a group or individual chat, you’ll need the chat ID. Here are two common methods:

**Option A: Use a third-party bot like [@getidsbot](https://t.me/getidsbot)**

* Add `@getidsbot` to your group or start a direct chat.
* It will reply with the chat ID.

**Option B: Use the Telegram Bot API**
Send a request to the `getUpdates` endpoint using your bot token:

```bash
curl https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates
```

Look for `"chat":{"id":...}` in the response.

---

You can now use the **bot token** and **chat ID** in your Java code to send alerts with the `n1netails-telegram-client`.

---


Resources: 
- https://core.telegram.org/
- https://core.telegram.org/methods
