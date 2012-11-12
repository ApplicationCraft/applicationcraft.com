---
title: "dataSetValues()"
active_menu_item: developers
class_name: developers
full_width: true
---


**dataSetValues** (strPageOrWidget)

**dataSetValues** (strPageOrWidgets[])

## Parameters

<table>
<tr>
<td width="186">
{string} strPageOrWidget

</td>
<td width="16">
</td>
<td width="678">
A single object containing multiple widget key names and values

</td>
</tr>
<tr>
<td width="186">
{wlist} strPageOrWidgets

</td>
<td width="16">
</td>
<td width="678">
An array of objects containing multiple widget key names and values

</td>
</tr>
</table>
## Returns

This does not return a value.

## Description

This function performs the inverse of [app.dataGetValues()](datagetvalues) . You pass in an object that is made up of key names that must correspond to Widget names. The value associated with each key is then used to populate those widgets.

## Examples

The following example populates two widgets. The third widget does not exist but the system will simply ignore it, so it is safe to mix in other key fields.

        var rObj = {"txtFirst":"Freddy", "txtLast":"May", "notAnACWidget":"rubbish"};
        vapp.dataSetValues(rObj);
   

## See Also

 - [dataGetValues()](datagetvalues)

 - [dataGetStates()](datagetstates)

 - [dataSetStates()](datasetstates)

 - [Server Side Data Storage](../../../product-guide/data-storage/server-side-data-storage/)

 - [SSJ database functions](../../../product-guide/data-storage/server-side-data-storage/)

 - [Instance Data Functions](../instance-data-functions/)

