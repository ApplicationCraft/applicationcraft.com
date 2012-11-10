---
title: "rowIndex()"
active_menu_item: developers
class_name: developers
full_width: true
---


index **rowIndex** ()

## Parameters

<table>
<tr>
<td width="169">
{integer} index

</td>
<td width="17">
</td>
<td width="694">
the index within a Repeater (not Grid) of a Repeater Container Row

</td>
</tr>
</table>
## Description

A function of a Repeater Container row object, it returns the row index of a Repeater Container's row. This function is not available for the Grid widget.

Read the [Interacting with Widgets](../../../client-scripting-overview/scripting-with-javascript/widget-reading-writing/) chapter to learn more about reading from and writing to Grids and Repeater Containers.

**Important** : Repeater containers can have complex, nested container structures, so if you are having problems refer to the [parent()](../general/parent) topic.

## Example

    rowObj = app.w('myRepeater').getRow(_widget.parent().rowIndex());
    app.setValue(rowObj.w('total'), app.getValue(rowObj.w('quantity')) * app.getValue(rowObj.w('price'));
   

This example might run in a text OnChange event. A quantity  is multiplied by the price to give the total.

## See Also

 - [getRow()](getrow.htm)

 - [rowCount()](length.htm)

