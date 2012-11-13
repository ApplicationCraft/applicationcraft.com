---
title: "Populating from Code"
active_menu_item: developers
class_name: developers
full_width: true
---


In many cases, you will want to populate the contents of a Mobile List widget from Javascript code. This can be done using the two API functions

 - [app.populateWidget()](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/populatewidget/) - this is the best function to use if you have data returned from a Web Service API call, for example, where you have structured,  complex data that needs mapping from the returned data structure into the various List fields (Label, Value, Aside, Count etc.).

 - [app.setData()](/developers/documentation/scripting-apis/client-scripting-overview/scripting-with-javascript/widget-reading-writing/widget-content-reading-and-writing/mobile-list) - this is useful if you are constructing your own array of data, where you can ensure that each element in the array has the correct structure to be passed directly into app.setData().

## Related Videos

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/q6VXeWOhAxA?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Populating List Widgets with Javascript  [5:15]
