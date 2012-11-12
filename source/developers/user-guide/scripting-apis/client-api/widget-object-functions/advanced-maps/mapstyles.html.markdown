---
title: "mapStyles()"
active_menu_item: developers
class_name: developers
full_width: true
---


**mapStyles** (array)

## Parameters

<table>
<tr>
<td width="169">
{string} array

</td>
<td width="17">
</td>
<td width="694">
An array where your style is stored.

</td>
</tr>
</table>
## Description

You can control the visual style of a Map using the this function. This allows you to pass in a structure that defines the main style elements used by the map.

You can modify many map elements including Roads, Forests, Regions, Points of Interest.

You can read about map styles [here](http://code.google.com/apis/maps/documentation/javascript/styling.html) .

Google offers a very nice [style wizard](http://gmaps-samples-v3.googlecode.com/svn/trunk/styledmaps/wizard/index.html) that lets you build a map style and then retrieve the equivalent JSON. This JSON can then be pasted into your code. The example below shows the JSON being assigned to the variable 'pinkParkStyles'.

## Example

    function handler_actionBtn4_onClick(mouseev){
        var pinkParksStyles = [
          {
            featureType: "all",
            stylers: [
              { saturation: -80 }
            ]
          },
          {
            featureType: "poi.park",
            stylers: [
              { hue: "#ff0023" },
              { saturation: 40 }
            ]
          }
        ];
        app.w('googleMapsAdvanced').
    (pinkParksStyles);
    }
     
   

**mapStyles**

## **See Also**

 - [Map Styles](/developers/user-guide/product-guide/advanced-important-widgets/google-v3-maps-widget/map-styles)

