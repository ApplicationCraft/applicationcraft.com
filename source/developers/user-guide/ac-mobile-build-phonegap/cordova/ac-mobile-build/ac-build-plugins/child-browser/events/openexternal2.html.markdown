---
title: "openExternal"
active_menu_item: developers
class_name: developers
full_width: true
---


## Description

(iOS only) This event is called when the user opts to load an app in the device's browser (exiting the PhoneGap app in the process).

## Example

    window.plugins.childBrowser.onOpenExternal = function () {
        alert('opening Mobile Safari');
    };
   

