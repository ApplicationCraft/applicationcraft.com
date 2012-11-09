---
title: "addCircle()"
active_menu_item: developers
class_name: developers
full_width: true
---


## addCircle (coords,radius,....)

Parameters

<table>
<tr>
<td width="169">
{string} coords

</td>
<td width="17">
</td>
<td width="694">
An Array of Lat/Long for the center of the circle

</td>
</tr>
<tr>
<td width="169">
(integer) radius

</td>
<td width="17">
</td>
<td width="694">
The radius of your circle (meters)

</td>
</tr>
</table>

Description

A Circle can be drawn on the Map with a radius as well as line and fill properties.

## Example

    function handler_actionBtn11_onClick(mouseev){
    var circle = [[41.878113, -87.629798], 200000, "Title Text"];
    circleObj = app.w('googleMapsAdvanced').
    (circle);
    }
   

## addCircle

## See Also:

 - [Circles](../../../../product-guide/advanced-important-widgets/google-v3-maps-widget/working-with-overlays/circles)

