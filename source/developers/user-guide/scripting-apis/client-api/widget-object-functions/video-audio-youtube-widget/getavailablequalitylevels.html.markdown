---
title: "getAvailableQualityLevels()"
active_menu_item: developers
class_name: developers
full_width: true
---


**getAvailableQualityLevels** (quality)

## Parameters

<table>
<tr>
<td width="169">
{array} quality

</td>
<td width="17">
</td>
<td width="694">
Returns an array of the available quality formats for the current video. Available parameters

 - small

 - medium

 - large

 - hd720

 - hd1080

 - highres

</td>
</tr>
</table>
## Description

This function returns the set of quality formats in which the current video is available. You could use this function to determine whether the video is available in a higher quality than the user is viewing, and your player could display a button or other element to let the user adjust the quality.

The function returns an array of strings ordered from highest to lowest quality. Possible array element values are highres, hd1080, hd720, large, medium and small. This function returns an empty array if there is no current video.

Your client should not automatically switch to use the highest (or lowest) quality video or to any unknown format name. YouTube could expand the list of quality levels to include formats that may not be appropriate in your player context. Similarly, YouTube could remove quality options that would be detrimental to the user experience. By ensuring that your client only switches to known, available formats, you can ensure that your client's performance will not be affected by either the introduction of new quality levels or the removal of quality levels that are not appropriate for your player context.

## Example

     
    app.w('YouTube').getYouTubePlayer().getAvailableQualityLevels();
     
   

## See Also

 - [getPlaybackQuality()](/developers/user-guide/scripting-apis/client-api/widget-object-functions/video-audio-youtube-widget/getplaybackquality)
 - [setPlaybackQuality()](/developers/user-guide/scripting-apis/client-api/widget-object-functions/video-audio-youtube-widget/setplaybackquality)

