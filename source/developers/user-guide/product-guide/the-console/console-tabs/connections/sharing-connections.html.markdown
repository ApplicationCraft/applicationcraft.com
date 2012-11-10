---
title: "Sharing Connections"
active_menu_item: developers
class_name: developers
full_width: true
---


As with most other centrally managed Application Craft objects, a Connection is private when created and so, by default, it can only be used by Queries created by the user who created and owns the Connection.

![Connections](/img/docs/connections.zoom47.png)

However, in many cases an Administrator will create a Connection that should be accessible by other AC Users for their Queries and [Database Handling with SSJ](../../../../scripting-apis/server-side-scripting-overview/database-handling-with-ssj) . In this case, with the Connection selected in the list on the left side, expand the Sharing section on the right and then assign it to Users and Groups. You can then select the appropriate permissions for those Users and Groups.

If you want to make a shared Connection Public, you can drag it into a Public folder. Note that being in the Public folder does not make it accessible to all users, it merely makes shared Connections visible within the context of a Public folder structure. If you want a Connection to be available to everyone, use Sharing to grant permissions to the Group 'Everyone' before dragging it into the Public folder.

**See Also** :

 - [Sharing](../../sharing)

Related Video:

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/tQpe5tx6qcc?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Setting up a Connection [2:20]
