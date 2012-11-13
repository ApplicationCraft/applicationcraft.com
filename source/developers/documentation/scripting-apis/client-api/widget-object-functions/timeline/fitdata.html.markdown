---
title: "fitData()"
active_menu_item: developers
class_name: developers
full_width: true
---


**fitData** ()

## Description

Adjusts the date range of a Timeline widget to accommodate all events loaded into it. Should be called after data has been loaded using [populateWidget()](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/populatewidget/) .

## Example

     
    function handler_actionBtn6_onClick(mouseev){
        app.w("timeline1").fitData();
    }
     
     
   

## See Also

 - [scroll()](/developers/documentation/scripting-apis/client-api/widget-object-functions/timeline/scroll)
 - [scrollTo()](/developers/documentation/scripting-apis/client-api/useful-browser-functions/scrollto)
 - [Timeline Events](/developers/documentation/scripting-apis/client-api/widget-object-functions/timeline/eventstimeline)
 - [populateWidget()](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/populatewidget/)
 - [Working with the Timeline Widget](/developers/documentation/product-guide/advanced-important-widgets/working-with-the-timeline-widget/)

