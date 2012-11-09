---
title: "drillDownBroadcast()"
active_menu_item: developers
class_name: developers
full_width: true
---


## drillDownBroadcast (viewName, filter, identifier, optional reset) [coming soon]

Parameters

<table>
<tr>
<td width="202">
{string} viewName

</td>
<td width="17">
</td>
<td width="661">
The name of the View to drill down

</td>
</tr>
<tr>
<td width="202">
{string|array} filter

</td>
<td width="17">
</td>
<td width="661">
This object is a single string expression or an array of filter expressions (described in more detail below).

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
{boolean} reset

</td>
<td width="17">
</td>
<td width="661">
If set to true,

</td>
</tr>
</table>

Description

This function triggers a drill down on the specified View using the specified filter. Any Widgets that are set to listen to a View's broadcast action will automatically request new data with the combined filter applied.

It is important to realize that the 'filter' expression supplied will, by default, be added to any drill-down filter that is currently in effect unless the reset parameter is set to true, in which case all existing drill-down filter expressions will be deleted and replaced by this one.

The 'identifier' parameter is important to set properly. It allows AC to know where the drill-down has come from. The next time a script calls the  drill-down with the same identifier, AC knows to remove the same expression and replace it with the new filter rather than adding it (which makes no sense on the same expression).

Filter Expressions

Please refer to the explanation provided in the previous [getViewData()](getviewdata) topic.

See Also:

 - [Reporting & Dashboards](../../../product-guide/advanced-features/data-integration,-reporting-dashboards/index) (good introduction to Views)

 - [getViewData()](getviewdata)

 - [drillDownBroadcast()](drilldownbroadcast)

 - [bindViewData()](setviewcallback)

