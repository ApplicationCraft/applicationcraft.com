---
title: "getCoord()"
active_menu_item: developers
class_name: developers
full_width: true
---


## result getCoord (getCoordsCallback, address)

Parameters

<table>
<tr>
<td width="198">
{boolean}getCoordsCallback

</td>
<td width="14">
</td>
<td width="668">
Handles the returned coordinates, returning the google.maps.LatLng object

</td>
</tr>
<tr>
<td width="198">
(string) address

</td>
<td width="14">
</td>
<td width="668">
The address you wish to obtain the coordinates for

</td>
</tr>
</table>

Description

How you can get a map coordinate from a specified address.

Note that the returned coordinates are presented via a callback function.

## Example :

    function getCoordsCallback(result, data) {
    if (result) {
    app.setValue("googleMapsAdvanced", data);
    //or app.setValue("googleMapsAdvanced", [data.lat(), data.lng()]);
    }
    }
    function handler_actionBtn2_onClick(mouseev){
    app.w('googleMapsAdvanced').getCoord(getCoordsCallback, "1600 Amphitheatre Pkwy, Mountain View, CA 94043, USA");
    }
   

## See Also:

 - [whereAmI()](whereami)

 - [getAddress()](getaddress)

 - [getDirections()](getdirections)

 - [addCurrentLocation()](addcurrentlocation)

