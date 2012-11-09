---
title: "debugValues()"
active_menu_item: developers
class_name: developers
full_width: true
---


## object debugValues (optional widgetName or widgetNameArray)

Parameters

<table>
<tr>
<td width="142">
{ {string} Widget or

{array} Widgets

</td>
<td width="15">
</td>
<td width="723">
A Widget name, an array of Widget names or Widget objects that should be collected into an object that can be viewed easily in the debugger. If you do not specify a parameter, then AC assumes all widgets are required.

</td>
</tr>
</table>

Description

This debug function instructs AC to collect the widget data values into an object that can be easily viewed in your Javascript debugger. You can include this in your Javascript code or enter it directly into your debugger to inspect any Widgets of interest.

Example

    watchVar = app.debugValues(["firstName", "Email", "Listbox"]);
    watchSingleVar = app.debugValues('widgetName');
    debugger;
   

See Also:

 - [Debugging](../../../product-guide/advanced-features/testing-apps/debugging)

 - [debugOutput()](debugoutput)

 - [debugData()](debugdata)

 - [debugProperties()](debugproperties)

