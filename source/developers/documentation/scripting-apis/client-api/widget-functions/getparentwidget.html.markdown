---
old_url: getparentwidget.htm
title: "getParent()"
active_menu_item: developers
class_name: developers
full_width: true
---


**getParent** (widgetName)

## Parameters

<table>
<tr>
<td width="136">
{string} widgetName

</td>
<td width="22">
</td>
<td width="722">
  the Name or GUID of the Widget or a <a href="/developers/documentation/scripting-apis/client-api/objects-titbits/widget-object">Widget Object</a>

</td>
</tr>
</table>
## Description

This returns the Widget object that is the parent of 'widgetName'. If you want to get the Parent of a Widget that is inside a Repeater, refer to the [parent()](/developers/documentation/scripting-apis/client-api/widget-object-functions/general/parent) Widget Object Function.

This is very useful when processing Repeater Containers. If a Respondent clicks on a Widget within a Repeater group, you might then want to perform a calculation involving other Widgets within the same Repeater group.

## Example

For a good example of this, refer to the [populateWidget()](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/populatewidget/) function.

## See Also

 - [parent()](/developers/documentation/scripting-apis/client-api/widget-object-functions/general/parent)
 - [populateWidget()](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/populatewidget/)
 - [Widget Object](/developers/documentation/scripting-apis/client-api/objects-titbits/widget-object)

