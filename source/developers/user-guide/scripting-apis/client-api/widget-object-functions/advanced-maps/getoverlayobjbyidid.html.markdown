---
title: "getOverlayObjById()"
active_menu_item: developers
class_name: developers
full_width: true
---


**getOverlayObjById** (id)

## Parameters

<table>
<tr>
<td width="169">
{obj} id

</td>
<td width="17">
</td>
<td width="694">
Returns the Google Maps API Overlay object

</td>
</tr>
</table>
## Description

Returns the Google Maps API Overlay object

**Example**

     
    var@circle@=@[[41.878113,@-87.629798],@200000];
    var@circleId@=@app.w('googleMapsAdvanced').addCircle(circle);
    var@overlay@=@app.w('googleMapsAdvanced').getOverlayObjById(circleId);
     
   

**See Also:**

 - [Using getOverlays()](../../../../product-guide/advanced-important-widgets/google-v3-maps-widget/working-with-overlays/using-getoverlays)

 - [getOverlays()](getoverlays.htm)

 - [Removing Overlays](../../../../product-guide/advanced-important-widgets/google-v3-maps-widget/working-with-overlays/removing-overlays)

