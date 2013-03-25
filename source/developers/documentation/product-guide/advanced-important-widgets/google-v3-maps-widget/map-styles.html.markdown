---
old_url: map_styles.htm
title: "Map Styles"
active_menu_item: developers
class_name: developers
full_width: true
---


You can control the visual style of a Map using the [mapStyles()](/developers/documentation/scripting-apis/client-api/widget-object-functions/advanced-maps/mapstyles) function. This allows you to pass in a structure that defines the main style elements used by the map.

You can modify many map elements including Roads, Forests, Regions, Points of Interest.

**Important** : Google offers a very nice [style wizard](http://gmaps-samples-v3.googlecode.com/svn/trunk/styledmaps/wizard/index.html) that lets you build a map style and then retrieve the equivalent JSON. This JSON can then be pasted into your code. The example below shows the JSON being assigned to the variable 'pinkParkStyles'.

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
        app.w('googleMapsAdvanced').mapStyles(pinkParksStyles);
       }
   

**mapStyles**

You can read about map styles [here](http://code.google.com/apis/maps/documentation/javascript/styling.html) .

Please refer to the [mapStyles()](/developers/documentation/scripting-apis/client-api/widget-object-functions/advanced-maps/mapstyles) function in the [Client API](/developers/documentation/scripting-apis/client-api/) section

