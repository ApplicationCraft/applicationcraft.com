---
old_url: working_with_overlays.htm
title: "Working with Overlays"
active_menu_item: developers
class_name: developers
full_width: true
---


This chapter deals with the Overlay types supported by the Application Craft Advanced Maps Widget. Overlays can be created individually with dedicated functions such as [addMarker()](/developers/documentation/scripting-apis/client-api/widget-object-functions/advanced-maps/addmarker) or all at once using [populateWidget()](/developers/documentation/product-guide/advanced-important-widgets/google-v3-maps-widget/using-populatewidget) .

Below is the list of available types and their type values and the corresponding function name for creating them.

<table>
<tr>
<td width="182">
  <strong>Overlay Object Type</strong>

</td>
<td width="8">
</td>
<td width="85">
  <strong>Value</strong>

</td>
<td width="301">
  <strong>Function Name</strong>

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
  <a href="/developers/documentation/scripting-apis/client-api/widget-object-functions/advanced-maps/addmarker">addMarker()</a>

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
  <a href="/developers/documentation/scripting-apis/client-api/widget-object-functions/advanced-maps/addpolyline">addPolyline()</a>

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
  <a href="/developers/documentation/scripting-apis/client-api/widget-object-functions/advanced-maps/addpolygon">addPolygon()</a>

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
  <a href="/developers/documentation/scripting-apis/client-api/widget-object-functions/advanced-maps/addcircle">addCircle()</a>

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
  <a href="/developers/documentation/scripting-apis/client-api/widget-object-functions/advanced-maps/addrectangle">addRectangle()</a>

</td>
</tr>
</table>

This map example shows all five types

![advanced-maps-populateWidget](/img/docs/advanced-maps-populatewidget.png)

