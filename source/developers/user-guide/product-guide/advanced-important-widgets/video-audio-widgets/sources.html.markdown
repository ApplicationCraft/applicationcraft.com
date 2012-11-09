---
title: "Source"
active_menu_item: developers
class_name: developers
full_width: true
---


The Sources property allows you to specify one or more Video sources for your video. The clever things about this approach is that the Application Craft Widget can allow you to specify more than one media file so that multiple browsers can be supported without the need for any complex coding.

See: [http://en.wikipedia.org/wiki/HTML5\_video](http://en.wikipedia.org/wiki/HTML5_video)

Simple Case

In most cases, you will point to a single video. For this case, you add a single item and then point to the media URL.  You must set the Type drop-down as well to the type of your video

![videos-sources-youtube](/img/docs/videos-sources-youtube.zoom97.png)

Advanced Case

Below is the Source dialog for a more advanced situation. You can see how we have specified three different media files, each of which has a different format. This allows the widget to play the best format for the user's browser.

![video-sources-dialog](/img/docs/video-sources-dialog.zoom99.png)

Native Apps

If you are building a Native App and require your media to be playable even if no connection is available, you can upload your Media as a [Resource](../../the-console/console-tabs/resources) and then specify this Resource item in the Sources dialog. Any referenced media will then be automatically compiled into the native app. Be aware though that there can be limits to the size of the app and if including media resources this limit may be exceeded.

If you are looking to work with large media files, do not add your video to the List of Items, but handle it by code as the app starts:

    function handler_application_onAppStarted(){
    app.setProperty('HTML5Video', 'source', [{type:'video/mp4', src:'http://yourserver.com/yourmedia.mp4'}]);
    }
   

This will ensure that the video is not included in the build and so not be affected by any limitations
