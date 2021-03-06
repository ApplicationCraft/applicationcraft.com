---
old_url: polygons.htm
title: "Polygons"
active_menu_item: developers
class_name: developers
full_width: true
---


A Polygon can be drawn on the Map by specifying an array of coordinates. You can also specify line and fill properties.

Below is some code that shows how to create a new line using [addPolygon()](/developers/documentation/scripting-apis/client-api/widget-object-functions/advanced-maps/addpolygon) . Don't forget that you can also create multiple overlays from any simple or complex array using the [populateWidget()](/developers/documentation/product-guide/advanced-important-widgets/google-v3-maps-widget/using-populatewidget) function.

    function handler_actionBtn10_onClick(mouseev){
        if (polygonObj) {
            app.w('googleMapsAdvanced').removeOverlay(polygonObj);
            polygonObj = null;
        } else {
            var polygonPath = [
                    [25.774252, -80.190262],
                    [18.466465, -66.118292],
                    [32.321384, -64.75737]
                ];
                polygonObj = app.w('googleMapsAdvanced').
    (polygonPath,  {fillColor: "#00ffff", strokeWeight:2});
        }
    }
   

Refer to [addPolygon()](/developers/documentation/scripting-apis/client-api/widget-object-functions/advanced-maps/addpolygon) in the [Client API](/developers/documentation/scripting-apis/client-api/) section for full details on the function.

