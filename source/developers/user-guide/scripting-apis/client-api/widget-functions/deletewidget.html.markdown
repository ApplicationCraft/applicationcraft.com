---
title: "deleteWidget()"
active_menu_item: developers
class_name: developers
full_width: true
---


**deleteWidget** (widgets);

<table>
<tr>
<td width="142">
{ [wlist](/developers/user-guide/scripting-apis/client-api/objects-titbits/widget-list-parameters) } widget

</td>
<td width="15">
</td>
<td width="723">
Widget identifier - string, string array, object or object array

</td>
</tr>
</table>

## Description

Allows you to dynamically delete widgets from your app

## Example

    app.deleteWidget('lblName');
    app.deleteWidget(['lblName','txtName']);
   

## See Also

 - [createWidget()](/developers/user-guide/scripting-apis/client-api/widget-functions/createwidget)

