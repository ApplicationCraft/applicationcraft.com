---
old_url: setplaybackquality.htm
title: "setPlaybackQuality()"
active_menu_item: developers
class_name: developers
full_width: true
---


**setPlaybackQuality** (quality)

## Parameters

<table>
<tr>
<td width="169">
{string} quality

</td>
<td width="17">
</td>
<td width="694">
Sets the suggested video quality for the current video. Available parameters

 - small

 - medium

 - large

 - hd720

 - hd1080

 - highres

 - default

</td>
</tr>
</table>
## Description

This function sets the suggested video quality for the current video. The function causes the video to reload at its current position in the new quality. If the playback quality does change, it will only change for the video being played. Calling this function does not guarantee that the playback quality will actually change. However, if the playback quality does change, the [On Playback Quality Change](/developers/documentation/product-guide/widget-properties-events/events/event-reference-list/general-events#playback) event will fire, and your code should respond to the event rather than the fact that it called the setPlaybackQuality function.

We recommend that you set the parameter value to default, which instructs YouTube to select the most appropriate playback quality, which will vary for different users, videos, systems and other playback conditions.

When you suggest a playback quality for a video, the suggested quality will only be in effect for that video. You should select a playback quality that corresponds to the size of your video player. For example, if your page displays a 1280px by 720px video player, a hd720 quality video will actually look better than an hd1080 quality video. We recommend calling the [getAvailableQualityLevels()](/developers/documentation/scripting-apis/client-api/widget-object-functions/video-audio-youtube-widget/getavailablequalitylevels) function to determine which quality levels are available for a video.

The list below shows the playback quality levels that correspond to different standard player sizes. We recommend that you set the height of your video player to one of the values listed below and that you size your player to use 16:9 aspect ratio. As stated above, even if you choose a standard player size, we also recommend that you set the suggestedQuality parameter value to default to enable YouTube to select the most appropriate playback quality.

<table>
<tr>
<td width="121">
  <strong>Quality Level</strong>

</td>
<td width="16">
</td>
<td width="1201">
  <strong>Description</strong>

</td>
</tr>
<tr>
<td width="121">
small

</td>
<td width="16">
        
      

</td>
<td width="1201">
Player height is 240px, and player dimensions are at least 320px by 240px for 4:3 aspect ratio

</td>
</tr>
<tr>
<td width="121">
medium

</td>
<td width="16">
        
      

</td>
<td width="1201">
Player height is 360px, and player dimensions are 640px by 360px (for 16:9 aspect ratio) or 480px by 360px (for 4:3 aspect ratio).

</td>
</tr>
<tr>
<td width="121">
large

</td>
<td width="16">
        
      

</td>
<td width="1201">
Player height is 480px, and player dimensions are 853px by 480px (for 16:9 aspect ratio) or 640px by 480px (for 4:3 aspect ratio).

</td>
</tr>
<tr>
<td width="121">
hd720

</td>
<td width="16">
        
      

</td>
<td width="1201">
Player height is 720px, and player dimensions are 1280px by 720px (for 16:9 aspect ratio) or 960px by 720px (for 4:3 aspect ratio).

</td>
</tr>
<tr>
<td width="121">
hd1080

</td>
<td width="16">
        
      

</td>
<td width="1201">
Player height is 1080px, and player dimensions are 1920px by 1080px (for 16:9 aspect ratio) or 1440px by 1080px (for 4:3 aspect ratio).

</td>
</tr>
<tr>
<td width="121">
highres

</td>
<td width="16">
        
      

</td>
<td width="1201">
Player height is greater than 1080px, which means that the player's aspect ratio is greater than 1920px by 1080px.

</td>
</tr>
<tr>
<td width="121">
default

</td>
<td width="16">
        
      

</td>
<td width="1201">
YouTube selects the appropriate playback quality. This setting effectively reverts the quality level to the default state and nullifies any previous efforts to set playback quality.

</td>
</tr>
</table>

## Example

     
    app.w('YouTube').getYouTubePlayer().setPlaybackQuality('small');
     
     
   

## See Also

 - [getPlaybackQuality()](/developers/documentation/scripting-apis/client-api/widget-object-functions/video-audio-youtube-widget/getplaybackquality)
 - [getAvailableQualityLevels()](/developers/documentation/scripting-apis/client-api/widget-object-functions/video-audio-youtube-widget/getavailablequalitylevels)

