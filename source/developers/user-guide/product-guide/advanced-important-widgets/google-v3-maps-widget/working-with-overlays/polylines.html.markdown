---
title: "Polylines"
active_menu_item: developers
class_name: developers
full_width: true
---


Polylines are formed as a set of latitude/longitude pairs. You can control the visual properties.

Below is some code that shows how to create a new line using [addPolyline()](/developers/user-guide/scripting-apis/client-api/widget-object-functions/advanced-maps/addpolyline) . Don't forget that you can also create multiple overlays from any simple or complex array using the [populateWidget()](/developers/user-guide/product-guide/advanced-important-widgets/google-v3-maps-widget/using-populatewidget) function.

    function handler_actionBtn7_onClick(mouseev){
        if (polylineObj) {
            app.w('googleMapsAdvanced').removeOverlay(polylineObj);
            polylineObj = null;
        } else {
            var polylinePath = [
                    [37.772323, -122.214897],
                    [21.291982, -157.821856],
                    [-18.142599, 178.431],
                    [-27.46758, 153.027892]
                ];
                polylineObj = app.w('googleMapsAdvanced').addPolyline(polylinePath);
        }
    }
   

Please refer to [addPolyline()](/developers/user-guide/scripting-apis/client-api/widget-object-functions/advanced-maps/addpolyline) in the [Client API](/developers/user-guide/scripting-apis/client-api/) section for full details on the function.

