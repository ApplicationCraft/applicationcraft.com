---
title: "instanceDelete()"
active_menu_item: developers
class_name: developers
full_width: true
---


## instanceDelete (ContainerWidget, undefined, optional cdbCallback, optional rdbCallback)

deletes an Instance in a foreign App, or external database as connected to via the specified Data Container Widget

## instanceDelete (undefined, undefined, optional cdbCallback, optional rdbCallback)

Deletes the currently loaded Instance for the currently running App

## instanceDelete (undefined, instanceId, optional cdbCallback, optional rdbCallback)

Deletes the specified Instance ID

IMPORTANT

## WE ARE DISCONTINUING FUTURE ENHANCEMENTS  FOR NATIVE DATA STORAGE. INSTEAD, WE HAVE INTRODUCED FAR SUPERIOR DATA STORAGE USING ANY CONNECTED DATABASE. See: [Server Side Data Storage](../../../data-storage/server-side-data-storage/index)

## WE STRONGLY RECOMMEND THAT YOU DO NOT USE THESE FUNCTIONS. FUNCTIONALITY IS BEING RETAINED FOR A WHILE IN ORDER NOT TO DISRUPT EXISTING APPLICATIONS.

Parameters

<table>
<tr>
<td width="176">
{string} ContainerWidget

</td>
<td width="22">
</td>
<td width="682">
If ContainerWidget is specified, then it deletes the currently loaded App Instance. If undefined / null  empty string then it deletes the Instance currently associated with the ContainerWidget.

</td>
</tr>
<tr>
<td width="176">
{string} instanceId

</td>
<td width="22">
</td>
<td width="682">
The Instance ID to be deleted

</td>
</tr>
<tr>
<td width="176">
{function} cdbCallback

</td>
<td width="22">
</td>
<td width="682">
optional, is called after instance is updated in the CDB

</td>
</tr>
<tr>
<td width="176">
{function} rdbCallback

</td>
<td width="22">
</td>
<td width="682">
optional. is called after instance is saved and is available in the RDB

</td>
</tr>
</table>

Description

This function will delete an existing Instance

 - either for the currently running App if the ContainerWidget parameter is unspecified or empty. See the [Configuring Your App for Data Storage](../../../product-guide/advanced-features/data-storage-management/standard-storage-procedures/configuring-your-app-for-data-) chapter for a general overview on storing data for the currently running App.

 - or for a foreign App, in which case the Instance will be deleted in the App pointed to by the Data View that the   ContainerWidget is connected to. See the [Using AC App Storage](../../../product-guide/advanced-features/data-storage-management/crud-in-detail/using-ac-app-storage/index) chapter for a general overview of writing to foreign Apps.

 - or to delete a record in an external database pointing to by the Data View that the ContainerWidget is connected to. See the [Using External Databases](../../../product-guide/advanced-features/data-storage-management/crud-in-detail/using-external-databases/index) chapter for a general overview of writing to foreign Apps.

Callback Functions

There are two callback function you can use. cdbCallback returns first once the data has been successfully reflected in the CDB (Core Database). rdbCallback is called once the data is fully reflected in the results database for reporting and Data View access.

Please refer to the [instanceXxxx() callback functions](instancexxxx-callback-function) page for details on these callback functions.

Example

This example shows instanceDelete() operating on a local instance and calls the RDB Callback..

    function handler_btnCompDelete_onClick(mouseev){
    app.instanceDelete(undefined, undefined,undefined, function(error, status){
    if(error===null) {
    app.refreshData('gridCompanies');
    app.visible('panelCompContacts', false);
    }
    else {
    alert('Error deleting Company');
    }
    });
    }
    function handler_btnContDelete_onClick(mouseev){
    app.instanceDelete('dcContacts', undefined, undefined, function(error, status){
    if(error===null) {
    refreshAllCompDetails();
    app.visible('dcContacts', false);
    }
    else {
    alert('Error deleting Contact');
    }
    });
    }
    function handler_btnContDelete_onClick(mouseev){
    app.instanceDelete('dcContacts', undefined, undefined);
    }
   

The next example specifies the Container Widget as the first parameter, so AC will delete the foreign Instance that currently is loaded into that Container.  Please read the [Using AC App Storage](../../../product-guide/advanced-features/data-storage-management/crud-in-detail/using-ac-app-storage/index) chapter for details on working with local and foreign Instances.

The next example specifies the Container Widget as the first parameter, so AC will delete from the external database the content that currently is loaded into that Container. Please read the [Using External Databases](../../../product-guide/advanced-features/data-storage-management/crud-in-detail/using-external-databases/index) chapter for details on working with external databases.

See Also:

 - [instanceXxxx Callback functions](instancexxxx-callback-function)

 - [Using AC App Storage](../../../product-guide/advanced-features/data-storage-management/crud-in-detail/using-ac-app-storage/index)

 - [Using External Databases](../../../product-guide/advanced-features/data-storage-management/crud-in-detail/using-external-databases/index)

 - [instanceNew()](instancenew)

 - [instanceSync()](instancesync)

 - [instanceCreate()](instancesave "instance")

 - [instanceUpdate()](instancesave)

 - [instanceLoad()](instanceload)

 - [dataGetValues()](../widget-data-state-manipulation/datagetvalues)

 - [dataGetStates()](../widget-data-state-manipulation/datagetstates)

