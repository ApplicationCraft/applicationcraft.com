---
title: "deleteRowById()"
active_menu_item: developers
class_name: developers
full_width: true
---


**deleteRowById** (Id)

## Parameters

<table>
<tr>
<td width="116">
{string} Id

</td>
<td width="14">
</td>
<td width="750">
the string Id of the Grid row to be deleted

</td>
</tr>
</table>
## Description

This is a function of the widget object, so it is used as objWidget.deleteRow() rather than app.deleteRow(). It removes the row with the specified Id from a Grid Widget. This will only be needed in rare circumstances and you are more likely to use deleteRow().

Populating Grids with Id values is [described here](/developers/user-guide/scripting-apis/client-scripting-overview/scripting-with-javascript/widget-reading-writing/widget-content-reading-and-writing/widgetcontentgrids-repeater-containers) .

## See Also

 - [deleteRow()](/developers/user-guide/scripting-apis/client-api/widget-object-functions/repeater-grid/deleterow)
 - [deleteSelectedRows()](/developers/user-guide/scripting-apis/client-api/widget-object-functions/repeater-grid/deleteselectedrows)
 - [insertRow()](/developers/user-guide/scripting-apis/client-api/widget-object-functions/repeater-grid/insertrow)
 - [Widget Object](/developers/user-guide/scripting-apis/client-api/objects-titbits/widget-object)

