---
title: "Mobile List & Navbar"
active_menu_item: developers
class_name: developers
full_width: true
---


[Mobile Lists](../../../../../product-guide/advanced-important-widgets/important-mobile-widgets/mobile-list-widget/index.htm) (of all types) and [Navbars](../../../../../product-guide/advanced-important-widgets/important-mobile-widgets/mobile-navigation-toolbar.htm) can be populated from code using [setData()](../../../../client-api/widget-data-state-manipulation/setdata.htm) or [populateWidget()](../../../../client-api/widget-data-state-manipulation/populatewidget()/index.htm) . Each has its own distinct advantages. Which one to use depends entirely on where the data originates that populates your Mobile List.

If your recordset/dataset comes from another system (maybe a Web Service API) then you will probably want to use [populateWidget()](../../../../client-api/widget-data-state-manipulation/populatewidget()/index.htm) as it allows very easy mapping from your source data to the widget without the need to write your own mapping logic.

However, if you can easily work with the array structure that getData() and setData() work with, then this is a little simpler. [setData()](../../../../client-api/widget-data-state-manipulation/setdata.htm) requires an object array parameter.

[setData()](../../../../client-api/widget-data-state-manipulation/setdata.htm) Selection Object

All item data for the Mobile List widget is described in the following Javascript object

    { "value":"1", // If you are storing data in Application Craft, this value will get stored
    "label":"United Kingdom", // appears as list content
    "image": imgUrl,   // image url if required
    "divider": "false",  // true if divider should be shown
    "count": "25",   // the number to show in the count bubble
    "aside": "Short Text",  // appears on the right of thee content in smaller font
    "action": id    // page jump action id (generally for internal use only)
    }
    { "label":"Go", // appears as list content
    "icon": "none",   // an icon name
    "action": id    // page jump action id (generally for internal use only)
    }
   

If populating a Navbar widget then the following object is used

Example

    lstItems = app.w('myMobileList').getData();  // get all list items from the list
    lstItems[0].count = 12;   // modify the count field in the first row to 11
    app.setData('myMobileList', lstItems); // write the whole array back
   

