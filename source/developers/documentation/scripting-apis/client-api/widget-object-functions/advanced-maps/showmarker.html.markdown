---
title: "showMarker()"
active_menu_item: developers
class_name: developers
full_width: true
---


result **showMarker** ()

## Parameters

<table>
<tr>
<td width="169">
{boolean} result

</td>
<td width="17">
</td>
<td width="694">
True if Marker is shown, false if Marker is not shown

</td>
</tr>
</table>
## Description

Allows you to show/hide the map's base coordinate marker. The following example shows how you can toggle to show/hide the marker as a button is clicked

## Example

    function handler_actionBtn16_onClick(mouseev){
        var showMarker = app.w('googleMapsAdvanced').showMarker();
        app.w('googleMapsAdvanced').showMarker(!showMarker);
    }
     
   

