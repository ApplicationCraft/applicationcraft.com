---
title: "getInstanceData()"
active_menu_item: developers
class_name: developers
full_width: true
---


obj = **getInstanceData** ()

## Parameters

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
## Description

This function takes a data and state snapshot of the currently running App Instance and stores it in an object variable, which can then be restored later using [setInstanceData()](/developers/documentation/scripting-apis/client-api/instance-data-functions/setinstancedata) or passed to [printApp()](/developers/documentation/scripting-apis/client-api/app-functions/printapp) etc.

Instance Data contains data and field state (visible, read-only, enabled properties) information only for those fields in the App that have the 'Store in Database' property set to true. This is the same data that is saved with [instanceUpdate()](/developers/documentation/scripting-apis/client-api/instance-data-functions/instancesave) and [instanceCreate()](/developers/documentation/scripting-apis/client-api/instance-data-functions/instancecreate) .

You would most likely use this function if you want to store the Instance data in your own external system or database. You can then restore the App Instance later using the [setInstanceData()](/developers/documentation/scripting-apis/client-api/instance-data-functions/setinstancedata) function. You can use the [OBJ2JSON()](/developers/documentation/scripting-apis/client-api/conversion-functions/json2text) function to convert the returned object into a JSON string before passing it on to your own external storage function or, if you are using AC's [httpRequest()](/developers/documentation/scripting-apis/client-api/soap-restful-ajax-calls/httprequest) function, it will do the conversion for you.

If you want to take a snapshot of the entire App, including all Widgets and their current property states, you can use the [getAppSnapshot()](/developers/documentation/scripting-apis/client-api/app-functions/getappsnapshot) and [setAppSnapshot()](/developers/documentation/scripting-apis/client-api/app-functions/setappsnapshot) functions.

## Example

    // Get Instance Data and then call my own external web service to store it somewhere
    obj = app.getInstanceData();
    app.httpRequest("http://mydomain.com/myStorageProc", "POST", callbackFunction, obj , "json" );
     
   

## See Also

 - [setAppSnapshot()](/developers/documentation/scripting-apis/client-api/app-functions/setappsnapshot)
 - [getAppSnapshot()](/developers/documentation/scripting-apis/client-api/app-functions/getappsnapshot)
 - [switchApp()](/developers/documentation/scripting-apis/client-api/app-functions/switchapp)
 - [setGlobalData()](/developers/documentation/scripting-apis/client-api/global-data-pool-functions/setglobaldata)
 - [getGlobalData()](/developers/documentation/scripting-apis/client-api/global-data-pool-functions/getglobaldata)
 - [getInstanceData()](/developers/documentation/scripting-apis/client-api/instance-data-functions/getinstancedata)
 - [setInstanceData()](/developers/documentation/scripting-apis/client-api/instance-data-functions/setinstancedata)
 - [dataGetValues()](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/datagetvalues)
 - [dataGetStates()](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/datagetstates)

