---
title: "deleteRow()"
active_menu_item: developers
class_name: developers
full_width: true
---


## deleteRow (optional index)

Parameters

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

Description

This is a function of the widget object, so it is used as objWidget.deleteRow() rather than app.deleteRow(). It removes the row 'index' from a Grid or Repeater Container Widget.

If no parameter is supplied, then for a Grid object it removes the selected row. For a Repeater Container Row object, you need to supply a row index as shown in an example below..

Examples

These two show a specific row being deleted from a Grid or a Container

    app.w('repeatContainer1').deleteRow(rowIndex);  // deletes a specific row
    app.w('grid2').deleteRow(rowIndex);
    _widget.parent().rowIndex()
    rowObj = app.w('myRepeater').deleteRow(_widget.parent().rowIndex());
   

And this shows a typical example of a Delete button being pressed in a Repeater row. The function returns the row index of the parent (which is a row) of the delete button.

## Important : Repeater containers can have complex, nested container structures, so if you are having problems refer to the [parent()](../general/parent) topic.

See Also:

 - [deleteRow()](deleterow)

 - [deleteRowById()](deleterowbyid)

 - [deleteSelectedRows()](deleteselectedrows)

 - [insertRow()](insertrow)

 - [Widget Object](../../objects-titbits/widget-object)

