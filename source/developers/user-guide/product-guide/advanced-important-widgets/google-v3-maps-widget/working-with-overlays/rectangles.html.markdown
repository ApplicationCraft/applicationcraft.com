---
title: "Rectangles"
active_menu_item: developers
class_name: developers
full_width: true
---


A Rectangle can be drawn on the Map by specifying the top left and bottom right coordinates. You can also specify line and fill properties.

Below is some code that shows how to create a new line using [addRectangle()](../../../../scripting-apis/client-api/widget-object-functions/advanced-maps/addrectangle) . Don't forget that you can also create multiple overlays from any simple or complex array using the [populateWidget()](../using-populatewidget) function.

    function handler_actionBtn12_onClick(mouseev){
        if (rectObj) {
            app.w('googleMapsAdvanced').removeOverlay(rectObj);
            rectObj = null;
        } else {
            var rect = [[31.772323, -102.214897], [21.291982, -77.821856]];
            rectObj = app.w('googleMapsAdvanced').
    (rect, {fillColor: "#00ffff"});
        }
    }
   

**addRectangle**

Please refer to [addRectangle()](../../../../scripting-apis/client-api/widget-object-functions/advanced-maps/addrectangle) in the [Client API](../../../../scripting-apis/client-api/) section for full details on the function.

