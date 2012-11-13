---
title: "enableView()"
active_menu_item: developers
class_name: developers
full_width: true
---


**enableView** (viewName, state)

## Parameters

<table>
<tr>
<td width="144">
{string} viewName

</td>
<td width="10">
</td>
<td width="726">
the name of your specified View

</td>
</tr>
<tr>
<td width="144">
{boolean} state

</td>
<td width="10">
</td>
<td width="726">
the state of enable view

</td>
</tr>
</table>
## Description

This enables (state=true) or disables (state=false) the specified View as defined in the [Data Manager](/developers/documentation/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/configuring-the-app-to-access) . The View Name is the name specified in the "Queries Used" section.

If a View is disabled, then it will not request data from the source when drill-down type actions occur. You can force a Widget to refresh its data from a View by using the [refreshData()](/developers/documentation/scripting-apis/client-api/widget-functions/refreshdata) function.

## See Also

 - [refreshData()](/developers/documentation/scripting-apis/client-api/widget-functions/refreshdata)

