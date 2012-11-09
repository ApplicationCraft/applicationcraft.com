---
title: "fillColor()"
active_menu_item: developers
class_name: developers
full_width: true
---


## fillColor (color)

Parameters

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

Description

How you can set the fill color for overlays

## Example

    app.w('googleMapsAdvanced').fillColor("#" + (Math.round(Math.random() * 16777215)).toString(16));  //Set Random Fill Color
    app.w('googleMapsAdvanced').fillColor("#00ff00");
   

## See Also:

 - [strokeColor()](strokecolor.htm)

 - [strokeOpacity()](strokeopacity.htm)

 - [strokeWeight()](strokeweight.htm)

 - [fillOpacity()](fillopacity.htm)

 - [Working with Overlays](../../../../product-guide/advanced-important-widgets/google-v3-maps-widget/working-with-overlays/index.htm)

