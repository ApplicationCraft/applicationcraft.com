---
title: "Zooming, Panning & Scaling"
active_menu_item: developers
class_name: developers
full_width: true
---


There are two ways you can adjust the display of the timeline

 - Zooming - you narrow or expand the date range of the visible area so you effectively zoom on or out on your events. On a desktop browser, you can use the scroll wheel to adjust the zooming.

 - Panning - you can click and drag your mouse to pan the visible area to show earlier or later events

 - Scaling - you increase of decrease the physical size of the items

Adjusting in Code

There are several reasons you might want to control the viewing behavior of the Widget in code. If you are using touch screen devices, then you may find that you can use slider or other fields to adjust things rather than using your fingers.

Zooming

app.w('timeline1').zoomIn() - zooms in one step

app.w('timeline1').zoomOut() - zooms out one step

Panning

There are a couple of ways to adjust the timeline display area. Firstly, there are some widget methods

 - [app.w('Timeline1').scroll](../../../scripting-apis/client-api/widget-object-functions/timeline/scroll) (numDaysToScroll)

 - [app.w('Timeline1').scrollTo](../../../scripting-apis/client-api/useful-browser-functions/scrollto) (date)

or you can set properties

    function handler_btnSetRange_onClick(mouseev){
    app.setProperty('timeline1', 'timelineMinDate', app.getValue('dtStart'));
    app.setProperty('timeline1', 'timelineMaxDate', app.getValue('dtEnd'));
    }
   

Scaling

Here, we adjust some properties to achieve the scaling effect. You can see we adjust the icon sizes in the Timeline and Tree Item display areas. Then, we also adjust the font size as well.

    function handler_sliderH_onSlide(value){
    var fSize;
    app.setProperty("timeline1", "timelineIconSize", value);
    app.setProperty("timeline1", "treeIconSize", value);
    if(value<32) {
    fSize = 10;
    }
    else {
    fSize = 10 + (value-32)*0.7;
    }
    app.setProperty('timeline1', 'timelineitemfont', "normal " + fSize + "px Arial");
    }
   

