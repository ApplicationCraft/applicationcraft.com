---
title: "setInstanceData()"
active_menu_item: developers
class_name: developers
full_width: true
---


## setInstanceData (obj)

Parameters

<table>
<tr>
<td width="134">
{object} obj

</td>
<td width="20">
</td>
<td width="750">
The Instance Data object to be restored that was previously acquired with [getAppSnapshot()](../app-functions/getappsnapshot)

</td>
</tr>
</table>

Description

This function restores a single data Instance that was created using [getInstanceData()](getinstancedata) . If you had converted the object into a JSON string, you can convert it back into an object using [JSON2OBJ()](../conversion-functions/text2json) . However, if you retrieve it back from an external web service call using our own  httpRequest() function, it will do the conversion for you.

 - [setAppSnapshot()](../app-functions/setappsnapshot)

 - [getAppSnapshot()](../app-functions/getappsnapshot)

 - [switchApp()](../app-functions/switchapp)

 - [setGlobalData()](../global-data-pool-functions/setglobaldata)

 - [getGlobalData()](../global-data-pool-functions/getglobaldata)

 - [getInstanceData()](getinstancedata)

 - [setInstanceData()](setinstancedata)

 - [dataSetValues()](../widget-data-state-manipulation/datasetvalues)

 - [dataSetStates()](../widget-data-state-manipulation/datasetstates)

