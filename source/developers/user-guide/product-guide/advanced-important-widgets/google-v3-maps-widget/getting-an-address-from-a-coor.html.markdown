---
title: "Getting an Address from a Coordinate"
active_menu_item: developers
class_name: developers
full_width: true
---


You can get an address from either specific lat/lng coordinates or from your current location using [getAddress()](/developers/user-guide/scripting-apis/client-api/widget-object-functions/advanced-maps/getaddress) as follows:

     function getAddressCallback(res, data) {
        alert("Address : " + data[0].formatted_address);
    }
     
    function handler_actionBtn13_onClick(mouseev){
        // Gets an address from a specific coordinate
        app.w('googleMapsAdvanced').getAddress(getAddressCallback, 41.878113, -87.629798);
        // Gets the address of your current location
        app.w('googleMapsAdvanced').getAddress(getAddressCallback);
    }
   

You can see that by omitting the coordinate parameters, Application Craft returns the address of your current location.

![advanced-maps-revgeo-debugger](/img/docs/advanced-maps-revgeo-debugger.png)

Please refer to [getAddress()](/developers/user-guide/scripting-apis/client-api/widget-object-functions/advanced-maps/getaddress) in the [Client API](/developers/user-guide/scripting-apis/client-api/) section for full details on the function.

