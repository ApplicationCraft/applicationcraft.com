---
title: "Events"
active_menu_item: developers
class_name: developers
full_width: true
---


There are two sets of Events available for the Timeline Widget

Mouse Events - these refer to the widget in general and do not differentiate between the Tree and Timeline areas within the Widget.

General Events - these are specific to the item clicked on within the widget

In most cases, you will be interested in the General Events. These events receive two parameters as shown in the example below

## Common Mouse Events

There are events for On Click, On Dbl Click, On Mouse Enter and On Mouse Leave. Below is an example

    function handler_timeline_onItemClick(data, isItemInTree){
        console.log("timeline");
        console.dir(data);
    }
    function handler_timeline1_onScroll(startDate, endDate){
        console.dir({arg: arguments});
    }
   

 - The data parameter is an object containing all metadata associated with the item.

 - isItemInTree is set to true if the item clicked on is a Tree item rather than a Timeline event

## Scroll Events

In addition, there is the On Scroll event. This event is called whenever the timeline display area changes.

## See Also

 - [fitData()](/developers/documentation/scripting-apis/client-api/widget-object-functions/timeline/fitdata)
 - [scroll()](/developers/documentation/scripting-apis/client-api/widget-object-functions/timeline/scroll)
 - [scrollTo()](/developers/documentation/scripting-apis/client-api/useful-browser-functions/scrollto)
 - [populateWidget()](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/populatewidget/)
 - [Working with the Timeline Widget](/developers/documentation/product-guide/advanced-important-widgets/working-with-the-timeline-widget/)

