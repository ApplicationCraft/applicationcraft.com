---
title: "insertRow()"
active_menu_item: developers
class_name: developers
full_width: true
---


index **insertRow** (position, optional data)

## Parameters

<table>
<tr>
<td width="169">
{integer} index

</td>
<td width="17">
</td>
<td width="694">
Returns the index within the Widget of the newly created row

</td>
</tr>
<tr>
<td width="169">
{integer} position

</td>
<td width="17">
</td>
<td width="694">
If position is a numeric value, then it will insert data above the specified row in a Grid or Container

</td>
</tr>
<tr>
<td width="169">
{string} position

</td>
<td width="17">
</td>
<td width="694">
Alternatively, you can use any of these string 'top', 'bottom', 'above', 'beneath' to insert a row. Note that 'above' and 'beneath' work only for Grid Widgets, not Repeater Container.

</td>
</tr>
<tr>
<td width="169">
{string array} data

</td>
<td width="17">
</td>
<td width="694">
If you are adding a new row of data to a Grid Widget, then you can pass a string array to populate the Grid with new data. You can also leave this parameter empty and populate the row later.

</td>
</tr>
<tr>
<td width="169">
{object array} data

</td>
<td width="17">
</td>
<td width="694">
For Repeater Containers, you should pass in an object array of the following object format {'widget1':'value1'}

</td>
</tr>
</table>
## Description

This is a function of the widget object that inserts a row into a Grid or Repeater Container. It returns a row index for the newly created row.

If you specify a Repeater Container, then you can use getRow(index) to get the row object for that newly created row, which in turn gives you access to the row's widgets using the .w() function of that row object.

Read the [Interacting with Widgets](../../../client-scripting-overview/scripting-with-javascript/widget-reading-writing/) chapter to learn more about reading from and writing to Grids and Repeater Containers.

## Example

The following examples inserts a new row at the top of a Repeater Container and then populates the named Widgets within that new row.

    app.w('repeater').insertRow('top',@{'lblItem':'Hammer',@'lblPrice':9.55});
     
     
    app.w('grid').insertRow('top',@['Hammer',@9.55]);
   

and this one does the same to a Grid

## See Also:

 - [deleteRow()](deleterow.htm)

 - [deleteRowById()](deleterowbyid.htm)

 - [deleteSelectedRows()](deleteselectedrows.htm)

 - [insertRow()](insertrow.htm)

 - [rowIndex()](rowindex.htm)

 - [getRow()](getrow.htm)

 - [Widget Object](../../objects-titbits/widget-object)

