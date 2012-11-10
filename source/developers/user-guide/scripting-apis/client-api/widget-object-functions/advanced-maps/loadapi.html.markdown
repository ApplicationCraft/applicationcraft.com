---
title: "loadApi()"
active_menu_item: developers
class_name: developers
full_width: true
---


result **loadApi** ()

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

Allows you to preload the google maps api. An onInitialized event will be thrown. For example if you have map widget on page 2 and you are on page1 and want to get directions, you can call use this method and after receiving onInitialized event you can use [getDirections()](getdirections.htm) method)

**Example**

    app.w(‘gma’).loadApi()@
   
