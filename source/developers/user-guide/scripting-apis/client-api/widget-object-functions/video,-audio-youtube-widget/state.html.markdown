---
title: "state()"
active_menu_item: developers
class_name: developers
full_width: true
---


**state** (val)

## Parameters

<table>
<tr>
<td width="169">
{value} val

</td>
<td width="17">
</td>
<td width="694">
Returns the state of the widget

</td>
</tr>
</table>
## Description

When the player first loads a video, it will broadcast an unstarted (-1) event. When a video is cued and ready to play, the player will broadcast a video cued (5) event.

<table>
<tr>
<td width="226">
**Value**

</td>
<td width="10">
</td>
<td width="644">
**Description**

</td>
</tr>
<tr>
<td width="226">
-1

</td>
<td width="10">
</td>
<td width="644">
Unstarted

</td>
</tr>
<tr>
<td width="226">
0

</td>
<td width="10">
</td>
<td width="644">
Ended

</td>
</tr>
<tr>
<td width="226">
1

</td>
<td width="10">
</td>
<td width="644">
Playing

</td>
</tr>
<tr>
<td width="226">
2

</td>
<td width="10">
</td>
<td width="644">
Paused

</td>
</tr>
<tr>
<td width="226">
3

</td>
<td width="10">
</td>
<td width="644">
Buffering

</td>
</tr>
<tr>
<td width="226">
5

</td>
<td width="10">
</td>
<td width="644">
Video Cued

</td>
</tr>
</table>

## **Example**

     
    app.w('YouTube').getYouTubePlayer().state();
     
   

