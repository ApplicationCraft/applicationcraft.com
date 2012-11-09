---
title: "getAddress()"
active_menu_item: developers
class_name: developers
full_width: true
---


## result getAddress (getAddressCallback, lat, long)

Parameters

<table>
<tr>
<td width="202">
{boolean} getAddressCallback

</td>
<td width="14">
</td>
<td width="664">
Handles the returned address object

</td>
</tr>
<tr>
<td width="202">
(integer) lat

</td>
<td width="14">
</td>
<td width="664">
Specify the latitude of the address to return

</td>
</tr>
<tr>
<td width="202">
(integer) long

</td>
<td width="14">
</td>
<td width="664">
Specify the longitude of the address to return

</td>
</tr>
</table>

Description

How you can get an address from either specific lat/lng coordinates or from your current location. Also by omitting the coordinate parameters, Application Craft returns the address of your current location

## Example :

    function getAddressCallback(res, data) {
    alert("Address : " + data[0].formatted_address);
    }
    function handler_actionBtn13_onClick(mouseev){
    // Gets an address from a specific coordinate
    app.w('googleMapsAdvanced').getAddress(getAddressCallback, 41.878113, -87.629798);
    // Gets the address of your current location
    app.w('googleMapsAdvanced').getAddress(getAddressCallback);
    }
   

## See Also:

 - [whereAmI()](whereami)

 - [getCoord()](getcoord)

 - [getDirections()](getdirections)

 - [addCurrentLocation()](addcurrentlocation)

