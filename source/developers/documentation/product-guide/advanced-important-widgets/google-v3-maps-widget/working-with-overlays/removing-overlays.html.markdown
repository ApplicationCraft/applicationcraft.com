---
old_url: removing_overlays.htm
title: "Removing Overlays"
active_menu_item: developers
class_name: developers
full_width: true
---


There are two ways of removing overlays from the Map.

The following example removes an overlay if it is clicked on

    function handler_googleMapsAdvanced_onOverlayClick(latlng, overlay){
        _widget.removeOverlay(overlay);
    }

Or, you can remove all overlays in one go with  

     app.w('googleMapsAdvanced').clearOverlays();
  
## Removing Markers

Note that [clearOverlays()](/developers/documentation/scripting-apis/client-api/widget-object-functions/advanced-maps/clearoverlays) will not remove Markers. You should use [clearMarkers()](/developers/documentation/scripting-apis/client-api/widget-object-functions/advanced-maps/clearmarkers) for this.

