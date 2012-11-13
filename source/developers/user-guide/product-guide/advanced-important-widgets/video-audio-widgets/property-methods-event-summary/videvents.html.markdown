---
title: "Events"
active_menu_item: developers
class_name: developers
full_width: true
---


This section list only Events specific to the Audio and Video Widget. For the common Events, please refer to the [Events](/developers/user-guide/product-guide/widget-properties-events/events/) section.

<table>
<tr>
<td width="202">
  <strong>Audio/Video Events</strong>

</td>
<td width="12">
</td>
<td width="728">
</td>
</tr>
<tr>
<td width="202">
On Load Start

</td>
<td width="12">
</td>
<td width="728">
Called when the widget begins looking for the media data

</td>
</tr>
<tr>
<td width="202">
On Progress

</td>
<td width="12">
</td>
<td width="728">
Called when the widget is fetching the media data

</td>
</tr>
<tr>
<td width="202">
On Suspend

</td>
<td width="12">
</td>
<td width="728">
Called when the widget is intentionally not fetching the media data

</td>
</tr>
<tr>
<td width="202">
On Abort

</td>
<td width="12">
</td>
<td width="728">
Called when the widget stops fetching the media data before it is completely downloaded but not due to an error

</td>
</tr>
<tr>
<td width="202">
On Error

</td>
<td width="12">
</td>
<td width="728">
Called when an error occurs fetching the media data

</td>
</tr>
<tr>
<td width="202">
On Emptied

</td>
<td width="12">
</td>
<td width="728">
Called when the widget is trying to reload the media data but was previously able to load and run the media data

</td>
</tr>
<tr>
<td width="202">
On Stalled

</td>
<td width="12">
</td>
<td width="728">
Called when the widget is trying to fetch the media data but data is unexpectedly not forthcoming

</td>
</tr>
<tr>
<td width="202">
On Loaded Metadata

</td>
<td width="12">
</td>
<td width="728">
Called when the widget has determined the duration and dimensions of the media data and the text tracks are ready

</td>
</tr>
<tr>
<td width="202">
On Loaded Data

</td>
<td width="12">
</td>
<td width="728">
Called when the widget can render the media data at the current playback position for the first time

</td>
</tr>
<tr>
<td width="202">
On Can Play

</td>
<td width="12">
</td>
<td width="728">
Called when the widget can resume playback of the media data but estimates that if playback were to be started now, the media resource could not be rendered at the current playback rate up to its end without having to stop for further buffering of content.

</td>
</tr>
<tr>
<td width="202">
On Can Play Through

</td>
<td width="12">
</td>
<td width="728">
Called when the widget estimates that if playback were to be started now, the media resource could be rendered at the current playback rate all the way to its end without having to stop for further buffering.

</td>
</tr>
<tr>
<td width="202">
On Playing

</td>
<td width="12">
</td>
<td width="728">
Called when Playback is ready to start after having been paused or delayed due to lack of media data.

</td>
</tr>
<tr>
<td width="202">
On Waiting

</td>
<td width="12">
</td>
<td width="728">
Called when Playback has stopped because the next frame is not available, but the widget expects that frame to become available in due course.

</td>
</tr>
<tr>
<td width="202">
On Seeking

</td>
<td width="12">
</td>
<td width="728">
Called when the seeking IDL attribute changed to true.

</td>
</tr>
<tr>
<td width="202">
On Seeked

</td>
<td width="12">
</td>
<td width="728">
Called when the seeking IDL attribute changed to false.

</td>
</tr>
<tr>
<td width="202">
On Ended

</td>
<td width="12">
</td>
<td width="728">
Called when the Playback has stopped because the end of the media resource was reached.

</td>
</tr>
<tr>
<td width="202">
On Duration Change

</td>
<td width="12">
</td>
<td width="728">
Called when the duration attribute has just been updated.

</td>
</tr>
<tr>
<td width="202">
On Time Update

</td>
<td width="12">
</td>
<td width="728">
Called when the current playback position changed as part of normal playback or in an especially interesting way, for example discontinuously.

</td>
</tr>
<tr>
<td width="202">
On Play

</td>
<td width="12">
</td>
<td width="728">
Called when the element is no longer paused. Fired after the [play()](/developers/user-guide/scripting-apis/client-api/widget-object-functions/video-audio-youtube-widget/play) method has returned, or when the autoplay attribute has caused playback to begin.

</td>
</tr>
<tr>
<td width="202">
On Pause

</td>
<td width="12">
</td>
<td width="728">
Called when the element has been paused. Fired after the [pause()](/developers/user-guide/scripting-apis/client-api/widget-object-functions/video-audio-youtube-widget/pause) method has returned.

</td>
</tr>
<tr>
<td width="202">
On Rate Change

</td>
<td width="12">
</td>
<td width="728">
Called when either the defaultPlaybackRate or the playbackRate attribute has just been updated. \*\*Not yet available\*\*

</td>
</tr>
<tr>
<td width="202">
On Volume Change

</td>
<td width="12">
</td>
<td width="728">
Called when either the volume attribute or the muted attribute has changed. Fired after the relevant attribute's setter has returned.

</td>
</tr>
</table>

<table>
<tr>
<td width="204">
  <strong>You Tube</strong>

</td>
<td width="11">
</td>
<td width="727">
for more information on YouTube Events see: [https://developers.google.com/youtube/iframe\_api\_reference\#Events](https://developers.google.com/youtube/iframe_api_reference#Events)

</td>
</tr>
<tr>
<td width="204">
On Player Ready

</td>
<td width="11">
</td>
<td width="727">
Called when the widget is ready to play.

</td>
</tr>
<tr>
<td width="204">
On State Change

</td>
<td width="11">
</td>
<td width="727">
Called when the state of the widget changes. See [state()](/developers/user-guide/scripting-apis/client-api/widget-object-functions/video-audio-youtube-widget/state)

</td>
</tr>
<tr>
<td width="204">
On Error

</td>
<td width="11">
</td>
<td width="727">
Called if an error detected in playing.

</td>
</tr>
<tr>
<td width="204">
On Playback Quality Change

</td>
<td width="11">
</td>
<td width="727">
Called when playback quality changes. See [setPlaybackQuality()](/developers/user-guide/scripting-apis/client-api/widget-object-functions/video-audio-youtube-widget/setplaybackquality)

</td>
</tr>
</table>
