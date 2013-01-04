---
old_url: clearmedia.htm
title: "clearMedia()"
active_menu_item: developers
class_name: developers
full_width: true
---


**clearMedia** ()


## Description

This method is used to clear the media and stop playback. If a media file is downloading at the time, the download will be cancelled.

After this command is issued, playback commands such as "play" will be ignored and raise error events until after new media has been specified.

There are very few circumstances when it is appropriate to use this method. In general when you are changing media, this action is automatically performed.

## Example

     
    app.w("jPlayer").clearMedia();