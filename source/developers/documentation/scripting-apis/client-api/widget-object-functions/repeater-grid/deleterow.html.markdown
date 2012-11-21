---
old_url: deleterow.htm
title: "deleteRow()"
active_menu_item: developers
class_name: developers
full_width: true
---


**deleteRow** (optional index)

## Parameters

<table>
<tr>
<td width="169">
{integer} index

</td>
<td width="17">
</td>
<td width="694">
the index of the row to delete within the Grid or Repeater

</td>
</tr>
</table>
## Description

This is a function of the widget object, so it is used as objWidget.deleteRow() rather than app.deleteRow(). It removes the row 'index' from a Grid or Repeater Container Widget.

If no parameter is supplied, then for a Grid object it removes the selected row. For a Repeater Container Row object, you need to supply a row index as shown in an example below..

## Examples

These two show a specific row being deleted from a Grid or a Container

    app.w('repeatContainer1').deleteRow(rowIndex);  // deletes a specific row
    app.w('grid2').deleteRow(rowIndex);

And this shows a typical example of a Delete button being pressed in a Repeater row. The function `_widget.parent().rowIndex()` returns the row index of the parent (which is a row) of the delete button.     
    
    rowObj = app.w('myRepeater').deleteRow(_widget.parent().rowIndex());
     
     

**Important** : Repeater containers can have complex, nested container structures, so if you are having problems refer to the [parent()](/developers/documentation/scripting-apis/client-api/widget-object-functions/general/parent) topic.

## See Also

 - [deleteRow()](/developers/documentation/scripting-apis/client-api/widget-object-functions/repeater-grid/deleterow)
 - [deleteRowById()](/developers/documentation/scripting-apis/client-api/widget-object-functions/repeater-grid/deleterowbyid)
 - [deleteSelectedRows()](/developers/documentation/scripting-apis/client-api/widget-object-functions/repeater-grid/deleteselectedrows)
 - [insertRow()](/developers/documentation/scripting-apis/client-api/widget-object-functions/repeater-grid/insertrow)
 - [Widget Object](/developers/documentation/scripting-apis/client-api/objects-titbits/widget-object)
