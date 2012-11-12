---
title: "debugProperties()"
active_menu_item: developers
class_name: developers
full_width: true
---


object **debugProperties** (optional widgetName or widgetNameArray)

## Parameters

<table>
<tr>
<td width="179">
{ {string} widgetName or

{array} widgetNameArray

</td>
<td width="14">
</td>
<td width="687">
An Widget name or an array or Widget names that should be collected into an object that can be viewed easily in the debugger. If you do not specify a parameter, then AC assumes all widgets are required.

</td>
</tr>
</table>
## Description

This debug function instructs AC to collect all properties of the specified Widgets into an object that can be easily viewed in your Javascript debugger. You can include this in your Javascript code or enter it directly into your debugger to inspect any Widgets of interest.

## Example

    watchVars = app.debugProperties(["firstWidgetName", "anotherWidgetName"]); // Watches 2 widgets
    singleWatchVar = app.debugProperties('anyWidget'); // watches a single Widget
    debugger;
       
   

## See Also

 - [Debugging](/developers/user-guide/product-guide/advanced-features/testing-apps/debugging)

 - [debugOutput()](/developers/user-guide/scripting-apis/client-api/app-functions/debugoutput)

 - [debugValues()](/developers/user-guide/scripting-apis/client-api/app-functions/debugvalues)

 - [debugData()](/developers/user-guide/scripting-apis/client-api/app-functions/debugdata)

 - [getProperty()](/developers/user-guide/scripting-apis/client-api/widget-functions/getproperty)

 - [setProperty()](/developers/user-guide/scripting-apis/client-api/widget-functions/setproperty)

