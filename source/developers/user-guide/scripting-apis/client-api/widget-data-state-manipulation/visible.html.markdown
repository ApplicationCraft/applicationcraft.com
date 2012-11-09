---
title: "visible()"
active_menu_item: developers
class_name: developers
full_width: true
---


## visible ( widget , value)

Parameters

<table>
<tr>
<td width="166">
{ [wlist](../objects-titbits/widget-list-parameters.htm) } widget

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

Description

This is a utility function that enables you to set the 'visible' property of one or more Widgets. It is the functional equivalent to app.setProperty('widgetName', 'visible', true|false). Its purpose is simply to reduce the amount of code and also to make code easier to read.

Example

    app.visible(["timeColor", "shapeColor"], true);  // make the listed widgets visible
    app.visible(["timeColor"], true);                // make a single widget visible
   

See Also:

 - [enabled()](enabled.htm)

 - [readOnly()](readonly.htm)

 - [setProperty()](../widget-functions/setproperty.htm)

Related Videos:

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/TrfVkAavkOQ?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Data Containers Explained [4:25]
