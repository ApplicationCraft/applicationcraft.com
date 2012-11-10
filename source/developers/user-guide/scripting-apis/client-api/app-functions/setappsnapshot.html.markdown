---
title: "setAppSnapshot()"
active_menu_item: developers
class_name: developers
full_width: true
---


**setAppSnapshot** (obj)

## Parameters

<table>
<tr>
<td width="134">
{object} obj

</td>
<td width="20">
</td>
<td width="750">
The snapshot object to be restored that was previously acquired with [getAppSnapshot()](getappsnapshot.htm)

</td>
</tr>
</table>
## Description

This function restores a complete snapshot of a previously running App and stores it in an object variable created with [getAppSnapshot()](getappsnapshot.htm) .

This is especially useful when used in conjunction with the [switchApp()](switchapp.htm) and [getGlobalData()](../global-data-pool-functions/getglobaldata) functions. When you switch to another App, you may want to store the state of the current App so when you switch back to the current App, it is able to restore that exact same state.

**Important** : setAppSnapshot() will not work in the 'On App Loading' event. It will mostly be used in the 'On App Started' event or at a later point once the App has loaded.

## Example

    // When a button is pressed, we switch to another App
    function handler_actionBtn1_onClick(mouseev){
        app.setGlobalData('stateVar', app.getAppSnapshot());      // put the Snapshot into the Global Data Pool with the name 'stateVar'
        app.switchApp('03489a4a-34aa-4d7e-a4a4-207c15511143');    // Switch to another App
    }
     
    // This event executes when the App starts. 
    function handler_application_1_onAppStarted(){
        stateObj = app.getGlobalData('stateVar');
        app.clearGlobalData('stateVar'); // remove 'stateVar' from the Pool
        if(stateObj!==undefined) {
            app.setAppSnapshot(stateObj);  // get 'stateVar' out of the Global Data Pool and restore the App with it
        }
    }
     
   

## See Also

 - [getAppSnapshot()](getappsnapshot.htm)

 - [switchApp()](switchapp.htm)

 - [setGlobalData()](../global-data-pool-functions/setglobaldata)

 - [getGlobalData()](../global-data-pool-functions/getglobaldata)

 - [getInstanceData()](../instance-data-functions/getinstancedata)

 - [setInstanceData()](../instance-data-functions/setinstancedata)

