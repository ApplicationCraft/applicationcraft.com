---
title: "Using getData() and setData()"
active_menu_item: developers
class_name: developers
full_width: true
---


[getData()](../../../scripting-apis/client-api/widget-data-state-manipulation/getdata.htm) and [setData()](../../../scripting-apis/client-api/widget-data-state-manipulation/setdata.htm) are used when you want to set or get data that describes overlay data such as Markers, Polylines, Circles, Rectangles and Polygons. The [getData()](../../../scripting-apis/client-api/widget-data-state-manipulation/getdata.htm) call returns a collection of overlay objects currently displayed on the map.

[setData()](../../../scripting-apis/client-api/widget-data-state-manipulation/setdata.htm) would most likely be used to modify existing overlays as shown in the code example below.

    function handler_googleMapsAdvanced_onOverlayClick(latlng, overlay){
    objAll = app.getData("googleMapsAdvanced");
    objSel = objAll[overlay];
    objSel.strokeWeight = 22;
    app.setData("googleMapsAdvanced", objAll);
    }
   

If you are creating individual new overlays, then you would use [addMarker()](../../../scripting-apis/client-api/widget-object-functions/advanced-maps/addmarker.htm) , [addPolyline()](../../../scripting-apis/client-api/widget-object-functions/advanced-maps/addpolyline.htm) etc. as described in the [Working with Overlays](working_with_overlays.htm) chapter.

For the most powerful creation of overlays you should use [populateWidget()](using_populatewidget.htm) which is a great way of populating multiple overlays at once.

