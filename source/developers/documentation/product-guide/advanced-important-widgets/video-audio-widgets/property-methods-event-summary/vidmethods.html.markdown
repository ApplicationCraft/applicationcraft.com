---
old_url: vidmethods.htm
title: "Methods"
active_menu_item: developers
class_name: developers
full_width: true
---


The following method table is a summary of the methods available for the Widget object. Each method is described in detail in the [Video & Audio Widget](/developers/documentation/scripting-apis/client-api/widget-object-functions/video-audio-youtube-widget/) Reference section.

**HTML5 Audio, HTML5 Video, jPlayer and YouTube widget**
  
 - [play()](/developers/documentation/scripting-apis/client-api/widget-object-functions/video-audio-youtube-widget/play)
    Play the video/audio.
 - [pause()](/developers/documentation/scripting-apis/client-api/widget-object-functions/video-audio-youtube-widget/pause)
    Pause the video/audio.
 - [load()](/developers/documentation/scripting-apis/client-api/widget-object-functions/video-audio-youtube-widget/load)
    Load or reload the video/audio.
 - [muted()](/developers/documentation/scripting-apis/client-api/widget-object-functions/video-audio-youtube-widget/muted)
    Mute the media.
 - [poster()](/developers/documentation/scripting-apis/client-api/widget-object-functions/video-audio-youtube-widget/poster) URL or Resource of the Image displayed in the Widget before it plays.
 - [populateWidget()](/developers/documentation/scripting-apis/client-api/widget-object-functions/video-audio-youtube-widget/vidpopulatewidget)
    Although this is not a method of the widget, it is used to set the media source(s) from javascript.

**HTML5 Audio, HTML5 Video, and YouTube widget**

 - [currentTime()](/developers/documentation/scripting-apis/client-api/widget-object-functions/video-audio-youtube-widget/currenttime)
    Go to a specific location within the video/audio (in seconds).
 - [enable()](/developers/documentation/scripting-apis/client-api/widget-object-functions/video-audio-youtube-widget/enable)
    Enables or Disables the widget.
 - [controls()](/developers/documentation/scripting-apis/client-api/widget-object-functions/video-audio-youtube-widget/controls)
    Show the in-built video controls.


**YouTube and jPlayer widget**

 - [stop()](/developers/documentation/scripting-apis/client-api/widget-object-functions/video-audio-youtube-widget/stop)
    Stops the widget playing.
 - [volume()](/developers/documentation/scripting-apis/client-api/widget-object-functions/video-audio-youtube-widget/volume)
    Get/Set the Volume.

**YouTube widget**

 - [getYoutubePlayer()](/developers/documentation/scripting-apis/client-api/widget-object-functions/video-audio-youtube-widget/getyoutubeplayer)
    Returns the You Tube player object.
 - [clearVideo()](/developers/documentation/scripting-apis/client-api/widget-object-functions/video-audio-youtube-widget/clearvideo)
    Clears the YouTube video.
 - [duration()](/developers/documentation/scripting-apis/client-api/widget-object-functions/video-audio-youtube-widget/duration)
    Returns the duration in seconds of the currently playing video.
 - [state()](/developers/documentation/scripting-apis/client-api/widget-object-functions/video-audio-youtube-widget/state)
    Returns the state of the You Tube video.
 - [setPlaybackQuality()](/developers/documentation/scripting-apis/client-api/widget-object-functions/video-audio-youtube-widget/setplaybackquality)
    Sets the suggested video quality for the current video.
 - [getPlaybackQuality()](/developers/documentation/scripting-apis/client-api/widget-object-functions/video-audio-youtube-widget/getplaybackquality)
    Gets the video quality for the current video.
 - [getAvailableQualityLevels()](/developers/documentation/scripting-apis/client-api/widget-object-functions/video-audio-youtube-widget/getavailablequalitylevels)
    Returns the set of quality formats in which the current video is available.

**jPlayer widget**


- [clearMedia()](/developers/documentation/scripting-apis/client-api/widget-object-functions/video-audio-youtube-widget/clearmedia)
    Clears the Media.
- [pauseOthers()](/developers/documentation/scripting-apis/client-api/widget-object-functions/video-audio-youtube-widget/pauseothers)
    This method pauses all instances except the instance that invoked the command. 
- [isPlayerReady()](/developers/documentation/scripting-apis/client-api/widget-object-functions/video-audio-youtube-widget/isplayerready)
	Returns the status of the player (true/false).
- [player()](/developers/documentation/scripting-apis/client-api/widget-object-functions/video-audio-youtube-widget/player)
    Returns player object.
- [preload()](/developers/documentation/scripting-apis/client-api/widget-object-functions/video-audio-youtube-widget/preload) Determines whether the media should be preloaded.
- [loop()](/developers/documentation/scripting-apis/client-api/widget-object-functions/video-audio-youtube-widget/loop)
   Sets the initial loop state.