---
title: "fitData()"
active_menu_item: developers
class_name: developers
full_width: true
---


**fitData** ()

## Description

Adjusts the date range of a Timeline widget to accommodate all events loaded into it. Should be called after data has been loaded using [populateWidget()](../../widget-data-state-manipulation/populatewidget/) .

## Example

     
    function@handler_actionBtn6_onClick(mouseev){
        app.w("timeline1").fitData();
    }
     
     
   

## See Also:

 - [scroll()](scroll.htm)

 - [scrollTo()](../../useful-browser-functions/scrollto)

 - [Timeline Events](eventstimeline.htm)

 - [populateWidget()](../../widget-data-state-manipulation/populatewidget/)

 - [Working with the Timeline Widget](../../../../product-guide/advanced-important-widgets/working-with-the-timeline-widget/)

