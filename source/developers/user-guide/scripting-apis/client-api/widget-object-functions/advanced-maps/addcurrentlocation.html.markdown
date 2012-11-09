---
title: "addCurrentLocation()"
active_menu_item: developers
class_name: developers
full_width: true
---


## result addCurrentLocation (coords)

Parameters

<table>
<tr>
<td width="169">
{array} coords

</td>
<td width="17">
</td>
<td width="694">
Handles the location array and adds marker to the map, returning the google.maps.LatLng object

</td>
</tr>
</table>

Description

Adds the current location of the user to the map

## Example

    function onLocationUpdated(res, data) {
    app.setValue("googleMapsAdvanced", (data));
    //or app.setValue("googleMapsAdvanced", [data.lat(), data.lng()]);
    }
    function handler_actionBtn2_onClick(mouseev){
    app.w('googleMapsAdvanced').addCurrentLocation(onLocationUpdated);
    }
   

## See Also:

 - [whereAmI()](whereami)

 - [getAddress()](getaddress)

 - [getCoord()](getcoord)

 - [getDirections()](getdirections)

