---
title: "resetWidget()"
active_menu_item: developers
class_name: developers
full_width: true
---


**resetWidget** (optional widget, optional useDefaults, optional restoreContent)

## Parameters

<table>
<tr>
<td width="183">
{ [wlist](../objects-titbits/widget-list-parameters) } widget

</td>
<td width="9">
</td>
<td width="688">
Widget identifier - string, string array, object or object array

</td>
</tr>
<tr>
<td width="183">
{boolean} useDefaults

</td>
<td width="9">
</td>
<td width="688">
True means that the default content of the Widget is restored, false sets widgets to null including Label Widgets

</td>
</tr>
<tr>
<td width="183">
{boolean} restoreContent

</td>
<td width="9">
</td>
<td width="688">
Applies only to Grids and Repeater Containers. If true, then the original contents of these Widgets is restored.

</td>
</tr>
</table>
## Description

This removes all selection data for the specified Widget. Text, number, date and other simple fields will be emptied. Grids, Lists, Dropdowns, Repeater Containers and other complex objects will keep their content but selections will be removed unless restoreContent is set to true, in which case they will be reset.

The useDefaults parameter should be set to true if you do not want to clear label content.

## **Example**

    app.resetWidget(['mlCountries','mlLogs'],true,true); // reset 2 mobile lists to the default settings
   

## See Also

 - [emptyWidget()](emptywidget.htm)

Related Videos:

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/TrfVkAavkOQ?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Data Containers Explained [4:25]

