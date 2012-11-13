---
title: "getData()"
active_menu_item: developers
class_name: developers
full_width: true
---


{variable data type} **getData** (widgetName)

## Parameters

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
## Description

Allows you to read the contents of a Widget. Listbox type Widgets are returned as the complete set of list items rather than the selected values (see [getValue()](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/refsetvalue) for this).

It is recommended you read the chapter [Interacting with Widgets](/developers/documentation/scripting-apis/client-scripting-overview/scripting-with-javascript/widget-reading-writing/) . You need to be aware of how getData() and [getValue()](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/refgetvalue) work with different Widget types.

## Example

There are examples in the [Reading & Writing App Data](/developers/documentation/scripting-apis/client-scripting-overview/scripting-with-javascript/widget-reading-writing/) chapter.

## See Also

 - [getData() for Listbox and Drop Down](/developers/documentation/scripting-apis/client-scripting-overview/scripting-with-javascript/widget-reading-writing/widget-content-reading-and-writing/lists-dropdowns) Widgets

 - [getData() for Grids](/developers/documentation/scripting-apis/client-scripting-overview/scripting-with-javascript/widget-reading-writing/widget-content-reading-and-writing/widgetcontentgrids-repeater-containers)
 - [populateWidget()](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/populatewidget/) for populating Grids and Repeater Containers with JSON data

