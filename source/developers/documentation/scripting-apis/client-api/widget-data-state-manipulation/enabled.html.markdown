---
old_url: enabled.htm
title: "enabled()"
active_menu_item: developers
class_name: developers
full_width: true
---


**enabled** (widget, value)

## Parameters

<table>
<tr>
<td width="166">
  { <a href="/developers/documentation/scripting-apis/client-api/objects-titbits/widget-list-parameters">wlist</a> } widget

</td>
<td width="1">
</td>
<td width="740">
Widget identifier - string, string array, object or object array

</td>
</tr>
<tr>
<td width="166">
{string} value

</td>
<td width="1">
</td>
<td width="740">
the value to set the property to: true/false

</td>
</tr>
</table>

## Description

This is a utility function that enables you to set the 'enable' property of one or more Widgets. It is the functional equivalent to app.setProperty('widgetName', 'enable', true|false). Its purpose is simply to reduce the amount of code and also to make code easier to read.

## Example

    app.enabled(["timeColor", "shapeColor"], true);  // make the listed widgets enabled
    app.enabled(["timeColor"], true);                // make a single widget enabled
        
   

## See Also

 - [visible()](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/visible)
 - [readOnly()](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/readonly)
 - [setProperty()](/developers/documentation/scripting-apis/client-api/widget-functions/setproperty)

