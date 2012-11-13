---
title: "setInstanceData()"
active_menu_item: developers
class_name: developers
full_width: true
---


**setInstanceData** (obj)

## Parameters

<table>
<tr>
<td width="134">
{object} obj

</td>
<td width="20">
</td>
<td width="750">
  The Instance Data object to be restored that was previously acquired with <a href="/developers/user-guide/scripting-apis/client-api/app-functions/getappsnapshot">getAppSnapshot()</a>

</td>
</tr>
</table>
## Description

This function restores a single data Instance that was created using [getInstanceData()](/developers/user-guide/scripting-apis/client-api/instance-data-functions/getinstancedata) . If you had converted the object into a JSON string, you can convert it back into an object using [JSON2OBJ()](/developers/user-guide/scripting-apis/client-api/conversion-functions/text2json) . However, if you retrieve it back from an external web service call using our own  httpRequest() function, it will do the conversion for you.

 - [setAppSnapshot()](/developers/user-guide/scripting-apis/client-api/app-functions/setappsnapshot)
 - [getAppSnapshot()](/developers/user-guide/scripting-apis/client-api/app-functions/getappsnapshot)
 - [switchApp()](/developers/user-guide/scripting-apis/client-api/app-functions/switchapp)
 - [setGlobalData()](/developers/user-guide/scripting-apis/client-api/global-data-pool-functions/setglobaldata)
 - [getGlobalData()](/developers/user-guide/scripting-apis/client-api/global-data-pool-functions/getglobaldata)
 - [getInstanceData()](/developers/user-guide/scripting-apis/client-api/instance-data-functions/getinstancedata)
 - [setInstanceData()](/developers/user-guide/scripting-apis/client-api/instance-data-functions/setinstancedata)
 - [dataSetValues()](/developers/user-guide/scripting-apis/client-api/widget-data-state-manipulation/datasetvalues)
 - [dataSetStates()](/developers/user-guide/scripting-apis/client-api/widget-data-state-manipulation/datasetstates)

