---
old_url: using_getdata_and_setdata.htm
title: "Using getData() and setData()"
active_menu_item: developers
class_name: developers
full_width: true
---


[getData()](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/getdata) and [setData()](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/setdata) are used when you want to set or get data that describes overlay data such as Markers, Polylines, Circles, Rectangles and Polygons. The [getData()](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/getdata) call returns a collection of overlay objects currently displayed on the map.

[setData()](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/setdata) would most likely be used to modify existing overlays as shown in the code example below.

    function handler_googleMapsAdvanced_onOverlayClick(latlng, overlay){
        objAll = app.getData("googleMapsAdvanced");
        objSel = objAll[overlay];
        objSel.strokeWeight = 22;
        app.setData("googleMapsAdvanced", objAll);
    }
   

If you are creating individual new overlays, then you would use [addMarker()](/developers/documentation/scripting-apis/client-api/widget-object-functions/advanced-maps/addmarker) , [addPolyline()](/developers/documentation/scripting-apis/client-api/widget-object-functions/advanced-maps/addpolyline) etc. as described in the [Working with Overlays](/developers/documentation/product-guide/advanced-important-widgets/google-v3-maps-widget/working-with-overlays/) chapter.

For the most powerful creation of overlays you should use [populateWidget()](/developers/documentation/product-guide/advanced-important-widgets/google-v3-maps-widget/using-populatewidget) which is a great way of populating multiple overlays at once.

