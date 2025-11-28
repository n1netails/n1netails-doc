---
sidebar_position: 2
title: Create Teams Webhook for N1netails Alerts
description: Step-by-step guide to create a Teams webhook for integrating with N1netails, enabling real-time alert notifications in your Teams channel.
---

# Create Webhook

## Requirements
In order to use this webhook client you will need to have a Microsoft 365 Business account.

### Create teams webhook

1. In Microsoft Teams, choose a channel and from the options menu (...) select **Workflows**.
2. Search for **Send webhook alerts to a channel** and select it.
3. Provide a name for your new webhook select **Next**.
4. In the details section select the **Microsoft Teams Team** and the **Microsoft Teams Channel** you want the webhook to be linked to select **Add Workflow**.
4. The dialog will present a unique URL that maps to the channel. Copy this **webhook URL**.
5. Your webhook is now ready to receive messages.

### Editing a Webhook in Power Automate
You can confirm your workflow is set up correctly by going to the channel where the workflow is installed.

1. Click on **More Options** it will be three dots '...' next to the channel when you hover over it.
2. Select **Workflows**.
3. Click **Manage** in the bottom-left corner.
4. Hover over your target webhook and select **More commands → Edit**.

If configured correctly, it should look like the image below:

<div align="center">
  <img src="/img/communication-messages/edit-webhook-workflow-setup.png" alt="N1netails" width="500"/>
</div>