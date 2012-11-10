---
title: "emptyWidget()"
active_menu_item: developers
class_name: developers
full_width: true
---


**emptyWidget** (widget)

## Parameters

<table>
<tr>
<td width="146">
{ [wlist](../objects-titbits/widget-list-parameters) } widget

</td>
<td width="13">
</td>
<td width="721">
Widget identifier - string, string array, object or object array

</td>
</tr>
</table>
## Description

This empties the entire contents of a widget. Ordinary Widgets are cleared and Listbox, Grid and other complex Widgets have all row data removed.

## **Example**

    app.emptyWidget('txtName');
    app.emptyWidget(['txtName','txtEmail','txtAddress']);
   

## See Also

 - [resetWidget()](resetwidget.htm)

