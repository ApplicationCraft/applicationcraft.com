---
title: "addRectangle()"
active_menu_item: developers
class_name: developers
full_width: true
---


**addRectangle** (coords)

## Parameters

<table>
<tr>
<td width="169">
{array} coords

</td>
<td width="17">
</td>
<td width="694">
An array of top left and bottom right coordinates of the rectangle

</td>
</tr>
</table>
## Description

A Rectangle can be drawn on the Map by specifying the top left and bottom right coordinates. You can also specify line and fill properties

**Example**

    function@handler_actionBtn12_onClick(mouseev){
            var rect = [[31.772323, -102.214897], [21.291982, -77.821856]];
            rectObj = app.w('googleMapsAdvanced').
    (rect,@{fillColor:@"#00ffff"});
     }
     
     
   

**addRectangle**

**See Also:**

 - [Rectangles](../../../../product-guide/advanced-important-widgets/google-v3-maps-widget/working-with-overlays/rectangles)

