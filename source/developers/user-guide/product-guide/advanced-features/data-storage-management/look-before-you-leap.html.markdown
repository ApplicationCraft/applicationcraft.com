---
title: "Planning a Larger Application"
active_menu_item: developers
class_name: developers
full_width: true
---


IMPORTANT

**WE ARE DISCONTINUING FUTURE ENHANCEMENTS  FOR NATIVE DATA STORAGE. INSTEAD, WE HAVE INTRODUCED FAR SUPERIOR DATA STORAGE USING ANY CONNECTED DATABASE. See: [Server Side Data Storage](/developers/user-guide/product-guide/data-storage/server-side-data-storage/)**

**WE STRONGLY RECOMMEND THAT YOU DO NOT USE THESE FUNCTIONS. FUNCTIONALITY IS BEING RETAINED FOR A WHILE IN ORDER NOT TO DISRUPT EXISTING APPLICATIONS.**

Although Application Craft avoids many of the formalities of application design, you should still think ahead and plan as much of your complete application before you start. In fact, Application Craft is a great way of doing this, starting of with UI design which can then be refined until you are ready to make it work for real.

The first thing to think about is how your overall application can be broken down into several smaller Apps. A simple CRM application is a familiar application to use as an example. Let’s say you have Companies, Contacts, Leads, Opportunities and Sales. In addition you might have lots of reporting and dashboards. You should think about having a single App for each of the main entities - Companies, Contacts, Leads, Opportunities and Sales. Each App is then responsible for cleanly managing its own data set.

Application Craft lets you join all of these Apps together or even to embed one into another.

You can also use the so-called [CRUD functions](/developers/user-guide/product-guide/advanced-features/data-storage-management/crud-create-read-update-dele) [instanceCreate()](/developers/user-guide/scripting-apis/client-api/instance-data-functions/instancecreate) , [instanceUpdate()](/developers/user-guide/scripting-apis/client-api/instance-data-functions/instancesave) and [instanceDelete()](/developers/user-guide/scripting-apis/client-api/instance-data-functions/instancedelete) to manage data in a different App to the one you are working on.

## See Also

 - [CRUD Permissions](/developers/user-guide/product-guide/advanced-features/data-storage-management/crud-in-detail/using-ac-app-storage/crud-permissions)

