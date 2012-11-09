---
title: "getInstanceData()"
active_menu_item: developers
class_name: developers
full_width: true
---


## obj = getInstanceData ()

Parameters

<table>
<tr>
<td width="134">
{object} obj

</td>
<td width="20">
</td>
<td width="750">
The object returned that stores the Instance data

</td>
</tr>
</table>

Description

This function takes a data and state snapshot of the currently running App Instance and stores it in an object variable, which can then be restored later using [setInstanceData()](setinstancedata.htm) or passed to [printApp()](../app-functions/printapp.htm) etc.

Instance Data contains data and field state (visible, read-only, enabled properties) information only for those fields in the App that have the 'Store in Database' property set to true. This is the same data that is saved with [instanceUpdate()](instancesave.htm) and [instanceCreate()](instancecreate.htm) .

You would most likely use this function if you want to store the Instance data in your own external system or database. You can then restore the App Instance later using the [setInstanceData()](setinstancedata.htm) function. You can use the [OBJ2JSON()](../conversion-functions/json2text.htm) function to convert the returned object into a JSON string before passing it on to your own external storage function or, if you are using AC's [httpRequest()](../soap-restful-ajax-calls/httprequest.htm) function, it will do the conversion for you.

If you want to take a snapshot of the entire App, including all Widgets and their current property states, you can use the [getAppSnapshot()](../app-functions/getappsnapshot.htm) and [setAppSnapshot()](../app-functions/setappsnapshot.htm) functions.

Example

    // Get Instance Data and then call my own external web service to store it somewhere
    obj = app.getInstanceData();
    app.httpRequest("http://mydomain.com/myStorageProc", "POST", callbackFunction, obj , "json" );
   

See Also:

 - [setAppSnapshot()](../app-functions/setappsnapshot.htm)

 - [getAppSnapshot()](../app-functions/getappsnapshot.htm)

 - [switchApp()](../app-functions/switchapp.htm)

 - [setGlobalData()](../global-data-pool-functions/setglobaldata.htm)

 - [getGlobalData()](../global-data-pool-functions/getglobaldata.htm)

 - [getInstanceData()](getinstancedata.htm)

 - [setInstanceData()](setinstancedata.htm)

 - [dataGetValues()](../widget-data-state-manipulation/datagetvalues.htm)

 - [dataGetStates()](../widget-data-state-manipulation/datagetstates.htm)

