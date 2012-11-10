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

**Example**

    function@handler_googleMapsAdvanced_onOverlayClick(latlng,@overlay){
        _widget.removeOverlay(overlay);
    }
     
     
   

**See Also:**

 - [Removing Overlays](../../../../product-guide/advanced-important-widgets/google-v3-maps-widget/working-with-overlays/removing-overlays)

 - [getOverlays()](getoverlays.htm)

 - [clearOverlays()](clearoverlays.htm)

 - [showOverlay()](showoverlayid.htm)

 - [hideOverlay()](hideoverlay.htm)

 - [fitToOverlays()](fittooverlays.htm)

 - [getOverlayObjById()](getoverlayobjbyidid.htm)

