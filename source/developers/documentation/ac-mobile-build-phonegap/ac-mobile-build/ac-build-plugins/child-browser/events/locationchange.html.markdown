---
old_url: locationchange.htm
title: "locationChange"
active_menu_item: developers
class_name: developers
full_width: true
---


## Description

This event is called when the ChildBrowser loads a URL (including the initial location, when [showWebPage()](/developers/documentation/ac-mobile-build-phonegap/ac-mobile-build/ac-build-plugins/child-browser/methods/showwebpage) is called). The callback function is passed the new URL being loaded.

## Example

    window.plugins.childBrowser.onLocationChange = function (url) {
        alert('childBrowser has loaded ' + url);
    };
   

