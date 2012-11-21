---
old_url: speed_considerations.htm
title: "Speed Considerations"
active_menu_item: developers
class_name: developers
full_width: true
---


There are certain things you should be aware of that affect performance with Repeater Containers. The main thing to realize is that AC will need to create lots and lots of widgets. If a Repeater contains 8 widgets and you throw 10 rows of data at it, then this is 80 new widgets that have to be dynamically created.

If you throw 100 rows at it, then this is probably fine on a desktop browser but probably awful on a smartphone. The trick is to plan the way you manage your data.

## Elements Per Page Property

This specified the maximum number of records that the Repeater Container will load. You can then use Data Paging (next topic) to move through your data source. There are also API methods [fetchDataPage()](/developers/documentation/scripting-apis/client-api/data-view-functions/fetchdatapage) and [drawNextPage()](/developers/documentation/scripting-apis/client-api/widget-object-functions/repeater-grid/drawnextpage) that support data page navigation.

## Related Videos

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/Bq6PinoEIA8?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Managing Large Lists, Repeater Contents & Data Paging [4:25]
