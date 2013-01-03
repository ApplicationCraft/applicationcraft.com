---
old_url: video_widgets.htm
title: "Video & Audio Widgets"
active_menu_item: developers
class_name: developers
full_width: true
---


![video-widget-example](/img/docs/video-widget-example.jpg)

The Video and Audio Widgets can be found in the Advanced section of the Widget Toolbox

 - Video Widget - for all regular video file formats

 - Audio Widget - this has less properties than the Video Widgets but it uses the same underlying library and so this chapter documents both. Where there are differences it is indicated.

Each of these Widgets come with [Properties](/developers/documentation/product-guide/advanced-important-widgets/video-audio-widgets/property-methods-event-summary/properties) , [Methods](/developers/documentation/product-guide/advanced-important-widgets/video-audio-widgets/property-methods-event-summary/vidmethods) and [Events](/developers/documentation/product-guide/advanced-important-widgets/video-audio-widgets/property-methods-event-summary/videvents) as described below.

Please note that Android 2.3.x is not able to support HTML5 Video.  You may wish to implement detection of the OS on the users device to give Android 2.3.x users an alternative method to access the Video

Also available is a  widget that can be used to play YouTube videos in Apps. The [Methods](/developers/documentation/product-guide/advanced-important-widgets/video-audio-widgets/property-methods-event-summary/vidmethods) for Video/Audio widgets also apply to the [YouTube](/developers/documentation/product-guide/widget-properties-events/advanced/youtube) widget. If you are planning to compile your app to use on iOS, you will need  to set the [PhoneGap App Options](/developers/documentation/ac-mobile-build-phonegap/apps-developed-with-application-craft/enabling-device-features) 'Open all links in WebView' to true.

We also have included the [jPlayer](http://jplayer.org/) jQuery widget that can be worth looking at as well. This widget supports both Audio and Video sources. See [jplayer](/developers/documentation/product-guide/widget-properties-events/advanced/jplayer)

