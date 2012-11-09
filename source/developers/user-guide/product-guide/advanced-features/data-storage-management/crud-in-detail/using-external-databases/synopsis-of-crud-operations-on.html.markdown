---
title: "Synopsis of CRUD Operations on External Databases"
active_menu_item: developers
class_name: developers
full_width: true
---


CRUD works by letting an App access an external Database using instanceXxxx() functions that reference Data Containers that are connected to Data Views, which in turn are connected to Queries. Before building CRUD enabled Apps, you should first read the [Data Section Properties](../../../data-integration,-reporting-dashboards/data-section-properties/index.htm) chapter.

You must include all the fields that you want to map to the external database in a [Panel Container](../../../../../widget-properties-events/containers/panel.htm) Widget and also map the fields in the Key Fields property

The functions [instanceCreate()](../../../../../scripting-apis/client-api/instance-data-functions/instancecreate.htm) , [instanceUpdate()](../../../../../scripting-apis/client-api/instance-data-functions/instancesave.htm) and [instanceDelete()](../../../../../scripting-apis/client-api/instance-data-functions/instancedelete.htm) then are able to automatically pass data back to the  external database via the Widget's Data View. This is described in more detail in the following sections
