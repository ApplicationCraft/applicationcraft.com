---
title: "The 'debugger' Command"
active_menu_item: developers
class_name: developers
full_width: true
---


You should include the 'debugger;' command within your Javascript code so the debugger automatically stops at this point within your code.

        watchVar = app.debugValues(["firstName", "Email", "Listbox"]);
        debugger;
      
   

Note how the watchVar = app.debugValues(["firstName", "Email", "Listbox"]) is placed on the line beforehand. This will create a variable called watchVar that you can immediately watch (it is automatically placed within the local scope variables in Chrome) to see how specific Widget values are set at that point.

## Related Videos

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/q6VXeWOhAxA?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Populating List Widgets with Javascript  [5:15]
