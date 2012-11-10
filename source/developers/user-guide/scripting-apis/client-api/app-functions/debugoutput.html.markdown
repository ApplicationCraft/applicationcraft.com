---
title: "debugOutput()"
active_menu_item: developers
class_name: developers
full_width: true
---


**debugOutput** (objStringVar)

## Parameters

<table>
<tr>
<td width="142">
{string} objStringVar

</td>
<td width="15">
</td>
<td width="723">
Any string, Javascript object or variable to display in the debug console

</td>
</tr>
</table>

## Description

This displays a debug message to the Debug Console Window of your Chrome, Firebug or Safari debugger. You can output anything at all which makes for a great way to see the structure and contents of a Javascript object as well as simple strings or variables.

## Example

    app.debugOutput('My@Message');@//@Writes@a@simple@string
    app.debugOutput(obj);@@//@Or@view@a@Javascript@object@as@a@JSON@string
   

## See Also:

 - [Debugging](../../../product-guide/advanced-features/testing-apps/debugging)

 - [debugValues()](debugvalues.htm)

 - [debugData()](debugdata.htm)

 - [debugProperties()](debugproperties.htm)

