---
sidebar_position: 1
title: Create Slack Bot for N1netails Notifications
description: Follow this guide to create a Slack bot and obtain a bot token for N1netails, enabling real-time alert notifications via Slack.
---

# Create Slack bot

## How to set up Slack

#### 1. Create a Slack App:
    *   Go to [https://api.slack.com/apps](https://api.slack.com/apps) and click "Create New App".
    *   Choose "From scratch", give your app a name, and select the workspace where you'll use it.
#### 2. Add Permissions:
    *   In your app's settings, go to "OAuth & Permissions".
    *   Scroll down to the "Scopes" section. Under "Bot Token Scopes", click "Add an OAuth Scope".
    *   Add the `chat:write` scope. This allows your app to send messages to channels it's a member of.
#### 3. Install the App:
    *   At the top of the "OAuth & Permissions" page, click "Install App to Workspace".
    *   Follow the prompts to authorize the app.
#### 4. Get Your Bot Token:
    *   After installation, you'll see a "Bot User OAuth Token". It will start with `xoxb-`. Copy this token.
#### 5. Add the App to a Channel:
    *   In your Slack workspace, go to the channel where you want to send messages.
    *   Type `/invite @your-app-name` (replace `your-app-name` with the name of your app) and send the message.
