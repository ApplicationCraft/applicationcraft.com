---
title: "Working with Overlays"
active_menu_item: developers
class_name: developers
full_width: true
---


This chapter deals with the Overlay types supported by the Application Craft Advanced Maps Widget. Overlays can be created individually with dedicated functions such as [addMarker()](../../../../scripting-apis/client-api/widget-object-functions/advanced-maps/addmarker) or all at once using [populateWidget()](using-populatewidget) .

Below is the list of available types and their type values and the corresponding function name for creating them.

<table>
<tr>
<td width="182">
## Overlay Object Type

</td>
<td width="8">
</td>
<td width="85">
## Value

</td>
<td width="301">
## Function Name

</td>
</tr>
<tr>
<td width="182">
Marker

</td>
<td width="8">
</td>
<td width="85">
0

</td>
<td width="301">
[addMarker()](../../../../scripting-apis/client-api/widget-object-functions/advanced-maps/addmarker)

</td>
</tr>
<tr>
<td width="182">
Polyline

</td>
<td width="8">
</td>
<td width="85">
1

</td>
<td width="301">
[addPolyline()](../../../../scripting-apis/client-api/widget-object-functions/advanced-maps/addpolyline)

</td>
</tr>
<tr>
<td width="182">
Polygon

</td>
<td width="8">
</td>
<td width="85">
2

</td>
<td width="301">
[addPolygon()](../../../../scripting-apis/client-api/widget-object-functions/advanced-maps/addpolygon)

</td>
</tr>
<tr>
<td width="182">
Circle

</td>
<td width="8">
</td>
<td width="85">
3

</td>
<td width="301">
[addCircle()](../../../../scripting-apis/client-api/widget-object-functions/advanced-maps/addcircle)

</td>
</tr>
<tr>
<td width="182">
Rectangle

</td>
<td width="8">
</td>
<td width="85">
4

</td>
<td width="301">
[addRectangle()](../../../../scripting-apis/client-api/widget-object-functions/advanced-maps/addrectangle)

</td>
</tr>
</table>

This map example shows all five types

![advanced-maps-populateWidget](/img/docs/advanced-maps-populatewidget.png)

