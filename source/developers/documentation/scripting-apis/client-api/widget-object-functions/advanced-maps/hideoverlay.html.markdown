---
old_url: hideoverlay.htm
title: "hideOverlay()"
active_menu_item: developers
class_name: developers
full_width: true
---


**hideOverlay** (id)

## Parameters

<table>
<tr>
<td width="169">
{object} id

</td>
<td width="17">
</td>
<td width="694">
The object name of the overlay to hide

</td>
</tr>
</table>
## Description

How you can hide a defined overlay

## Example

    function handler_actionBtn24_onClick(mouseev){
        app.w('googleMapsAdvanced').hideOverlay(polylineObj);
    }
     
     
   

## See Also

 - [Removing Overlays](/developers/documentation/product-guide/advanced-important-widgets/google-v3-maps-widget/working-with-overlays/removing-overlays)
 - [getOverlays()](/developers/documentation/scripting-apis/client-api/widget-object-functions/advanced-maps/getoverlays)
 - [clearOverlays()](/developers/documentation/scripting-apis/client-api/widget-object-functions/advanced-maps/clearoverlays)
 - [removeOverlay()](/developers/documentation/scripting-apis/client-api/widget-object-functions/advanced-maps/removeoverlay)
 - [showOverlay()](/developers/documentation/scripting-apis/client-api/widget-object-functions/advanced-maps/showoverlayid)
 - [fitToOverlays()](/developers/documentation/scripting-apis/client-api/widget-object-functions/advanced-maps/fittooverlays)
 - [getOverlayObjById()](/developers/documentation/scripting-apis/client-api/widget-object-functions/advanced-maps/getoverlayobjbyidid)

