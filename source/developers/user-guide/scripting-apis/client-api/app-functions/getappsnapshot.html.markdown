---
title: "getAppSnapshot()"
active_menu_item: developers
class_name: developers
full_width: true
---


## obj getAppSnapshot ()

Parameters

<table>
<tr>
<td width="134">
{object} obj

</td>
<td width="20">
</td>
<td width="750">
The object returned contains the App snapshot.

</td>
</tr>
</table>

Description

This function takes a complete snapshot of the currently running App and stores it in an object variable, which can then be restored later using [setAppSnapshot()](setappsnapshot) .

This is especially useful when used in conjunction with the switchApp() and [setGlobalData()](../global-data-pool-functions/setglobaldata) functions. When you switch to another App, you may want to store the state of the current App so when you later switchApp() back again, it is able to restore to the exact same state.

You could also serialize the object (use OBJ2JSON()) and store this in an external system if required. However, if you are interested in storing data externally, the [getInstanceData()](../instance-data-functions/getinstancedata) function may be a better choice as it only stores field data and states for fields that are marked as Store in Database.

Example

    // When a button is pressed, we switch to another App
    function handler_actionBtn1_onClick(mouseev){
    app.setGlobalData('stateVar', app.getAppSnapshot());                  // put the Snapshot into the Global Data Pool with the name 'stateVar'
    app.switchApp('03489a4a-34aa-4d7e-a4a4-207c15511143');    // Switch to another App
    }
    // This event executes when the App starts.
    function handler_application_onAppStarted(){
    stateObj = app.getGlobalData('stateVar');
    app.clearGlobalData('stateVar'); // remove 'stateVar' from the Pool
    if(stateObj!==undefined) {
    app.setAppSnapshot(stateObj);  // get 'stateVar' out of the Global Data Pool and restore the App with it
    }
    }
   

See Also:

 - [setAppSnapshot()](setappsnapshot)

 - [switchApp()](switchapp)

 - [setGlobalData()](../global-data-pool-functions/setglobaldata)

 - [getGlobalData()](../global-data-pool-functions/getglobaldata)

 - [getInstanceData()](../instance-data-functions/getinstancedata)

 - [setInstanceData()](../instance-data-functions/setinstancedata)

