---
title: "getDirections()"
active_menu_item: developers
class_name: developers
full_width: true
---


## result getDirections (callback, origin, destination, drawOnMap, options (optional), rendererOptions(optional))

Parameters

<table>
<tr>
<td width="213">
{boolean} getDirectionsCallback

</td>
<td width="21">
</td>
<td width="646">
Handles the returned directions

</td>
</tr>
<tr>
<td width="213">
(array/string) origin

</td>
<td width="21">
</td>
<td width="646">
Start location for your Directions The locations you specify can be addresses or lat/lng coordinates.

</td>
</tr>
<tr>
<td width="213">
(array/string) destination

</td>
<td width="21">
</td>
<td width="646">
End location for your Directions. The locations you specify can be addresses or lat/lng coordinates.

</td>
</tr>
<tr>
<td width="213">
{boolean} drawOnMap

</td>
<td width="21">
</td>
<td width="646">
true/false (default false). true to show directions on the map

</td>
</tr>
<tr>
<td width="213">
{object} options

</td>
<td width="21">
</td>
<td width="646">
An object to extend direction request

</td>
</tr>
<tr>
<td width="213">
{object} rendererOptions

</td>
<td width="21">
</td>
<td width="646">
An object to extend direction renderer options

</td>
</tr>
<tr>
<td width="213">
</td>
<td width="21">
</td>
<td width="646">
</td>
</tr>
</table>

Description

You can use the Map widget to get directions from one location to another.  The locations you specify can be addresses or lat/lng coordinates.

For more information on options see: [https://developers.google.com/maps/documentation/javascript/reference?hl=en\#DirectionsRequest](https://developers.google.com/maps/documentation/javascript/reference?hl=en#DirectionsRequest)

For more information on rendererOptions see: [https://developers.google.com/maps/documentation/javascript/reference?hl=en\#DirectionsRendererOptions](https://developers.google.com/maps/documentation/javascript/reference?hl=en#DirectionsRendererOptions)

Note that the returned directions are presented via a callback function.

## Example

    function getDirectionsCallback(result, data) {
    // Put all of the directions into a single HTML string
    for(i=0, htmlStr="";i<data.routes[0].legs[0].steps.length; i++) {
    htmlStr += data.routes[0].legs[0].steps[i].instructions + "</br>";
    }
    }
    function handler_actionBtn15_onClick(mouseev){
    var rendererOptions = {
    preserveViewport: true
    };
    app.w('googleMapsAdvanced').getDirections(getDirectionsCallback, "Moscow", "Minsk", true, {}, rendererOptions);
    app.w('googleMapsAdvanced').
    (getDirectionsCallback, [37.7, -97.2], "Oklahoma City");
    }
   

## getDirections

## See Also:

 - [whereAmI()](whereami)

 - [getAddress()](getaddress)

 - [getCoord()](getcoord)

 - [addCurrentLocation()](addcurrentlocation)

 - [removeDirections()](removedirections)

