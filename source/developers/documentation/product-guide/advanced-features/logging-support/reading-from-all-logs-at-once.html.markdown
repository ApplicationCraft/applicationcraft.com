---
title: "Reading from All Logs at Once"
active_menu_item: developers
class_name: developers
full_width: true
---


It is also possible to have a single query that contains all App logs at once. In order for this to be possible, the developer needs to have appropriate permissions as described in the [Permissioning](/developers/documentation/product-guide/advanced-features/logging-support/permissioning) topic.

If you have the required rights, then the first screen within the query editor will contain a tab 'Global', as shown below. You then select 'All logs' and carry on with the query.

![logs-global-query](/img/docs/logs-global-query.png)

Please refer to the [Data Section Properties](/developers/documentation/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/) chapter for information on how to set up Data Views and then populate data into your widgets.

You can also use [getViewData()](/developers/documentation/scripting-apis/client-api/data-view-functions/getviewdata) if you prefer a lower level approach that gives you access to the log data in an array.
