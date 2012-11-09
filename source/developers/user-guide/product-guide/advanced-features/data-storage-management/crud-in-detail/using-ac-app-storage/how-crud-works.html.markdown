---
title: "How CRUD works"
active_menu_item: developers
class_name: developers
full_width: true
---


IMPORTANT

## WE ARE DISCONTINUING FUTURE ENHANCEMENTS  FOR NATIVE DATA STORAGE. INSTEAD, WE HAVE INTRODUCED FAR SUPERIOR DATA STORAGE USING ANY CONNECTED DATABASE. See: [Server Side Data Storage](../../../../../data-storage/server-side-data-storage/index)

## WE STRONGLY RECOMMEND THAT YOU DO NOT USE THESE FUNCTIONS. FUNCTIONALITY IS BEING RETAINED FOR A WHILE IN ORDER NOT TO DISRUPT EXISTING APPLICATIONS.

Preparing for CRUD requires an understanding of how AC deals with writing to foreign Apps. To explain it, we will assume we have set up two Apps, 'CRUD Companies' and 'CRUD Contacts'. Let's also assume that you want to manage CRUD Contacts data from within your CRUD Companies App.

## [![Videos\_P](/img/docs/videos_p.png)](http://www.applicationcraft.com/learning-center#DataStorage) Learning Center / Videos - CRUD is also covered in the Data Section of the learning center and is probably the best place to start, this is a collection of short videos that will get you up and running as quickly as possible. [Go to Learning Center](http://www.applicationcraft.com/learning-center#DataStorage) . The apps used in the Videos are also available to download and import into your account

CRUD and Relationships

CRUD involves data operations on foreign Apps. As a result, you will often create Instance relationships between your App and the other App. You should define these Relationships properly within your App properties as described in [Instance Relationships in Detail](../../instance-relationships-in-detail/index) .

![crud-relation](/img/docs/crud-relation.zoom52.png)

CRUD Requires a Query

## All CRUD operations are passed into a Query via the App's data view, so you need to [define a Query](../../../../the-console/console-tabs/queries/index) that points to your App (CRUD Contacts, for example). Important : you must not include a JOIN in your query, so make sure only a single App is selected.

In the next topic, we discuss how you can create JOINed Apps based on their Relationships.

Create a View in your App that points to the Query

In your App (CRUD Companies), [create a View](../../../data-integration,-reporting-dashboards/data-section-properties/configuring-the-app-to-access-) that references the Query (CRUD Contacts in our example).

![crud-view-internal](/img/docs/crud-view-internal.zoom51.png)

Map your Widget(s) to the View

In your App (CRUD Companies) you will usually have a Panel Container Widget that contains individual Widgets that will interact with the foreign App (CRUD Contacts). Map this [Panel Container](../../../../../widget-properties-events/containers/panel) to point to the CRUD Contacts View and, in the Fields property of the Panel Container, map any Widgets to the View fields that need to be mapped. You can also use Grids or Repeater Containers with CRUD operations.

![crud-map-internal](/img/docs/crud-map-internal.zoom63.png)

'Allow Foreign App Writing' Property

Locate the Panel Container property 'Allow Foreign App Writing'. Assuming that you are using a Panel Container then you only need set this property to true for the Panel Container and not for the Widgets contained within it (these are mapped via the Panel Container).

![crud-appwriting-internal](/img/docs/crud-appwriting-internal.zoom53.png)

This property tells Application Craft that it must automatically load Instance IDs whenever data is loaded. This means AC knows where the data came from so that the CRUD functions (shown below) know where to write data back to without you having to think about it.

'Automatic Relationships' Property

If required, you should set this property to true so that AC knows to automatically create a relationship between the currently loaded App Instance and any new Instances created with CRUD operations.

Manual Relationships

Relationships between any two Instances can also be created at any time using the [instanceSetRelationship()](../../../../../scripting-apis/client-api/instance-data-functions/instancesetrelationship) function. This function also allows you to remove existing relationships.

Ready to Go

You are now ready to perform CRUD operations such as

 - [instanceCreate()](../../../../../scripting-apis/client-api/instance-data-functions/instancecreate)

 - [instanceUpdate()](../../../../../scripting-apis/client-api/instance-data-functions/instancesave)

 - [instanceDelete()](../../../../../scripting-apis/client-api/instance-data-functions/instancedelete)

## See Also:

 - [CRUD Permissions](crud-permissions)

