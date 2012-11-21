---
old_url: fillcolor.htm
title: "fillColor()"
active_menu_item: developers
class_name: developers
full_width: true
---


**fillColor** (color)

## Parameters

<table>
<tr>
<td width="169">
{string] color

</td>
<td width="17">
</td>
<td width="694">
Set the overlay fill color

</td>
</tr>
</table>
## Description

How you can set the fill color for overlays

## Example

     
    app.w('googleMapsAdvanced').fillColor("#" + (Math.round(Math.random() * 16777215)).toString(16));  //Set Random Fill Color
    app.w('googleMapsAdvanced').fillColor("#00ff00");
     
     
   

## See Also

 - [strokeColor()](/developers/documentation/scripting-apis/client-api/widget-object-functions/advanced-maps/strokecolor)
 - [strokeOpacity()](/developers/documentation/scripting-apis/client-api/widget-object-functions/advanced-maps/strokeopacity)
 - [strokeWeight()](/developers/documentation/scripting-apis/client-api/widget-object-functions/advanced-maps/strokeweight)
 - [fillOpacity()](/developers/documentation/scripting-apis/client-api/widget-object-functions/advanced-maps/fillopacity)
 - [Working with Overlays](/developers/documentation/product-guide/advanced-important-widgets/google-v3-maps-widget/working-with-overlays/)

