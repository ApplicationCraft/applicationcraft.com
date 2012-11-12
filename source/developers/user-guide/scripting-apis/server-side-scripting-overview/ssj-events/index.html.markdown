---
title: "SSJ Events"
active_menu_item: developers
class_name: developers
full_width: true
---


Apps have a set of events that also can be triggered on the server. The following events are available as App events only. There are no Page or Widget events that execute on the server, although you can call server side methods using [callSSJ()](/developers/user-guide/scripting-apis/client-api/app-functions/callservice) .

**Important:** each of the server side events allows you to return a value. If you return false, then the intended action is canceled. This allows the server to intervene and stop an action (such as creating a new instance) if the server decides to.

**Also Important:** if you want to debug your events and you are using Chrome browser, you can use SSJ Debug available in the App menu bar. If you do not use Chrome, you cannot use console.log() or console.dir(). These functions will only work with functions that are called directly from the client using app.callSSJ().

You should instead consider using ssj.logSimple() or ssj.log() to log messages.

