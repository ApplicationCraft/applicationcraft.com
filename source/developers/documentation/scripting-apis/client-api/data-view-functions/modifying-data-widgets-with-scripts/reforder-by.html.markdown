---
old_url: reforder_by.htm
title: "Order By"
active_menu_item: developers
class_name: developers
full_width: true
---


Your script can modify a Widget's Order By property by passing in an object that allows you to specify the Data View field and ascending or descending order.

Having modified the Order By Property, you need to call [app.refreshData()](/developers/documentation/scripting-apis/client-api/widget-functions/refreshdata) to reload the Widget's data to reflect the change.

## Example

    objOrder = {value:"{company.name}", asc:true};
    app.setProperty('widgetName', 'orderBy', objOrder);
    app.refreshData('widgetName');
   

## See Also

 - [Expressions](/developers/documentation/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/the-expression-editor)
 - [getViewData()](/developers/documentation/scripting-apis/client-api/data-view-functions/getviewdata)
 - [Data View Related Events](/developers/documentation/scripting-apis/client-api/data-view-functions/data-view-related-events)

## Related Videos

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/4FXN_AsiiMs?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Populating Chart Widgets [5:04]
