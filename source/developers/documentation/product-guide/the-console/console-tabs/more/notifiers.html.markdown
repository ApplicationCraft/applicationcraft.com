---
old_url: notifiers.htm
title: "Notifiers"
active_menu_item: developers
class_name: developers
full_width: true
---


A Notifier simply sends out notifications. Currently, the only type of Notifier we offer is an Email notifier. We will be adding new notifier types such as SMS, Message Queue etc.

As a Notifier is like any other Application Craft Console object, you can define as many of them as you want and also assign permissions.

This Tab is only visible to users that have been allowed 'Notifiers' rights. See [Users](/developers/documentation/product-guide/the-console/console-tabs/more/users-groups/users)

Each Notifier can point to an individual server and you configure that servers parameters in the right pane.

Notifiers are used from client API functions. Currently, the [notify()](/developers/documentation/scripting-apis/client-api/workflow-functions/notify) workflow function requires a Notifier to be specified. We are also extending our [sendEmail()](sendemail.htm) function to use Notifiers.

![notifiers](/img/docs/notifiers.zoom63.png)

## Email Notifier

 - Notifier ID - this is the internal unique ID of the notifier. You will need this when referring to it from the [notify()](/developers/documentation/scripting-apis/client-api/workflow-functions/notify) workflow function.
 - Notifier Name - this is the friendly name you assign to the Notifier
 - Host - the URL of the SMTP server. To specify a port, add it after the url, for example smtp.gmail.com:465
 - Security - TLS or SSL security as specified by your SMTP server
 - Login / Password - authentication details on the SMTP server
 - Send Email - Allows you to enter an email address to test your settings


## See Also

 - [Workflow](/developers/documentation/product-guide/advanced-features/workflow/)
 - [Notifications](/developers/documentation/product-guide/account-management/notifications)
