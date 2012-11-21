---
old_url: muted.htm
title: "muted()"
active_menu_item: developers
class_name: developers
full_width: true
---


**muted** ()

## Description

Allows you to mute or unmute the sound.

## Example

The following example shows how you can toggle to mute/unmute as a button is clicked.

    var mute = false;
     
    function handler_btnMute_onClick(mouseev){
        mute = !mute;
        app.w("Video").muted(mute);
    }
     
     
   

