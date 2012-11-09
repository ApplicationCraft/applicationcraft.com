---
title: "getData()"
active_menu_item: developers
class_name: developers
full_width: true
---


## {variable data type} getData (widgetName)

Parameters

<table>
<tr>
<td width="136">
{string} widgetName

</td>
<td width="22">
</td>
<td width="722">
the Name or GUID of the Widget, or can also be a Widget object

</td>
</tr>
</table>

Description

Allows you to read the contents of a Widget. Listbox type Widgets are returned as the complete set of list items rather than the selected values (see [getValue()](refsetvalue.htm) for this).

It is recommended you read the chapter [Interacting with Widgets](../../client-scripting-overview/scripting-with-javascript/widget-reading-writing/index.htm) . You need to be aware of how getData() and [getValue()](refgetvalue.htm) work with different Widget types.

Example

There are examples in the [Reading & Writing App Data](../../client-scripting-overview/scripting-with-javascript/widget-reading-writing/index.htm) chapter.

See Also:

 - [getData() for Listbox and Drop Down](../../client-scripting-overview/scripting-with-javascript/widget-reading-writing/widget-content-reading-and-writing/lists--dropdowns.htm) Widgets

 - [getData() for Grids](../../client-scripting-overview/scripting-with-javascript/widget-reading-writing/widget-content-reading-and-writing/widgetcontentgrids--repeater-containers.htm)

 - [populateWidget()](populatewidget.htm) for populating Grids and Repeater Containers with JSON data

