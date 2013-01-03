---
old_url: videvents.htm
title: "Events"
active_menu_item: developers
class_name: developers
full_width: true
---


This section list only Events specific to the Audio and Video Widgets. For the common Events, please refer to the [Events](/developers/documentation/product-guide/widget-properties-events/events/) section.

<table>
<tr>
<td width="202">
  <b>Audio/Video Events</b>

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
  Called when the element is no longer paused. Fired after the <a href="/developers/documentation/scripting-apis/client-api/widget-object-functions/video-audio-youtube-widget/play">play()</a> method has returned, or when the autoplay attribute has caused playback to begin.

</td>
</tr>
<tr>
<td width="202">
On Pause

</td>
<td width="12">
</td>
<td width="728">
  Called when the element has been paused. Fired after the <a href="/developers/documentation/scripting-apis/client-api/widget-object-functions/video-audio-youtube-widget/pause">pause()</a> method has returned.

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
<td width="202">
  <b>You Tube</b>

</td>
<td width="12">
</td>
<td width="728">
for more information on YouTube Events see: <a href="https://developers.google.com/youtube/iframe_api_reference#Events">https://developers.google.com/youtube/iframe_api_reference#Events</a>

</td>
</tr>
<tr>
<td width="202">
On Player Ready

</td>
<td width="12">
</td>
<td width="728">
Called when the widget is ready to play.

</td>
</tr>
<tr>
<td width="202">
On State Change

</td>
<td width="12">
</td>
<td width="728">
  Called when the state of the widget changes. See <a href="/developers/documentation/scripting-apis/client-api/widget-object-functions/video-audio-youtube-widget/state">state()</a>

</td>
</tr>
<tr>
<td width="202">
On Error

</td>
<td width="12">
</td>
<td width="728">
Called if an error detected in playing.

</td>
</tr>
<tr>
<td width="202">
On Playback Quality Change

</td>
<td width="12">
</td>
<td width="728">
  Called when playback quality changes. See <a href="/developers/documentation/scripting-apis/client-api/widget-object-functions/video-audio-youtube-widget/setplaybackquality">setPlaybackQuality()</a>

</td>
</tr>
</table>
<table>
<tr>
<td width="202">
  <b>jPlayer</b>  ***Work in Progress***

</td>
<td width="12">
</td>
<td width="728">
for more information on jPlayer Events see: <a href="http://www.jplayer.org/latest/developer-guide/#jPlayer-events">http://www.jplayer.org/latest/developer-guide/#jPlayer-events</a>

</td>
</tr>
<tr>
<td width="202">
On Ready

</td>
<td width="12">
</td>
<td width="728">
+ † Occurs when jPlayer is ready to receive commands.

</td>
</tr>
<tr>
<td width="202">
On Flash Reset

</td>
<td width="12">
</td>
<td width="728">
 + † Occurs when the Flash solution generates another ready event.

</td>
</tr>
<tr>
<td width="202">
On Resize

</td>
<td width="12">
</td>
<td width="728">
+ † Occurs when the screen state changes and when the size/sizeFull options are changed.

</td>
</tr>
<tr>
<td width="202">
On Repeat

</td>
<td width="12">
</td>
<td width="728">
 + † Occurs when the loop state is changed and before the ready event.

</td>
</tr>
<tr>
<td width="202">
On jPlayer Click

</td>
<td width="12">
</td>
<td width="728">
 + † Occurs when the user clicks on the poster or video. 

</td>
</tr>
<tr>
<td width="202">On Error

</td>
<td width="12">
</td>
<td width="728">
 + ‡

</td>
</tr>
<tr>
<td width="202">
On Warning

</td>
<td width="12">
</td>
<td width="728">
 + †

</td>
</tr>
<tr>
<td width="202">
On Load Start

</td>
<td width="12">
</td>
<td width="728">
 +

</td>
</tr>
<tr>
<td width="202">
On Progress

</td>
<td width="12">
</td>
<td width="728">
 + Occurs while the media is being downloaded.

</td>
</tr>
<tr>
<td width="202">
On Suspend

</td>
<td width="12">
</td>
<td width="728">
 

</td>
</tr>
<tr>
<td width="202">
On Abort

</td>
<td width="12">
</td>
<td width="728">
 

</td>
</tr><tr>
<td width="202">
On Emptied

</td>
<td width="12">
</td>
<td width="728">
 

</td>
</tr>
<tr>
<td width="202">
On Stalled

</td>
<td width="12">
</td>
<td width="728">
 

</td>
</tr>
<tr>
<td width="202">
On Play

</td>
<td width="12">
</td>
<td width="728">
  + Occurs when the media is played.

</td>
</tr>
<tr>
<td width="202">
On Pause

</td>
<td width="12">
</td>
<td width="728">
 + Occurs when the media is paused.

</td>
</tr>
<tr>
<td width="202">
On Loaded Metadata

</td>
<td width="12">
</td>
<td width="728">
 

</td>
</tr>
<tr>
<td width="202">
On Loaded Data

</td>
<td width="12">
</td>
<td width="728">
 

</td>
</tr>
<tr>
<td width="202">
On Waiting

</td>
<td width="12">
</td>
<td width="728">
 

</td>
</tr>
<tr>
<td width="202">
On Playing

</td>
<td width="12">
</td>
<td width="728">
 

</td>
</tr>
<tr>
<td width="202">
On Can Play

</td>
<td width="12">
</td>
<td width="728">
 

</td>
</tr>
<tr>
<td width="202">
On Can Play Through

</td>
<td width="12">
</td>
<td width="728">
 

</td>
</tr>
<tr>
<td width="202">
On Seeking

</td>
<td width="12">
</td>
<td width="728">
 +

</td>
</tr>
<tr>
<td width="202">
On Seeked

</td>
<td width="12">
</td>
<td width="728">
 *

</td>
</tr>
<tr>
<td width="202">
On Time Update

</td>
<td width="12">
</td>
<td width="728">
 * Occurs when the currentTime is changed. (~250ms between events during playback.)

</td>
</tr>
<tr>
<td width="202">
On Ended

</td>
<td width="12">
</td>
<td width="728">
 + Occurs when the media ends.

</td>
</tr>
<tr>
<td width="202">
On Rate Change

</td>
<td width="12">
</td>
<td width="728">
 

</td>
</tr>
<tr>
<td width="202">
On Duration Change

</td>
<td width="12">
</td>
<td width="728">
 

</td>
</tr>
<tr>
<td width="202">
On Volume Change

</td>
<td width="12">
</td>
<td .width="728">
 + Occurs when volume or muted change.

</td>
</tr>
</table>
<table>
<tr>
<td width="800">
+ A jPlayer event supported by both the Flash fallback and HTML5 browsers
</td>
</tr>
<td width="800">
† jPlayer event that is not part of the HTML5 Spec
</td>
</tr>
<td width="800">
‡ jPlayer event that differs from the html Spec. ie., There is more than 1 type of error.
</td></tr>
</table>
