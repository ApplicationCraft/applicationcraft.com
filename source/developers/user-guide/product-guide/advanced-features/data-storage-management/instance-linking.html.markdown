---
title: "Relational Apps & Instance Linking"
active_menu_item: developers
class_name: developers
full_width: true
---


IMPORTANT

## WE ARE DISCONTINUING FUTURE ENHANCEMENTS  FOR NATIVE DATA STORAGE. INSTEAD, WE HAVE INTRODUCED FAR SUPERIOR DATA STORAGE USING ANY CONNECTED DATABASE. See: [Server Side Data Storage](../../../data-storage/server-side-data-storage/index.htm)

## WE STRONGLY RECOMMEND THAT YOU DO NOT USE THESE FUNCTIONS. FUNCTIONALITY IS BEING RETAINED FOR A WHILE IN ORDER NOT TO DISRUPT EXISTING APPLICATIONS.

Once you have built your different Apps for the various entities in your overall application, you will often need to associate Instances of one App with Instances of other Apps. For example, if you have created an Account App and a Contacts App, you will want to display lists of Contacts associated with an Account.

Relationships are handled automatically using [CRUD](crud_in_detail.htm) functions and you can manually create and break them using the [instanceSetRelationship()](../../../scripting-apis/client-api/instance-data-functions/instancesetrelationship.htm) function.

Application Craft handles this with App Instance linking, enabling you to set the Application Relationship in the [App Properties](../../../widget-properties-events/app-properties.htm) . It allows a user to set up all sorts of relationships (one-to-one, one-to-many and many-to-many) through the App itself. Each App allows any number of relationships to be defined.

See Also:

 - [Relationships in Detail](instance_relationships_in_deta.htm)

 - [Application Relationship Property](../../../widget-properties-events/app-properties.htm#advanced)

 - [setInstanceRelationship()](../../../scripting-apis/client-api/instance-data-functions/instancesetrelationship.htm)

 - [CRUD Permissions](crud-in-detail/using-ac-app-storage/crud-permissions.htm)

