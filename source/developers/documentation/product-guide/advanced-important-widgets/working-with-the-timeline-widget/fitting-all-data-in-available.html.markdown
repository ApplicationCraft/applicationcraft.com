---
old_url: fitting_all_data_in_available_.htm
title: "Fitting All Data In Available Display"
active_menu_item: developers
class_name: developers
full_width: true
---


When you load data into the timeline widget, Application Craft will not resize the window to accommodate the events. The [fitData()](/developers/documentation/scripting-apis/client-api/widget-object-functions/timeline/fitdata) widget function does this for you.

        // This takes your source data and puts it into the timeline widget
        // Note that the tree and timeline data arrays are accompanied by their mapping objects
        app.populateWidget("timeline1", treeArr, timelineArr, treeMap, timelineMap);
        
        // Fit the full time range into the available display
        app.w("timeline1").fitData();    
   

The above example is taken from the previous section and shows how, once the data has been fully loaded, the time horizon is adjusted to accommodate all the events.

