---
title: "bindViewData()"
active_menu_item: developers
class_name: developers
full_width: true
---


**bindViewData** (viewName, identifier, postCallback(), optional preCallback()) **[coming soon]**

## Parameters

<table>
<tr>
<td width="202">
{string} viewName

</td>
<td width="17">
</td>
<td width="661">
The name of the View to bind to the callback functions specified below

</td>
</tr>
<tr>
<td width="202">
{string} identifier

</td>
<td width="17">
</td>
<td width="661">
This is any text string used to uniquely identify the drill down broadcast to prevent additive drilling down for the same expression. Explained in more detail below.

</td>
</tr>
<tr>
<td width="202">
{function} postCallback

</td>
<td width="17">
</td>
<td width="661">
The callback function that is called each time the View's data has been freshly retrieved.

</td>
</tr>
<tr>
<td width="202">
{function} preCallback

</td>
<td width="17">
</td>
<td width="661">
Optional, the callback function that should be called just before AC requests new data. This allows you to inspect or modify the filter or cancel the data fetch.

</td>
</tr>
</table>
## Description

This function allows you to define callback functions that should be called whenever

 - data is about to be fetched (preCallback)

 - data has been fetched (postCallback - this is the one you will use most often)

## Callback Functions

The callback functions have the format **callback** (error, data, identifier), where  error is a boolean value and data is an array containing the returned data and identifier is the string specified in the bindViewData() function call.

The identifier is the identifier string that was included in the bindViewData() function call. It allows you to uniquely identify a binding should multiple viewBindData calls all share the same callback function.

## See Also

 - [Reporting & Dashboards](../../../product-guide/advanced-features/data-integration,-reporting-dashboards/) (good introduction to Views)

 - [getViewData()](getviewdata)

 - [drillDownBroadcast()](drilldownbroadcast)

 - [bindViewData()](setviewcallback)

