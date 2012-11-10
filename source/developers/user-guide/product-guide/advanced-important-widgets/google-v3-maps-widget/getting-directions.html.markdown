---
title: "Getting Directions"
active_menu_item: developers
class_name: developers
full_width: true
---


You can use the Map widget to get directions from one location to another using [getDirections()](../../../scripting-apis/client-api/widget-object-functions/advanced-maps/getdirections) . The locations you specify can be addresses or lat/lng coordinates. You can also get Application Craft to draw the directions directly onto your Map.

Note that the returned directions are presented via a callback function.

    function getDirectionsCallback(result, data) {
        // Put all of the directions into a single HTML string
        for(i=0, htmlStr="";i<data.routes[0].legs[0].steps.length; i++) {
            htmlStr += data.routes[0].legs[0].steps[i].instructions + "</br>";
        }
    }
     
    function handler_actionBtn15_onClick(mouseev){
        app.w('googleMapsAdvanced').
    (getDirectionsCallback, "Moscow", "Minsk");
        app.w('googleMapsAdvanced').
    (getDirectionsCallback, [37.7, -97.2], "Oklahoma City");
    }
   

**getDirections**

**getDirections**

The second [getDirections()](../../../scripting-apis/client-api/widget-object-functions/advanced-maps/getdirections) call above, results in the callback function being passed a data object containing the directions. You can explore this using the debugger or in the [Google documentation](http://code.google.com/apis/maps/documentation/directions/) (look for Directions Responses section).

Below is an image of the object being inspected in the debugger.

![advanced-maps-directions-debugger](/img/docs/advanced-maps-directions-debugger.png)

