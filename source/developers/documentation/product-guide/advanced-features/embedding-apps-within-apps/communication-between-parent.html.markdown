---
old_url: communication_between_parent__.htm
title: "Communication between Parent / Child Apps"
active_menu_item: developers
class_name: developers
full_width: true
---


It is usually important that Parent and Child Apps can communicate. Although you could use the Global Data Store to store certain values, a far better way is to communicate using the other App's app object.

This approach allows you full access to the other App's Widgets and methods. Please refer to the app. [parentApp()](/developers/documentation/scripting-apis/client-api/app-functions/parentapp) and app. [childApp()](/developers/documentation/scripting-apis/client-api/app-functions/childapp) functions for examples.

