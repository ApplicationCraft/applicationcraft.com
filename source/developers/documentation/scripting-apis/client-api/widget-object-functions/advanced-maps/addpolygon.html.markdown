---
title: "addPolygon()"
active_menu_item: developers
class_name: developers
full_width: true
---


**addPolygon** (coords)

## Parameters

<table>
<tr>
<td width="169">
{array} coords

</td>
<td width="17">
</td>
<td width="694">
An array of lat/long pairs defining your Polyline points

</td>
</tr>
</table>
## Description

A Polygon can be drawn on the Map by specifying an array of coordinates. You can also specify line and fill properties.

## Example

    function handler_actionBtn10_onClick(mouseev){
          var polygonPath = [
                    [25.774252, -80.190262],
                    [18.466465, -66.118292],
                    [32.321384, -64.75737]
                ];
                polygonObj = app.w('googleMapsAdvanced').
    (polygonPath,  {fillColor: "#00ffff", strokeWeight:2});
    }
     
     
   

**addPolygon**

## See Also

 - [Polygons](/developers/documentation/product-guide/advanced-important-widgets/google-v3-maps-widget/working-with-overlays/polygons)

