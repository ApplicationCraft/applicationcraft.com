---
old_url: identifying_overlays_for_oncli.htm
title: "Identifying Overlays for OnClick"
active_menu_item: developers
class_name: developers
full_width: true
---


When you create a map overlay, you will often want to control events when it is clicked on by a user. In order to assign an ID to an overlay, you need to use the [populateWidget()](/developers/documentation/product-guide/advanced-important-widgets/google-v3-maps-widget/using-populatewidget) function.

In your source data's array element that corresponds to each overlay, you can include the overlay id as shown here

    {
    , type:1, 
      coords:"41.878113,-87.629798;47.878113,-87.629798;61.878113,-67.629798", 
      strokeColor: "#ff0000", strokeOpacity: 0.7}
    var overlaysMap = {
        , 
        type:'type', 
        coords: "coords", 
        radius:"radius", 
        strokeColor: "strokeColor", 
        strokeOpacity: "strokeOpacity", 
        strokeWeight: "strokeWeight", 
        fillColor: "fillColor", 
        fillOpacity: "fillOpacity", 
        mouseOverHTML:"mouseOverHTML", 
        onClickHTML: "onClickHTML", 
        markerImageURL: "markerImageURL"
        };
    function handler_googleMapsAdvanced_onOverlayClick(latlng, overlay){
        objAll = app.getData("googleMapsAdvanced");
        objSel = objAll[overlay];
        objSel.strokeWeight = 22;
        app.setData("googleMapsAdvanced", objAll);
    }
   

**overlayId:'polylineId'**

You then use the map object to map this into the map widget.

**id:'overlayId'**

When a user clicks on any overlay, the [onOverlayClick](/developers/documentation/product-guide/advanced-important-widgets/google-v3-maps-widget/property-event-method-summary/gmapevents) Event can be triggered

In the above code example, overlay is the string name of the overlay clicked on and in our example, it would be 'polylineId'. This may be enough to allow you handle the action. However, you can also get direct access to the object if required. You could then modify data within the object and use [setData()](/developers/documentation/product-guide/advanced-important-widgets/google-v3-maps-widget/using-getdata-and-setdata) to redraw the overlays.

