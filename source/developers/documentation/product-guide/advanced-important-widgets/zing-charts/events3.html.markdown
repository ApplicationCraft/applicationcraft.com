---
title: "Events"
active_menu_item: developers
class_name: developers
full_width: true
---


The following Application Craft events are available for the Zingchart

<table>
<tr>
<th style="vertical-align:top; width:147px; height:19px; background-color:#ffffff;">
<b>AC Event Name</b>

</th>
<th style="vertical-align:top; width:47px; height:19px; background-color:#ffffff;">
</th>
<th style="vertical-align:top; width:753px; height:19px; background-color:#ffffff;">
<b>Zing Chart Event Name</b>

</th>
</tr>
<tr>
<td width="147">
On Click

</td>
<td width="47">
</td>
<td width="753">
zingchart.node_click

</td>
</tr>
<tr>
<td width="147">
On Double Click

</td>
<td width="47">
</td>
<td width="753">
zingchart.node_doubleclick

</td>
</tr>
<tr>
<td width="147">
On Mouse Enter

</td>
<td width="47">
</td>
<td width="753">
zingchart.node_mouseover

</td>
</tr>
<tr>
<td width="147">
On Mouse Leave

</td>
<td width="47">
</td>
<td width="753">
zingchart.node_mouseout

</td>
</tr>
<tr>
<td width="147">
onComplete

</td>
<td width="47">
</td>
<td width="753">
zingchart.node_complete

</td>
</tr>
</table>

The events "On Mouse Leave" & "On Mouse Enter" are called when you hover above the ZingChart plots, not the ZingChart widget itself.

## Zingchart internal events

If you want to access the internal events (very rare that you would want to) you can find details at [http://www.zingchart.com/learn/api/events.php](http://www.zingchart.com/learn/api/events.php) . In general, you are advised to stick with the Application Craft events.

## Example

This event will be called for the all ZingChart widgets in the current app.

    zingchart.load = function(jsonObj){
      alert("ZingChart has completed loading the Chart " + jsonObj["id"]);
    }
     
To specify a widget (zing1 is the AC widget name)

    zingchart.load = function(data) {
      if (data.id == app.w('zing').getZingChartId()) {
        alert("ZingChart with the name = zing has completed loading the Chart");
      }
    } 
   



