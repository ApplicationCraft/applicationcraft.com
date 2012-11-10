---
title: "Group By"
active_menu_item: developers
class_name: developers
full_width: true
---


Your script can modify a Widget's Group By property by passing in an array of string Expressions that identify which Data View fields should be grouped.

Having modified the Group By property, you need to call [app.refreshData()](../../widget-functions/refreshdata) to reload the Widget's data to reflect the change.

## Example

    var group = ["{company.country}", "{company.state}"];
    app.setProperty('widgetName', 'groupBy', group);
    app.refreshData('widgetName');
   

## See Also

 - [Expressions](../../../../product-guide/advanced-features/data-integration,-reporting-dashboards/data-section-properties/the-expression-editor)

 - [getViewData()](../getviewdata)

 - [Data View Related Events](../data-view-related-events)

Related Video:

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/4FXN_AsiiMs?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Populating Chart Widgets [5:04]
