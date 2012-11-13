---
title: "removeOverlay()"
active_menu_item: developers
class_name: developers
full_width: true
---


**removeOverlay** (overlayId)

## Parameters

<table>
<tr>
<td width="169">
{object} overlayId

</td>
<td width="17">
</td>
<td width="694">
The object name of the overlay to remove

</td>
</tr>
</table>
## Description

You can remove a defined overlay as it is clicked on using the onOverlayClick Event

## Example

    function handler_googleMapsAdvanced_onOverlayClick(latlng, overlay){
        _widget.removeOverlay(overlay);
    }
     
     
   

## See Also

 - [Removing Overlays](/developers/documentation/product-guide/advanced-important-widgets/google-v3-maps-widget/working-with-overlays/removing-overlays)
 - [getOverlays()](/developers/documentation/scripting-apis/client-api/widget-object-functions/advanced-maps/getoverlays)
 - [clearOverlays()](/developers/documentation/scripting-apis/client-api/widget-object-functions/advanced-maps/clearoverlays)
 - [showOverlay()](/developers/documentation/scripting-apis/client-api/widget-object-functions/advanced-maps/showoverlayid)
 - [hideOverlay()](/developers/documentation/scripting-apis/client-api/widget-object-functions/advanced-maps/hideoverlay)
 - [fitToOverlays()](/developers/documentation/scripting-apis/client-api/widget-object-functions/advanced-maps/fittooverlays)
 - [getOverlayObjById()](/developers/documentation/scripting-apis/client-api/widget-object-functions/advanced-maps/getoverlayobjbyidid)

