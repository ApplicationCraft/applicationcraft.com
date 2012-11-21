---
old_url: setappsnapshot.htm
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
  The snapshot object to be restored that was previously acquired with <a href="/developers/documentation/scripting-apis/client-api/app-functions/getappsnapshot">getAppSnapshot()</a>

</td>
</tr>
</table>
## Description

This function restores a complete snapshot of a previously running App and stores it in an object variable created with [getAppSnapshot()](/developers/documentation/scripting-apis/client-api/app-functions/getappsnapshot) .

This is especially useful when used in conjunction with the [switchApp()](/developers/documentation/scripting-apis/client-api/app-functions/switchapp) and [getGlobalData()](/developers/documentation/scripting-apis/client-api/global-data-pool-functions/getglobaldata) functions. When you switch to another App, you may want to store the state of the current App so when you switch back to the current App, it is able to restore that exact same state.

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

 - [getAppSnapshot()](/developers/documentation/scripting-apis/client-api/app-functions/getappsnapshot)
 - [switchApp()](/developers/documentation/scripting-apis/client-api/app-functions/switchapp)
 - [setGlobalData()](/developers/documentation/scripting-apis/client-api/global-data-pool-functions/setglobaldata)
 - [getGlobalData()](/developers/documentation/scripting-apis/client-api/global-data-pool-functions/getglobaldata)
 - [getInstanceData()](/developers/documentation/scripting-apis/client-api/instance-data-functions/getinstancedata)
 - [setInstanceData()](/developers/documentation/scripting-apis/client-api/instance-data-functions/setinstancedata)

