---
title: "duration()"
active_menu_item: developers
class_name: developers
full_width: true
---


**duration** (num)

## Parameters

<table>
<tr>
<td width="169">
{value} num

</td>
<td width="17">
</td>
<td width="694">
Returns the duration in seconds of the currently playing video

</td>
</tr>
</table>
## Description

Returns the duration in seconds of the currently playing video. Note that duration() will return 0 until the video's metadata is loaded, which normally happens just after the video starts playing.

If the currently playing video is a live event, the duration() function will return the elapsed time since the live video stream began. Specifically, this is the amount of time that the video has streamed without being reset or interrupted. In addition, this duration is commonly longer than the actual event time since streaming may begin before the event's start time.

**Example**

     
    app.w('YouTube').getYouTubePlayer().duration();
     
   

