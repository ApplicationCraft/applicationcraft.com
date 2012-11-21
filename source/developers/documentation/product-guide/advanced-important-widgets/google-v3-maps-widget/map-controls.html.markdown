---
old_url: map_controls.htm
title: "Map Controls"
active_menu_item: developers
class_name: developers
full_width: true
---


The Map allows the following controls to be displayed to the user

 - Map Type - Map, Satellite etc.

 - Overview Map - A small arrow that lets you show a scaled down overview of the map.

 - Pan - Panning around the map (same as dragging with mouse or finger). On mobile devices you may want to use this if you have disabled finger based scrolling. If your map dominates the screen, it can be hard to scroll around the app as the map gets the scrolling events.

 - Rotate - The Google Maps API supports special 45° imagery for certain locations. This high-resolution imagery provides perspective views towards each of the cardinal directions (North, South, East, West). These images are available at higher zoom levels for supported map types.

 - Scale - shows the scale of the map at the current zoom level.

 - Streetview - shows a person icon that can be dragged into the map to switch to Streetview.

 - Zoom - control the zoom level

![advanced-map-controls](/img/docs/advanced-map-controls.zoom89.png)

The Map Controls are also accessible via a javascript object. The following code returns the Controls as an object.

    controlObj = app.getProperty('googleMapsAdvanced', 'mapcontrols');
    controlObj.gmMapType.visible = false;
   

Explore this object with the debugger to see available settings. The following table shows the available objects and their keys.

<table>
<tr>
<td width="202">
  <strong>Object Name</strong>

</td>
<td width="15">
</td>
<td width="418">
  <strong>Available Keys</strong>

</td>
</tr>
<tr>
<td width="202">
gmMapType

</td>
<td width="15">
</td>
<td width="418">
position, style, visible

</td>
</tr>
<tr>
<td width="202">
gmOverviewMap

</td>
<td width="15">
</td>
<td width="418">
position, visible

</td>
</tr>
<tr>
<td width="202">
gmPan

</td>
<td width="15">
</td>
<td width="418">
position, visible

</td>
</tr>
<tr>
<td width="202">
gmRotate

</td>
<td width="15">
</td>
<td width="418">
position, visible

</td>
</tr>
<tr>
<td width="202">
gmScale

</td>
<td width="15">
</td>
<td width="418">
position, visible

</td>
</tr>
<tr>
<td width="202">
gmStreetView

</td>
<td width="15">
</td>
<td width="418">
position, visible

</td>
</tr>
<tr>
<td width="202">
gmZoom

</td>
<td width="15">
</td>
<td width="418">
position, style, visible

</td>
</tr>
</table>

Where

 - visible - true or false

 - position - TOP\_LEFT, TOP\_CENTER, TOP\_RIGHT, RIGHT\_TOP, RIGHT\_CENTER, RIGHT\_BOTTOM, BOTTOM\_LEFT, BOTTOM\_CENTER, BOTTOM\_RIGHT, LEFT\_TOP, LEFT\_CENTER, LEFT\_BOTTOM

 - Map Type Style - DROPDOWN\_MENU, HORIZONTAL\_BAR, DEFAULT

 - Zoom Style -  SMALL, LARGE, DEFAULT

