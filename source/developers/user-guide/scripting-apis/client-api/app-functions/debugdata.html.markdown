---
title: "debugData()"
active_menu_item: developers
class_name: developers
full_width: true
---


## object debugData (optional widgetName or widgetNameArray)

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
An Widget name or an array or Widget names that should be collected into an object that can be viewed easily in the debugger. If you do not specify a parameter, then AC assumes all widgets are required.

</td>
</tr>
</table>

Description

This debug function instructs AC to collect the widget contents into an object that can be easily viewed in your Javascript debugger. You can include this in your Javascript code or enter it directly into your debugger to inspect any Widgets of interest.

Note that you should use debugValues() for data entry or listbox, repeater or listbox selections. debugData shows the contents of Grids, Repeaters, Dropdowns and List Boxes although it also shows the same as debugValues() for simple widgets like text boxes.

Example

    watchVars = app.debugData(["gridWidget", "repeaterContainer"]); // Watches 2 widgets
    singleWatchVar = app.debugData('firstName'); // watches a text field. Returns the same as debugValues()
    debugger;
   

See Also:

 - [Debugging](../../../product-guide/advanced-features/testing-apps/debugging)

 - [debugOutput()](debugoutput)

 - [debugValues()](debugvalues)

 - [debugProperties()](debugproperties)

