---
title: "Synopsis of Foreign CRUD Operations"
active_menu_item: developers
class_name: developers
full_width: true
---


IMPORTANT

**WE ARE DISCONTINUING FUTURE ENHANCEMENTS  FOR NATIVE DATA STORAGE. INSTEAD, WE HAVE INTRODUCED FAR SUPERIOR DATA STORAGE USING ANY CONNECTED DATABASE. See: [Server Side Data Storage](/developers/documentation/product-guide/data-storage/server-side-data-storage/)**

**WE STRONGLY RECOMMEND THAT YOU DO NOT USE THESE FUNCTIONS. FUNCTIONALITY IS BEING RETAINED FOR A WHILE IN ORDER NOT TO DISRUPT EXISTING APPLICATIONS.**

The rest of this chapter discusses CRUD operations on App data within Application Craft.

CRUD works by letting an App access a Foreign App's data using instanceXxxx() functions that reference Panel Containers that are connected to Data Views, which in turn are connected to Queries. Before building Foreign CRUD enabled Apps, you should first read the [Data Section Properties](/developers/documentation/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/) chapter.

You must include all the fields that you want to map to the foreign App in a [Panel Container](/developers/documentation/product-guide/widget-properties-events/containers/panel) Widget.

The functions [instanceCreate()](/developers/documentation/scripting-apis/client-api/instance-data-functions/instancecreate) , [instanceUpdate()](/developers/documentation/scripting-apis/client-api/instance-data-functions/instancesave) and [instanceDelete()](/developers/documentation/scripting-apis/client-api/instance-data-functions/instancedelete) then are able to automatically pass data back to the foreign App via the Widget's Data View. This is described in more detail in the following sections.

Application Craft also takes care of [Relationships](/developers/documentation/product-guide/advanced-features/data-storage-management/instance-relationships-in-detail/) , [Integrity Checks](/developers/documentation/product-guide/advanced-features/data-storage-management/uniqueness-and-integrity/) and [Instance Naming](/developers/documentation/product-guide/advanced-features/data-storage-management/instance-names) in the foreign App.

## See Also

 - [Sharing](/developers/documentation/product-guide/the-console/sharing)

