---
title: "Relational Apps & Instance Linking"
active_menu_item: developers
class_name: developers
full_width: true
---


IMPORTANT

**WE ARE DISCONTINUING FUTURE ENHANCEMENTS  FOR NATIVE DATA STORAGE. INSTEAD, WE HAVE INTRODUCED FAR SUPERIOR DATA STORAGE USING ANY CONNECTED DATABASE. See: [Server Side Data Storage](/developers/user-guide/product-guide/data-storage/server-side-data-storage/)**

**WE STRONGLY RECOMMEND THAT YOU DO NOT USE THESE FUNCTIONS. FUNCTIONALITY IS BEING RETAINED FOR A WHILE IN ORDER NOT TO DISRUPT EXISTING APPLICATIONS.**

Once you have built your different Apps for the various entities in your overall application, you will often need to associate Instances of one App with Instances of other Apps. For example, if you have created an Account App and a Contacts App, you will want to display lists of Contacts associated with an Account.

Relationships are handled automatically using [CRUD](/developers/user-guide/product-guide/advanced-features/data-storage-management/crud-in-detail/) functions and you can manually create and break them using the [instanceSetRelationship()](/developers/user-guide/scripting-apis/client-api/instance-data-functions/instancesetrelationship) function.

Application Craft handles this with App Instance linking, enabling you to set the Application Relationship in the [App Properties](/developers/user-guide/product-guide/widget-properties-events/app-properties) . It allows a user to set up all sorts of relationships (one-to-one, one-to-many and many-to-many) through the App itself. Each App allows any number of relationships to be defined.

## See Also

 - [Relationships in Detail](/developers/user-guide/product-guide/advanced-features/data-storage-management/instance-relationships-in-detail/)

 - [Application Relationship Property](/developers/user-guide/product-guide/widget-properties-events/app-properties#advanced)

 - [setInstanceRelationship()](/developers/user-guide/scripting-apis/client-api/instance-data-functions/instancesetrelationship)

 - [CRUD Permissions](/developers/user-guide/product-guide/advanced-features/data-storage-management/crud-in-detail/using-ac-app-storage/crud-permissions)

