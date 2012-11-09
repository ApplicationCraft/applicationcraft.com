---
title: "Viewing Widget Properties"
active_menu_item: developers
class_name: developers
full_width: true
---


You may also want to watch all properties of one or more Widgets. the debugProperties() function allows you to specify the Widget or Widgets whose properties you want to examine. Then, the debugger will let you simply explore those Widgets and their properties by expanding the object tree.

    watchVars = app.debugProperties(["firstWidgetName", "anotherWidgetName"]); // Watches 2 widgets
    singleWatchVar = app.debugProperties('anyWidget'); // watches a single Widget
   

