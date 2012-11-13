---
title: "Data Integration with the Maps Widget"
active_menu_item: developers
class_name: developers
full_width: true
---


Data Integration allows you to retrieve data from an Application Craft Query and automatically populate Markers or other overlays onto your map.

Provided you can pull data directly from a query that can supply the necessary data direct to the Maps widget, you can then achieve map population completely code free.

Accessing Data is the same as for any other Queries. This process is described in the [Data Integration](/developers/documentation/product-guide/advanced-features/data-integration-reporting-dashboards/) section.

If your data source is storing Latitude and Longitude in separate fields you will need to join these in the field mapping for the Coords field

![latlng](/img/docs/latlng.zoom90.png)

Example showing data from Postgres DB (and also if using a [Data List](/developers/documentation/product-guide/advanced-features/data-lists-management/) )

For other databases see: [MySQL, Postgres, Oracle etc.](/developers/documentation/scripting-apis/client-api/data-view-functions/mysql-postegres-oracle-etc)

The following table explains all of the possible fields

(You do not need to specify all of the fields, in which case they should be omitted from the mapping)

<table>
<tr>
<td width="151">
Field Expression Name

</td>
<td width="14">
</td>
<td width="833">
Description

</td>
</tr>
<tr>
<td width="151">
  <strong>id</strong>

</td>
<td width="14">
</td>
<td width="833">
The text ID of the overlay object that will get created. Use this to identify the overlay if clicked on or the overlay objects are inspected and need to be identified and tied back to your data source

</td>
</tr>
<tr>
<td width="151">
  <strong>type</strong>

</td>
<td width="14">
</td>
<td width="833">
This value indicates the type of overlay to be created (see table below this one)

</td>
</tr>
<tr>
<td width="151">
  <strong>coords</strong>

</td>
<td width="14">
</td>
<td width="833">
A string representing coordinates. A single coordinate is represented as "lat, lng" and multiple coordinates (rectangles, polylines, polygons) as "lat1, lng1; lat2, lng2; ....; latn, lngn"

</td>
</tr>
<tr>
<td width="151">
  <strong>radius</strong>

</td>
<td width="14">
</td>
<td width="833">
The radius of a circle in meters

</td>
</tr>
<tr>
<td width="151">
  <strong>strokeColor</strong>

</td>
<td width="14">
</td>
<td width="833">
Color of the line defining the overlay in hex format

</td>
</tr>
<tr>
<td width="151">
  <strong>strokeWeight</strong>

</td>
<td width="14">
</td>
<td width="833">
Thickness of the line defining the overlay in pixels

</td>
</tr>
<tr>
<td width="151">
  <strong>strokeOpacity</strong>

</td>
<td width="14">
</td>
<td width="833">
% opacity of the line defining the overlay

</td>
</tr>
<tr>
<td width="151">
  <strong>fillColor</strong>

</td>
<td width="14">
</td>
<td width="833">
The color of the inside or fill area of the overlay in hex

</td>
</tr>
<tr>
<td width="151">
  <strong>fillOpacity</strong>

</td>
<td width="14">
</td>
<td width="833">
% opacity of the inside or fill area of the overlay

</td>
</tr>
<tr>
<td width="151">
  <strong>mouseOverHTML</strong>

</td>
<td width="14">
</td>
<td width="833">
HTML displayed as a popup when the user moves the mouse over a marker

</td>
</tr>
<tr>
<td width="151">
  <strong>onClickHTML</strong>

</td>
<td width="14">
</td>
<td width="833">
HTML displayed as a popup when the user clicks a marker

</td>
</tr>
<tr>
<td width="151">
  <strong>markerImageURL</strong>

</td>
<td width="14">
</td>
<td width="833">
Alternative Image URL of the marker

</td>
</tr>
</table>

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
</tr>
</table>

If you have data in an AC Query but you need to do some pre-processing before passing it into the map, then you should follow these steps

 - use [getViewData()](/developers/documentation/scripting-apis/client-api/data-view-functions/getviewdata) to retrieve your data

 - process the array of data in any way you like

 - use [populateWidget()](/developers/documentation/product-guide/advanced-important-widgets/google-v3-maps-widget/using-populatewidget) to write the array into the Map widget

## See Also

 - [MySQL, Postgres, Oracle etc.](/developers/documentation/scripting-apis/client-api/data-view-functions/mysql-postegres-oracle-etc)

