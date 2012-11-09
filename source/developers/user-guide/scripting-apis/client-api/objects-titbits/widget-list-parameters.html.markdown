---
title: "Widget List Parameters"
active_menu_item: developers
class_name: developers
full_width: true
---


Many functions require you to identify a Widget or Widgets. Wherever you see a {wlist} parameter type, you can pass in any of the following

 - Widget Name - a simple string

 - Widget Name array - an array of strings

 - Widget Object - a [Widget Object](widget-object)

 - Widget Object Array - an array of Widget objects

Example

    app.visible('myTextBox', true)
    app.resetWidget(['myTextBox', 'yourTextBox']);
    var wobj = app.w('myGrid');
    var wobj2 = app.w('myLabel');
    app.resetWidget([wobj, wobj2]);
   

