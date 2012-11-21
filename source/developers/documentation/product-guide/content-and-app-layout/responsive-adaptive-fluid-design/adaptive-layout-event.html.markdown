---
old_url: adaptive_layout_event.htm
title: "Adaptive Layout Event"
active_menu_item: developers
class_name: developers
full_width: true
---


If you want maximum control, you can write some Javascript that controls what happens whenever a widget's Adaptive Layout rule is triggered.

This Event is an App event (not an event of the Panel Container as you might think). It is called once whenever the App resizing triggers an Adaptive Layout rule.

    function handler_application_onAdaptiveLayout(widget, props){
    }
   

The above code shows the Event function skeleton.

 - widget - this is the widget object of the Panel Container, whose Adaptive Layout rule has been triggered.

 - props - this contains an object with key/value pairs for each property that the rule changes

You can include any logic here you like for fine-tuning the UI appearance.

## Related Videos

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/cHbncpuUwo8?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Adaptive Rules [5:50]

