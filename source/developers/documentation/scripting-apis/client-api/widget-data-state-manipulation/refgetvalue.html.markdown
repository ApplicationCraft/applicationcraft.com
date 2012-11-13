---
title: "getValue()"
active_menu_item: developers
class_name: developers
full_width: true
---


{variable data type} **getValue** (widgetName)

## Parameters

<table>
<tr>
<td width="136">
{string} widgetName

</td>
<td width="22">
</td>
<td width="722">
the Name or GUID of the Widget

</td>
</tr>
</table>
## Description

Allows you to read the Respondent selected value of a Widget. For most simple Widgets, getValue() returns the same as getData().

It is recommended you read the chapter [Interacting with Widgets](/developers/documentation/scripting-apis/client-scripting-overview/scripting-with-javascript/widget-reading-writing/) . You need to be aware of how getData() and getValue() work with different Widget types.

Where getValue() returns an object (Listboxes, Grid, Repeater Containers etc) rather than a simple variable, your code will get a copy of the Widget object and not an object reference. This means that any manipulations you carry out on that object will need to be written back again with app.setValue() or widgetObj.value(). However, if you read a value using widgetObj.value(), then you get an object reference and not a copy of the object.

## Example

There are examples in the [Reading & Writing App Data](/developers/documentation/scripting-apis/client-scripting-overview/scripting-with-javascript/widget-reading-writing/) chapter.

## See also

 - [getValue() for Simple Widget](/developers/documentation/scripting-apis/client-scripting-overview/scripting-with-javascript/widget-reading-writing/widget-values-reading-writing-user-entered-data/widgetsimple-widgets) types

 - [getValue() for Listbox and Drop Down](/developers/documentation/scripting-apis/client-scripting-overview/scripting-with-javascript/widget-reading-writing/widget-values-reading-writing-user-entered-data/lists-dropdown-widgets) Widgets

 - [getValue() for Grids](/developers/documentation/scripting-apis/client-scripting-overview/scripting-with-javascript/widget-reading-writing/widget-values-reading-writing-user-entered-data/grids-repeater-containers)

## Related Videos

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/TrfVkAavkOQ?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Data Containers Explained [4:25]
