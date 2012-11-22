---
old_url: using_ac_app_storage.htm
title: "Using AC App Storage"
active_menu_item: developers
class_name: developers
full_width: true
---


IMPORTANT

**WE ARE DISCONTINUING FUTURE ENHANCEMENTS  FOR NATIVE DATA STORAGE. INSTEAD, WE HAVE INTRODUCED FAR SUPERIOR DATA STORAGE USING ANY CONNECTED DATABASE. See: [Server Side Data Storage](/developers/documentation/product-guide/data-storage/server-side-data-storage/)**

**WE STRONGLY RECOMMEND THAT YOU DO NOT USE THESE FUNCTIONS. FUNCTIONALITY IS BEING RETAINED FOR A WHILE IN ORDER NOT TO DISRUPT EXISTING APPLICATIONS.**

**CRUD** is a very important concept to master as it allows more complex, relational Apps to be built. The CRUD functions operate on both local and foreign data

 - Local Data - Widgets in 'this' App that are set to store data in database

 - Foreign Data - Widgets in an App external to 'this' App but you want to interact with data in the Foreign App. Foreign Data is accessed via Panel Containers as is explained later in this chapter.

These are the available CRUD operations

 - C - Create = [instanceCreate()](/developers/documentation/scripting-apis/client-api/instance-data-functions/instancecreate) - create new App Instances in the current or a foreign App. For example, adding a Contact (the data for which is defined within a separate Contact App) from within a Company App.

 - R - Read or display data from a foreign App within the current App. This is done using Queries and Views, which load data into Widgets which are connected to Data Views.

 - U - Update = [instanceUpdate()](/developers/documentation/scripting-apis/client-api/instance-data-functions/instancesave) - update data in the local or a foreign App

 - D - Delete = [instanceDelete()](/developers/documentation/scripting-apis/client-api/instance-data-functions/instancedelete) - data from a foreign App (or the current App).

To understand how this works, we will use a simple App that shows all of these features in action.

## In This Section

 - [CRUD on Local Instances](/developers/documentation/product-guide/advanced-features/data-storage-management/crud-in-detail/using-ac-app-storage/crud-on-local-instances)
 - [Synopsis of Foreign CRUD Operations](/developers/documentation/product-guide/advanced-features/data-storage-management/crud-in-detail/using-ac-app-storage/synopsis)
 - [CRUD Permissions](/developers/documentation/product-guide/advanced-features/data-storage-management/crud-in-detail/using-ac-app-storage/crud-permissions)
 - [Setting up Grids To Edit Foreign Data](/developers/documentation/product-guide/advanced-features/data-storage-management/crud-in-detail/using-ac-app-storage/setting-up-grids-to-edit-forei)
 - [Example CRUD Calls](/developers/documentation/product-guide/advanced-features/data-storage-management/crud-in-detail/using-ac-app-storage/example-crud-calls)
 - [How CRUD works](/developers/documentation/product-guide/advanced-features/data-storage-management/crud-in-detail/using-ac-app-storage/how-crud-works)
 - [JOINed App Queries](/developers/documentation/product-guide/advanced-features/data-storage-management/crud-in-detail/using-ac-app-storage/joined-app-queries)
 - [CRUD & Filtering](/developers/documentation/product-guide/advanced-features/data-storage-management/crud-in-detail/using-ac-app-storage/crud-filtering)

