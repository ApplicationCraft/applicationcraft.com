---
title: "getInstanceURL()"
active_menu_item: developers
class_name: developers
full_width: true
---


**getInstanceURL** (instanceId)

## Parameters

<table>
<tr>
<td width="136">
{string} instanceId

</td>
<td width="22">
</td>
<td width="722">
an App Instance ID

</td>
</tr>
</table>
## Description

This retrieves a url that can be used to load a specific App Instance in a browser.

## Example

This example gets the url of the currently running Instance. Note that the [Instance.ID] token will not be valid until an Instance has been either saved or loaded. When you create a new instance in an App it has no instance ID until saved.

    myUrl = app.getInstanceURL(app.getEnvValue("[Instance.Id]"));
   

## See Also

 - [instanceLoad()](/developers/documentation/scripting-apis/client-api/instance-data-functions/instanceload)
 - [instanceSave()](/developers/documentation/scripting-apis/client-api/instance-data-functions/instancesave)
 - [instanceCreate()](/developers/documentation/scripting-apis/client-api/instance-data-functions/instancecreate)

