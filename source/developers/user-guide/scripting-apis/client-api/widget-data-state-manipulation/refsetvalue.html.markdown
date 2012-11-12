---
title: "setValue()"
active_menu_item: developers
class_name: developers
full_width: true
---


**setValue** (widget, optional columnId, value)

## Parameters

<table>
<tr>
<td width="173">
{ [wlist](/developers/user-guide/scripting-apis/client-api/objects-titbits/widget-list-parameters) } widgetName

</td>
<td width="19">
</td>
<td width="688">
Widget identified - string, string array, object or object array.

</td>
</tr>
<tr>
<td width="173">
{string} optional columnId

</td>
<td width="19">
</td>
<td width="688">
if the Widget is a Grid, then specified the Column number (0-based)

</td>
</tr>
<tr>
<td width="173">
{string} value

</td>
<td width="19">
</td>
<td width="688">
the value to write

</td>
</tr>
</table>
## Description

Allows you to set the contents of a Widget.

It is recommended you read the chapter [Interacting with Widgets](/developers/user-guide/scripting-apis/client-scripting-overview/scripting-with-javascript/widget-reading-writing/) . You need to be aware of how setData() and setValue() work with different Widget types.

## Example

There are examples in the [Reading & Writing App Data](/developers/user-guide/scripting-apis/client-scripting-overview/scripting-with-javascript/widget-reading-writing/) chapter.

## See Also

 - [setValue() for Simple Widget](/developers/user-guide/scripting-apis/client-scripting-overview/scripting-with-javascript/widget-reading-writing/widget-values-reading-writing-user-entered-data/widgetsimple-widgets) types

 - [setValue() for Listbox and Drop Down](/developers/user-guide/scripting-apis/client-scripting-overview/scripting-with-javascript/widget-reading-writing/widget-values-reading-writing-user-entered-data/lists-dropdown-widgets) Widgets

 - [setValue() for Grids](/developers/user-guide/scripting-apis/client-scripting-overview/scripting-with-javascript/widget-reading-writing/widget-values-reading-writing-user-entered-data/grids-repeater-containers)

