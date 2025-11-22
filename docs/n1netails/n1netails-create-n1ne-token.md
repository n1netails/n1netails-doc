---
sidebar_position: 3
title: Create N1ne Token
description: Learn how to create and configure a N1ne token used to send alerts to N1netails.
---

# Create N1netails N1ne Token

N1ne tokens are used to send Tail Alerts to the N1netails service. They can also be configured to deliver notifications to various platforms—including Email, Microsoft Teams, Slack, Discord, and Telegram.

---

## 🔐 How to Create Your N1ne Token

1. Log in to the **N1netails UI**.
2. Click the settings icon ⚙️ **gear icon** in the top-right corner.
4. Go to **N1ne Token Manager** → **'+ Create Token'**.
5. Fill in:
   - **Token Name**
   - **Organization** (default: `n1netails`)
   - **Expiration Date** (optional)
6. Generate the token and **save the token value immediately**—it will not be shown again.

---

## ⚙️ Configure Your N1ne Token for Notifications

> **Hint:**  
> Even if a token is configured to send notifications to multiple platforms, your **Preferred Notification Methods** (found below the **Active Tokens** section) will override these settings.
> Be sure to select your perferred notification methods.

After creating your token, click **Manage** next to the token you want to configure in the **Active Tokens** section. This opens the **Notification Manager**, where you can configure alert delivery across different communication platforms.

### Supported Platforms

#### **Email**
- Turn on **Email** in the *Enabled notifications for* section.
- Add one or more email addresses.

#### **Microsoft Teams**
- Turn on **Microsoft Teams**.
- Add your Teams webhook URLs.  
  ➤ [How to set up a Microsoft Teams webhook](../n1netails-teams-webhook-client/create-webhook)

#### **Slack**
- Turn on **Slack**.
- Add your Slack Bot token and the channel name (channel names must include the hashtag, e.g., `#prototype`).  
  ➤ [How to create a Slack Bot](../n1netails-slack-client/create-bot)

#### **Discord**
- Turn on **Discord**.
- Add your Discord webhook URLs.  
  ➤ [How to create a Discord webhook](../n1netails-discord-webhook-client/create-webhook)

#### **Telegram**
- Turn on **Telegram**.
- Add your Telegram Bot token and chat ID.  
  ➤ [How to create a Telegram Bot](../n1netails-telegram-client/create-bot)

---

## 💾 Save Your Configuration

When you're done updating notification settings, click **Save Configurations** to apply your changes.

---
