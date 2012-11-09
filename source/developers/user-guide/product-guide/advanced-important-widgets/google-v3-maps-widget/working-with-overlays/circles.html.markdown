---
title: "Circles"
active_menu_item: developers
class_name: developers
full_width: true
---


A Circle can be drawn on the Map with a radius as well as line and fill properties.

Below is some code that shows how to create a new line using [addCircle()](../../../../scripting-apis/client-api/widget-object-functions/advanced-maps/addcircle.htm) . Don't forget that you can also create multiple overlays from any simple or complex array using the [populateWidget()](../using-populatewidget.htm) function.

    function handler_actionBtn11_onClick(mouseev){
    if (circleObj) {
    app.w('googleMapsAdvanced').removeOverlay(circleObj);
    circleObj = null;
    } else {
    var circle = [[41.878113, -87.629798], 200000, "Title Text"];
    circleObj = app.w('googleMapsAdvanced').
    (circle);
    }
    }
   

## addCircle

Please refer to [addCircle()](../../../../scripting-apis/client-api/widget-object-functions/advanced-maps/addcircle.htm) in the [Client API](../../../../scripting-apis/client-api/index.htm) section for full details on the function.
