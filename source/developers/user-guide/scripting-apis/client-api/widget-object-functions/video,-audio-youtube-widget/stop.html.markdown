---
title: "stop()"
active_menu_item: developers
class_name: developers
full_width: true
---


## stop ()

Description

Stops and cancels loading of the current video. This function should be reserved for rare situations when you know that the user will not be watching additional video in the player. If your intent is to pause the video, you should just call the [pause()](pause.htm) function. If you want to change the video that the player is playing, you can call one of the queuing functions without calling stopVideo first.

## Important : Unlike the [pause()](pause.htm) function, which leaves the player in the paused (2) state, the stop function could put the player into any not-playing state, including ended (0), paused (2), video cued (5) or unstarted (-1).

## Example

    app.w('YouTube').getYouTubePlayer().stop();
   

