---
title: "locationChange"
active_menu_item: developers
class_name: developers
full_width: true
---


## Description

This event is called when the ChildBrowser loads a URL (including the initial location, when [showWebPage()](../methods/showwebpage) is called). The callback function is passed the new URL being loaded.

**Example**

    window.plugins.childBrowser.onLocationChange@=@function@(url)@{
        alert('childBrowser has loaded ' + url);
    };
   

