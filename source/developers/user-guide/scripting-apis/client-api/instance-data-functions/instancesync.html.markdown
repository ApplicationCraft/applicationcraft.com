---
title: "instanceSync()"
active_menu_item: developers
class_name: developers
full_width: true
---


## instanceSync (complexWidget, optional cdbCallback, optional rdbCallback)

IMPORTANT

## WE ARE DISCONTINUING FUTURE ENHANCEMENTS  FOR NATIVE DATA STORAGE. INSTEAD, WE HAVE INTRODUCED FAR SUPERIOR DATA STORAGE USING ANY CONNECTED DATABASE. See: [Server Side Data Storage](../../../data-storage/server-side-data-storage/index.htm)

## WE STRONGLY RECOMMEND THAT YOU DO NOT USE THESE FUNCTIONS. FUNCTIONALITY IS BEING RETAINED FOR A WHILE IN ORDER NOT TO DISRUPT EXISTING APPLICATIONS.

Parameters

<table>
<tr>
<td width="201">
{string} complexWidget

</td>
<td width="9">
</td>
<td width="670">
This is either a Grid Widget or a Container Widget.

</td>
</tr>
<tr>
<td width="201">
{function} cdbCallback

</td>
<td width="9">
</td>
<td width="670">
optional, is called after instance is synced with the CDB

</td>
</tr>
<tr>
<td width="201">
{function} rdbCallback

</td>
<td width="9">
</td>
<td width="670">
optional. is called after instance is synced with the RDB

</td>
</tr>
</table>

Description

This lets you update fields of multiple App Instances that are loaded into either a Grid or a Repeater Container Widget. Each row will contain some fields from one Instance. You can then modify those fields as well as add new rows and delete existing ones. When you call the instanceSync() function, AC will synchronize all of these changes with the database.

The Grid or Repeater Container that is mapped to a Data View must have the 'Allow Foreign App Writing' property set to true. The Query that the Data View it is connected to may not have JOIN with any other Apps.

Calling instanceSync() will reflect ALL of the following changes that have been made by the user

 - Create - if you have added new rows into the Widget, it will create new Instances

 - Update - any edits you make to cells within the Grid will be written back

 - Delete - any rows that you delete will result in deletion of the corresponding Instances

Callback Functions

There are two callback function you can use. cdbCallback returns first once the data has been successfully stored in the CDB (Core Database). rdbCallback is called once the data is fully saved and available in the results database for reporting and Data View access.

Please refer to the [instanceXxxx() callback functions](instancexxxx_callback_function.htm) page for details on these callback functions.

Example

This example synchronizes the contents of a Repeater Container with the database. It was populated by a Data View (getting data from a Query that contains data from only a single App, no JOINs).

    function handler_abSync_onClick(mouseev){
    app.instanceSync("rcReadings", undefined, function(error,status){
    if(error===null){
    app.showMessage("Success","Readings Sync Successful");
    } else {
    app.showMessage("Error","Readings Sync Failed");
    }
    });
    }
   

See Also:

 - [instanceXxxx Callback functions](instancexxxx_callback_function.htm)

 - [CRUD in Detail](../../../product-guide/advanced-features/data-storage-management/crud-in-detail/index.htm)

 - [instanceNew()](instancenew.htm)

 - [instanceCreate()](instancesave.htm "instance")

 - [instanceUpdate()](instancesave.htm)

 - [instanceDelete()](instancedelete.htm)

 - [instanceLoad()](instanceload.htm)

 - [dataGetValues()](../widget-data-state-manipulation/datagetvalues.htm)

 - [dataGetStates()](../widget-data-state-manipulation/datagetstates.htm)

