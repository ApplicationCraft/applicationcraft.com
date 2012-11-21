---
old_url: automatically_created_relation.htm
title: "Automatically Created Relationships"
active_menu_item: developers
class_name: developers
full_width: true
---


IMPORTANT

**WE ARE DISCONTINUING FUTURE ENHANCEMENTS  FOR NATIVE DATA STORAGE. INSTEAD, WE HAVE INTRODUCED FAR SUPERIOR DATA STORAGE USING ANY CONNECTED DATABASE. See: [Server Side Data Storage](/developers/documentation/product-guide/data-storage/server-side-data-storage/)**

**WE STRONGLY RECOMMEND THAT YOU DO NOT USE THESE FUNCTIONS. FUNCTIONALITY IS BEING RETAINED FOR A WHILE IN ORDER NOT TO DISRUPT EXISTING APPLICATIONS.**

If you are using the CRUD functions instanceCreate(), instanceUpdate() and instanceDelete(), then AC will automatically look to see whether the App you are writing to exists within a Relationship definition. If it does, then it will automatically create the relationship for you.

Once a relationship is created by AC, Queries can be created that JOIN two or more Apps based on those relationships. This allows you to populate Grids or Repeater Containers with fields from more than one App.

## See Also

 - [CRUD Permissions](/developers/documentation/product-guide/advanced-features/data-storage-management/crud-in-detail/using-ac-app-storage/crud-permissions)

