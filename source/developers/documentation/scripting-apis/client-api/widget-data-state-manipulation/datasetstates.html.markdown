---
title: "dataSetStates()"
active_menu_item: developers
class_name: developers
full_width: true
---


**dataSetStates** (strPageOrWidget)

**dataSetStates** (strPageOrWidgets[])

## Parameters

<table>
<tr>
<td width="186">
{string} strPageOrWidget

</td>
<td width="16">
</td>
<td width="678">
A object containing widget key names and values

</td>
</tr>
<tr>
<td width="186">
{wlist} strPageOrWidgets

</td>
<td width="16">
</td>
<td width="678">
An array of objects containing widget key names and values

</td>
</tr>
</table>
## Returns

This does not return a value.

## Description

This function performs the inverse of [app.dataGetStates()](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/datagetstates) . You pass in an object that is made up of key names that must correspond to Widget names. The object associated with each key is then used to set the state properties of those widgets.

Each object can contain any number of widgets but must be formatted as follows. Any extra key fields will be ignored and will not generate an error.

    {
     "txtFirstName":{
       "visible":true|false,
       "enabled":true|false
     },
     "txtLast":{
       "visible":true|false,
     "enabled":true|false
     }
    };
        
   

## Examples

The following example populates two widgets. The third widget does not exist but the system will simply ignore it, so it is safe to mix in other key fields.

		var rObj = {"txtFirst":{"visible":false}, "txtLast":{"visible":false}};
        app.dataSetStates(rObj);

## See Also

 - [dataGetValues()](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/datagetvalues)
 - [dataGetStates()](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/datagetstates)
 - [dataSetValues()](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/datasetvalues)
 - [Server Side Data Storage](/developers/documentation/product-guide/data-storage/server-side-data-storage/)
 - [SSJ database functions](/developers/documentation/product-guide/data-storage/server-side-data-storage/)
 - [Instance Data Functions](/developers/documentation/scripting-apis/client-api/instance-data-functions/)
