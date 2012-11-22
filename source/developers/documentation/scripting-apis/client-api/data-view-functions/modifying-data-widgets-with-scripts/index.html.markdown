---
old_url: modifying_data_widgets_with_sc.htm
title: "Modifying Data Widgets with Scripts"
active_menu_item: developers
class_name: developers
full_width: true
---


You have full script control by modifying the required property of any Widget. The following properties can be modified using the app.setProperty() function and specifying the appropriate property name

 - Group By - app.setProperty('widgetName', 'groupBy', stringArray)

 - Order By - app.setProperty('widgetName', 'orderBy', objOrderArray)

 - Filter - app.setProperty('widgetName', 'filter', objFilterArray)

 - Drill Filter -  app.setProperty('widgetName', 'drillFilter', objFilterArray)

Each of these is described in more detail in the following sections

## Related Videos

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/rKbMmF7kcXs?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Javascript, Filtering, and other tips and tricks [6:11]
