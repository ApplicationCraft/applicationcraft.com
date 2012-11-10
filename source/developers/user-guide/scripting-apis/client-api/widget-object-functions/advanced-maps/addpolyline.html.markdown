---
title: "addPolyline()"
active_menu_item: developers
class_name: developers
full_width: true
---


**addPolyline** (coords)

## Parameters

<table>
<tr>
<td width="169">
{string} coords

</td>
<td width="17">
</td>
<td width="694">
An array of lat/long pairs defining your Polyline points

</td>
</tr>
</table>
## Description

Polylines are formed as a set of latitude/longitude pairs. You can also control the visual properties.

**Example**

    function@handler_actionBtn7_onClick(mouseev){
          var polylinePath = [
                    [37.772323, -122.214897],
                    [21.291982, -157.821856],
                    [-18.142599, 178.431],
                    [-27.46758, 153.027892]
                ];
                polylineObj = app.w('googleMapsAdvanced').addPolyline(polylinePath);
        
    }
   

**See Also:**

 - [Polylines](../../../../product-guide/advanced-important-widgets/google-v3-maps-widget/working-with-overlays/polylines)

