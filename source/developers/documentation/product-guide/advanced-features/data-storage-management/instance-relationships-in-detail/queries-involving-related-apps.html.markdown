---
title: "Queries Involving Related Apps"
active_menu_item: developers
class_name: developers
full_width: true
---


IMPORTANT

**WE ARE DISCONTINUING FUTURE ENHANCEMENTS  FOR NATIVE DATA STORAGE. INSTEAD, WE HAVE INTRODUCED FAR SUPERIOR DATA STORAGE USING ANY CONNECTED DATABASE. See: [Server Side Data Storage](/developers/documentation/product-guide/data-storage/server-side-data-storage/)**

**WE STRONGLY RECOMMEND THAT YOU DO NOT USE THESE FUNCTIONS. FUNCTIONALITY IS BEING RETAINED FOR A WHILE IN ORDER NOT TO DISRUPT EXISTING APPLICATIONS.**

Once you have related App Instances, you may want to report on these. In this case, you will want to define a Query that includes one or more related Apps.

Let's say you have created a Relationship called R\_Contacts in your CRUD Companies App. When you are editing the Query, you will see a field  called R\_Contacts. This field contains the Relationship that should be linked with the Instance ID of the CRUD Contacts App. This is done within the JOIN screen when editing your Query.

## Specifying the Apps

Having created a new Query, press the Edit button. On the first screen, you will should press the Apps tab on the left and find the Apps that you want to JOIN (CRUD Companies and CRUD Contacts in our example). Select each of these and then drag across the sub-item in the tree labeled 'Full Data'.

![rel-query-1](/img/docs/rel-query-1.zoom91.png)

## Specifying the JOIN

Now, you should specify the JOIN definition between the Apps. We will map the Relationship field 'R\_Contacts' that is a part of the CRUD Companies App and specify that this be joined on the Instance ID of the Contacts App.

![rel-query-2](/img/docs/rel-query-2.zoom82.png)

## Finishing Off

You can now select which fields you want to expose to the outside world (you can/should apply permissions once the Query is saved) and then on the final screen you can view test output.

You Query is now ready to use by any people you have assigned permissions to.

## See Also

 - [CRUD Permissions](/developers/documentation/product-guide/advanced-features/data-storage-management/crud-in-detail/using-ac-app-storage/crud-permissions)

Related Video:

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/0ZCUI-zNS-o?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Querying Related Apps using JOINs [2:13]

