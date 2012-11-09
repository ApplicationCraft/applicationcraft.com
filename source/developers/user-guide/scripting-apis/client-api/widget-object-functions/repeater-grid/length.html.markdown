---
title: "rowCount()"
active_menu_item: developers
class_name: developers
full_width: true
---


## numRows rowCount ()

Parameters

<table>
<tr>
<td width="169">
{integer} numRows

</td>
<td width="17">
</td>
<td width="694">
the total number of rows within the Grid or Repeater

</td>
</tr>
</table>

Description

This is a function of the widget object that returns the number of rows in a Grid or Repeater Widget.

Example

    numRows = app.w('myGrid').rowCount(); // returns the number of rows for a specified widget name
    numRows = _widget.rowCount();  // returns the number of rows in the Grid or Repeater that fired the event that _widget is running within
   

See Also:

 - [rowIndex()](rowindex)

 - [getRow()](getrow)

