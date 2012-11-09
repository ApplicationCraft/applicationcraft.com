---
title: "Synopsis of Foreign CRUD Operations"
active_menu_item: developers
class_name: developers
full_width: true
---


IMPORTANT

## WE ARE DISCONTINUING FUTURE ENHANCEMENTS  FOR NATIVE DATA STORAGE. INSTEAD, WE HAVE INTRODUCED FAR SUPERIOR DATA STORAGE USING ANY CONNECTED DATABASE. See: [Server Side Data Storage](../../../../../data-storage/server-side-data-storage/index.htm)

## WE STRONGLY RECOMMEND THAT YOU DO NOT USE THESE FUNCTIONS. FUNCTIONALITY IS BEING RETAINED FOR A WHILE IN ORDER NOT TO DISRUPT EXISTING APPLICATIONS.

The rest of this chapter discusses CRUD operations on App data within Application Craft.

CRUD works by letting an App access a Foreign App's data using instanceXxxx() functions that reference Panel Containers that are connected to Data Views, which in turn are connected to Queries. Before building Foreign CRUD enabled Apps, you should first read the [Data Section Properties](../../../data-integration,-reporting-dashboards/data-section-properties/index.htm) chapter.

You must include all the fields that you want to map to the foreign App in a [Panel Container](../../../../../widget-properties-events/containers/panel.htm) Widget.

The functions [instanceCreate()](../../../../../scripting-apis/client-api/instance-data-functions/instancecreate.htm) , [instanceUpdate()](../../../../../scripting-apis/client-api/instance-data-functions/instancesave.htm) and [instanceDelete()](../../../../../scripting-apis/client-api/instance-data-functions/instancedelete.htm) then are able to automatically pass data back to the foreign App via the Widget's Data View. This is described in more detail in the following sections.

Application Craft also takes care of [Relationships](../../instance-relationships-in-detail/index.htm) , [Integrity Checks](../../uniqueness-and-integrity/index.htm) and [Instance Naming](../../instance-names.htm) in the foreign App.

## See Also:

 - [Sharing](../../../../the-console/sharing.htm)

