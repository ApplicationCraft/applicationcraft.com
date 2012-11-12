---
title: "How CRUD works for External Databases"
active_menu_item: developers
class_name: developers
full_width: true
---


## CRUD Requires a Query

All CRUD operations are passed into a Query via the App's data view, so you need to [define a Query](../../../../the-console/console-tabs/queries/) that points to your external database. **Important** : you must not include a JOIN in your query, so make sure only a single App is selected. If you wish to work with multiple database tables, create a view at the database level, and then set up your AC query on that view.

## Create a View in your App that points to the Query

In your App, [create a View](../../../data-integration,-reporting-dashboards/data-section-properties/configuring-the-app-to-access) that references the Query.

![Crud-view-external](/img/docs/crud-view-external.zoom51.png)

## Map your Widget(s) to the View

In your App you will usually have a Panel Container Widget that contains individual Widgets that will interact with the external database. Map this [Panel Container](../../../../../widget-properties-events/containers/panel) to point to the View and, in the Fields property of the Panel Container, map any Widgets to the View fields that need to be mapped. You can also use Grids or Repeater Containers with CRUD operations.

![Crud-map-external](/img/docs/crud-map-external.zoom57.png)

**Set your 'Key Fields' to the View**

Map this [Panel Container](../../../../../widget-properties-events/containers/panel) to point to the View and, in the Key Fields property of the Panel Container, select all the database fields that are mapped to the container widgets.

![Crud-keyfields-external](/img/docs/crud-keyfields-external.zoom57.png)

## 'Allow Foreign App Writing' Property

Locate the Panel Container property 'Allow Foreign App Writing'. Assuming that you are using a Panel Container then you only need set this property to true for the Panel Container and not for the Widgets contained within it (as these are mapped via the Panel Container).

![Crud-appwriting-external](/img/docs/crud-appwriting-external.zoom58.png)

This means AC knows where the data came from so that the CRUD functions (shown below) know where to write data back to without you having to think about it.

## Ready to Go

You are now ready to perform CRUD operations such as

 - [instanceCreate()](../../../../../scripting-apis/client-api/instance-data-functions/instancecreate)

 - [instanceUpdate()](../../../../../scripting-apis/client-api/instance-data-functions/instancesave)

 - [instanceDelete()](../../../../../scripting-apis/client-api/instance-data-functions/instancedelete)

## **See Also**

 - [Permissions](permissions)

