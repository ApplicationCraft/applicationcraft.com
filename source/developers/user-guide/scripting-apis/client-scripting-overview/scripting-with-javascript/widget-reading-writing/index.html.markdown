---
title: "Widget Reading & Writing"
active_menu_item: developers
class_name: developers
full_width: true
---


Reading data from and writing data to App Widgets is probably the single most common thing you will do with your scripts. Application Craft provides you with a comprehensive set of functions that provides full access to simple and complex Widgets and their properties.

Generally speaking, [setData()](/developers/user-guide/scripting-apis/client-api/widget-data-state-manipulation/setdata) / [getData()](/developers/user-guide/scripting-apis/client-api/widget-data-state-manipulation/getdata) and [setValue()](/developers/user-guide/scripting-apis/client-api/widget-data-state-manipulation/refsetvalue) / [getValue()](/developers/user-guide/scripting-apis/client-api/widget-data-state-manipulation/refgetvalue) are the workhorse functions for working with Widget data. [populateWidget()](/developers/user-guide/scripting-apis/client-api/widget-data-state-manipulation/populatewidget/) is also very important, especially for populating lists and repeater containers.

If you are working with server side databases, then extracting your data using [dataGetValues()](/developers/user-guide/scripting-apis/client-api/widget-data-state-manipulation/datagetvalues) and state information using [dataGetStates()](/developers/user-guide/scripting-apis/client-api/widget-data-state-manipulation/datagetstates) is often the best and quickest way to go.

Related Video:

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/1UIHv__i3uI?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) The Application Craft Client API [2:01]

