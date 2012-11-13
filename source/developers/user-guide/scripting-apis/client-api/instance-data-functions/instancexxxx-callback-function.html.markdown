---
title: "instanceXxxx() callback functions"
active_menu_item: developers
class_name: developers
full_width: true
---


IMPORTANT

**WE ARE DISCONTINUING FUTURE ENHANCEMENTS  FOR NATIVE DATA STORAGE. INSTEAD, WE HAVE INTRODUCED FAR SUPERIOR DATA STORAGE USING ANY CONNECTED DATABASE. See: [Server Side Data Storage](/developers/user-guide/product-guide/data-storage/server-side-data-storage/)**

**WE STRONGLY RECOMMEND THAT YOU DO NOT USE THESE FUNCTIONS. FUNCTIONALITY IS BEING RETAINED FOR A WHILE IN ORDER NOT TO DISRUPT EXISTING APPLICATIONS.**

This topic relates to the following functions

 - [instanceCreate()](/developers/user-guide/scripting-apis/client-api/instance-data-functions/instancecreate)
 - [instanceUpdate()](/developers/user-guide/scripting-apis/client-api/instance-data-functions/instancesave)
 - [instanceDelete()](/developers/user-guide/scripting-apis/client-api/instance-data-functions/instancedelete)
 - [instanceSync()](/developers/user-guide/scripting-apis/client-api/instance-data-functions/instancesync)
 - [instanceSetRelationship()](/developers/user-guide/scripting-apis/client-api/instance-data-functions/instancesetrelationship)

Each of these functions supports two distinct callback functions

 - cdbCallback( [error](/developers/user-guide/scripting-apis/client-api/objects-titbits/error-object) , [result](/developers/user-guide/scripting-apis/client-api/objects-titbits/result-object-for-instancexxxx) )  - once instance data has been successfully stored in the CDB (core database). Use this if you do not need to know when the data hits the RDB.

 - rdbCallback( [error](/developers/user-guide/scripting-apis/client-api/objects-titbits/error-object) , [status](/developers/user-guide/scripting-apis/client-api/objects-titbits/status-object-for-instancexxxx) )  - once instance data has been successfully stored in the RDB (results database). If you need to be sure your data has been stored in the RDB (typically, if you want to update that data in a Grid or other Widget within the App) then use this one instead of the cdbCallback.

The CDB (Core Database) is the database that holds the JSON representation of the Instance data (values and altered properties). Instance data is stored to and loaded from the CDB very quickly. As a result, the cdbCallback function will always be called first.

The problem with the CDB is that while it is fast, JSON is a bad format for reporting against. As a result, we also provide the RDB (Results Database) that can report on data very efficiently. Using the App 'Store in Database' property you can control whether your App saves data a) at all b) just in the CDB or c) in both the CDB and the RDB. This is described in more detail in the [Data Storage and Management](/developers/user-guide/product-guide/advanced-features/data-storage-management/) chapter .

In most cases, you will use either cdbCallback or rdbCallback and not both.

You would normally inspect the error status in your callback function and then, if required, you can get more information from the result or status objects.

Please refer to the [result](/developers/user-guide/scripting-apis/client-api/objects-titbits/result-object-for-instancexxxx) and [status](/developers/user-guide/scripting-apis/client-api/objects-titbits/status-object-for-instancexxxx) object pages for more information.

