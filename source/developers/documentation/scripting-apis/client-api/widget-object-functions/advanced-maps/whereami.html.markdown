---
old_url: whereami.htm
title: "whereAmI()"
active_menu_item: developers
class_name: developers
full_width: true
---


result **whereAmI** (coords)

## Parameters

<table>
<tr>
<td width="169">
{array} coords

</td>
<td width="17">
</td>
<td width="694">
Handles the returned coordinates of location, returning the google.maps.LatLng object

</td>
</tr>
</table>
## Description

How you can get the current location.

## Example

    function onLocationUpdated(res, data) {
       app.setValue("googleMapsAdvanced", (data)); 
    //or app.setValue("googleMapsAdvanced", [data.lat(), data.lng()]);
    }
    function handler_actionBtn_onClick(mouseev){
        //Detect where I am
        app.w('googleMapsAdvanced').whereAmI
    (onLocationUpdated);
     }

## See Also

 - [getAddress()](/developers/documentation/scripting-apis/client-api/widget-object-functions/advanced-maps/getaddress)
 - [getCoord()](/developers/documentation/scripting-apis/client-api/widget-object-functions/advanced-maps/getcoord)
 - [getDirections()](/developers/documentation/scripting-apis/client-api/widget-object-functions/advanced-maps/getdirections)
 - [addCurrentLocation()](/developers/documentation/scripting-apis/client-api/widget-object-functions/advanced-maps/addcurrentlocation)

