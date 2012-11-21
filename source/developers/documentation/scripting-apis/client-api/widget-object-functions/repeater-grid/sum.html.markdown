---
old_url: sum.htm
title: "sum()"
active_menu_item: developers
class_name: developers
full_width: true
---


total = **sum** (column)

total = **sum** (widget)

## Parameters

<table>
<tr>
<td width="199">
{float} total

</td>
<td width="9">
</td>
<td width="672">
The result of the sum() function

</td>
</tr>
<tr>
<td width="199">
{string} column

</td>
<td width="9">
</td>
<td width="672">
A Grid column name string or 0-based number

</td>
</tr>
<tr>
<td width="199">
{string} widget

</td>
<td width="9">
</td>
<td width="672">
A Widget name or object that is a part of a Repeater Container

</td>
</tr>
</table>
## Description

Calculates the sum of either the column in a Grid or a Widget across all rows of a Repeater Container.

## Example

This calculates the total of the 'lblTotals' widget cross all Repeater rows and writes the result to the 'lblGrandTotal' widget.

    app.setValue("lblGrandTotal", app.w("rptOrders").sum("lblTotal"));
   
