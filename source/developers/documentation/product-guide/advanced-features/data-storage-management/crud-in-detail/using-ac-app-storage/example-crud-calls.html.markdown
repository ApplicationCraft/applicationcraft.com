---
title: "Example CRUD Calls"
active_menu_item: developers
class_name: developers
full_width: true
---


IMPORTANT

**WE ARE DISCONTINUING FUTURE ENHANCEMENTS  FOR NATIVE DATA STORAGE. INSTEAD, WE HAVE INTRODUCED FAR SUPERIOR DATA STORAGE USING ANY CONNECTED DATABASE. See: [Server Side Data Storage](/developers/documentation/product-guide/data-storage/server-side-data-storage/)**

**WE STRONGLY RECOMMEND THAT YOU DO NOT USE THESE FUNCTIONS. FUNCTIONALITY IS BEING RETAINED FOR A WHILE IN ORDER NOT TO DISRUPT EXISTING APPLICATIONS.**

All CRUD functions have the same three parameters

instanceCreate({string} ContainerName, {function} cdbCallback, {function} rdbCallback)

## ContainerName Parameter

If you are operating on local Instance data, then the first parameter is undefined or empty. If you are operating on Foreign data, then this will usually be the name of a Panel Container Widget (read [How CRUD Works](/developers/documentation/product-guide/advanced-features/data-storage-management/crud-in-detail/using-ac-app-storage/how-crud-works) page for correct setup)

cdbCallback / rdbCallback functions

You should define one of these functions in order to handle errors or confirmations. They are called once the data is successfully written to the server. cdbCallback is called as soon as the data is received by the server and rdbCallback is called once the data is fully added to the RDB database.

Please refer to the [instanceXxxx() callback](/developers/documentation/scripting-apis/client-api/instance-data-functions/instancexxxx-callback-function) page for details.

