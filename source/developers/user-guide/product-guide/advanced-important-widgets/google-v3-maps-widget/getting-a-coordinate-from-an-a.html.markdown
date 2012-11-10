---
title: "Getting a Coordinate from an Address"
active_menu_item: developers
class_name: developers
full_width: true
---


You can get a map coordinate from a specified address using [getCoord()](../../../scripting-apis/client-api/widget-object-functions/advanced-maps/getcoord) as shown below.

    function@getCoordsCallback(result,@data)@{
        if (result) {
            app.setValue("googleMapsAdvanced", data);
            //or app.setValue("googleMapsAdvanced", [data.lat(), data.lng()]);
        }
    }
     
    function@handler_actionBtn2_onClick(mouseev){
        app.w('googleMapsAdvanced').getCoord(getCoordsCallback, "1600 Amphitheatre Pkwy, Mountain View, CA 94043, USA");
    }
     
   

Please refer to [getCoord()](../../../scripting-apis/client-api/widget-object-functions/advanced-maps/getcoord) in the [Client API](../../../scripting-apis/client-api/) section for full details on the function.

