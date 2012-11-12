---
title: "strokeColor()"
active_menu_item: developers
class_name: developers
full_width: true
---


**strokeColor** (color)

## Parameters

<table>
<tr>
<td width="169">
{string} color

</td>
<td width="17">

</td>
<td width="694">
Set the Overlay line color

</td>
</tr>
</table>

Description

How you can set the line color for overlays

## **Example**

     
    app.w('googleMapsAdvanced').strokeColor("#" + (Math.round(Math.random() * 16777215)).toString(16));  //Set Random Color
    app.w('googleMapsAdvanced').strokeColor("#ff0000");
     
     
   

## **See Also**

 - [strokeOpacity()](strokeopacity)

 - [strokeWeight()](strokeweight)

 - [fillColor()](fillcolor)

 - [fillOpacity()](fillopacity)

 - [Working with Overlays](../../../../product-guide/advanced-important-widgets/google-v3-maps-widget/working-with-overlays/)

