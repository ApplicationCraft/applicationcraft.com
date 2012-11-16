---
title: "instanceCreate()"
active_menu_item: developers
class_name: developers
full_width: true
---


**instanceCreate** (containerWidget, optional cdbCallback, optional rdbCallback)

**instanceCreate** (undefined, optional cdbCallback, optional rdbCallback)

IMPORTANT

**WE ARE DISCONTINUING FUTURE ENHANCEMENTS  FOR NATIVE DATA STORAGE. INSTEAD, WE HAVE INTRODUCED FAR SUPERIOR DATA STORAGE USING ANY CONNECTED DATABASE. See: [Server Side Data Storage](/developers/documentation/product-guide/data-storage/server-side-data-storage/)**

**WE STRONGLY RECOMMEND THAT YOU DO NOT USE THESE FUNCTIONS. FUNCTIONALITY IS BEING RETAINED FOR A WHILE IN ORDER NOT TO DISRUPT EXISTING APPLICATIONS.**

## Parameters

<table>
<tr>
<td width="201">
{string} ContainerWidget

</td>
<td width="9">
</td>
<td width="670">
If undefined / null  empty string then it creates a new Instance for the currently running App. If a Panel Container Widget is specified, then it will create a new Instance in another App via the View that the Panel Container is connected to.

</td>
</tr>
<tr>
<td width="201">
{function} cdbCallback

</td>
<td width="9">
</td>
<td width="670">
optional, is called after instance is saved to the CDB

</td>
</tr>
<tr>
<td width="201">
{function} rdbCallback

</td>
<td width="9">
</td>
<td width="670">
optional. is called after instance is saved and is available in the results database

</td>
</tr>
</table>

## Description

This function will create a new Instance

 - either for the currently running App if the ContainerWidget parameter is unspecified or empty. See the [Configuring Your App for Data Storage](/developers/documentation/product-guide/advanced-features/data-storage-management/standard-storage-procedures/configuring-your-app-for-data) chapter for a general overview on storing data for the currently running App.

 - or for a foreign App, in which case a new Instance will be created in the App pointed to by the Data View that the   ContainerWidget is connected to. See the [Using AC App Storage](/developers/documentation/product-guide/advanced-features/data-storage-management/crud-in-detail/using-ac-app-storage/) chapter for a general overview of writing to foreign Apps.

 - or to create a new record in an external database pointing to by the Data View that the ContainerWidget is connected to. See the [Using External Databases](/developers/documentation/product-guide/advanced-features/data-storage-management/crud-in-detail/using-external-databases/) chapter for a general overview of writing to foreign Apps

## Callback Functions

There are two callback function you can use. cdbCallback returns first once the data has been successfully stored in the CDB (Core Database). rdbCallback is called once the data is fully saved and available in the results database for reporting and Data View access.

Please refer to the [instanceXxxx() callback functions](/developers/documentation/scripting-apis/client-api/instance-data-functions/instancexxxx-callback-function) page for details on these callback functions.

## Example

This example shows instanceCreate() being used on a 'local' instance (if the first parameter is omitted then this always saves local Instance data). This means that it will create a new Instance and will save all fields within the current App that are set to store their data in the database. Also notice how it only uses the rdb callback function. This lets the App refresh a Grid once it knows that the data is fully stored within the database and can be read back.

    function cbCompSave(error, status) {
        if (error === null) {
            app.refreshData('gridCompanies');
        } else {
            app.showMessage('Save Error', 'Unable to save company data');
        }
        g_CompNew=false;
    }
     
    function handler_btnCompSave_onClick(mouseev){
         if (g_CompNew){
             app.instanceCreate(undefined, undefined, cbCompSave);
         } 
         else {
             app.instanceUpdate(undefined, undefined, cbCompSave);
         }
    }

The next example specifies the Container Widget as the first parameter, so AC will update the foreign Instance that currently is loaded into that Container. Please read the [Using AC App Storage](/developers/documentation/product-guide/advanced-features/data-storage-management/crud-in-detail/using-ac-app-storage/) chapter for details on working with local and foreign Instances.

    function handler_btnContSave_onClick(mouseev){
        if(g_ContactNew) {
            app.instanceCreate('dcContacts', undefined, function(error, status){ 
                if(error===null) {
                    app.visible('dcContacts', false);
                    app.refreshData('gridContacts');       
                }
                else {
                    alert("Error saving");                        
                }
            });
        }
        else {
            app.instanceUpdate('dcContacts', undefined, function(error, status){ 
                if(error===null) {
                    app.refreshData('gridContacts');
                } else {
                    alert("Error saving");                      
                }
            });    
        }
    }

The next example specifies the Container Widget as the first parameter, so AC will update the external database with  the content that currently is loaded into that Container. Please read the [Using External Databases](/developers/documentation/product-guide/advanced-features/data-storage-management/crud-in-detail/using-external-databases/) chapter for details on working with external databases.

    function handler_btnContSave_onClick(mouseev){
        if(g_ContactNew) {
            app.instanceCreate('dcContacts', undefined, undefined)
            };
        }
        else {
            app.instanceUpdate('dcContacts', undefined, undefined){ 
                };    
       }
   


## See Also

 - [instanceXxxx Callback functions](/developers/documentation/scripting-apis/client-api/instance-data-functions/instancexxxx-callback-function)
 - [Using AC App Storage](/developers/documentation/product-guide/advanced-features/data-storage-management/crud-in-detail/using-ac-app-storage/)
 - [Using External Databases](/developers/documentation/product-guide/advanced-features/data-storage-management/crud-in-detail/using-external-databases/)
 - [instanceNew()](/developers/documentation/scripting-apis/client-api/instance-data-functions/instancenew)
 - [instanceUpdate()](/developers/documentation/scripting-apis/client-api/instance-data-functions/instancesave)
 - [instanceDelete()](/developers/documentation/scripting-apis/client-api/instance-data-functions/instancedelete)
 - [instanceLoad()](/developers/documentation/scripting-apis/client-api/instance-data-functions/instanceload)
 - [instanceSync()](/developers/documentation/scripting-apis/client-api/instance-data-functions/instancesync)
 - [dataGetValues()](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/datagetvalues)
 - [dataGetStates()](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/datagetstates)
