---
old_url: notification_server.htm
title: "Notifications"
active_menu_item: developers
class_name: developers
full_width: true
---


One of the common Workflow requirements is to send notifications. Application Craft supports timed notifications that go out at either an absolute or a specific date and time. You can also use the notify() function to schedule follow up notifications (reminders).

The [cancelNotifications()](/developers/documentation/scripting-apis/client-api/workflow-functions/cancelnotificationsforinstance) function cancels scheduled notifications.

A Notifier (explained in the [Notifier](/developers/documentation/product-guide/the-console/console-tabs/notifiers) Console section) identifies a server, such as an SMTP server, that can send notifications. Currently, we only offer SMTP but we are adding support for SMS. If you have a requirement for a special Notifier, please email us at [support@applicationcraft.com](mailto:support@applicationcraft.com)

The [notify()](/developers/documentation/scripting-apis/client-api/workflow-functions/notify) workflow function does all the heavy lifting. One of the parameters identifies the 'Notifier' object you wish to use.

