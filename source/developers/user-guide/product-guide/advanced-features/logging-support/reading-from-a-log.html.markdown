---
title: "Reading from a Log"
active_menu_item: developers
class_name: developers
full_width: true
---


In order to read from a log, you first need to set up a Query to access the log data. This is done in the same way as accessing App data. You select the App and then look for the 'Logs' entry for that App.

You can grant permissions to allow other users to access your App's log if necessary. If a log is available, then with the Apps tab selected, as shown below, you will see the 'Logs' sub selection for that App. You select this entry and add it to the right hand panel of the Query Editor.

![query-logs](/img/docs/query-logs.png)

The big advantage of this approach is that you can load your log data into any suitable widget (Grid, Mobile List, Repeater Container etc) without having to write any code.

Please refer to the [Data Section Properties](/developers/user-guide/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/) chapter for information on how to set up Data Views and then populate data into your widgets.

You can also use [getViewData()](/developers/user-guide/scripting-apis/client-api/data-view-functions/getviewdata) if you prefer a lower level approach that gives you access to the log data in an array.

