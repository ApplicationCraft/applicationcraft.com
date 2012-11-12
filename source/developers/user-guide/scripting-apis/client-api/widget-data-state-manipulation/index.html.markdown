---
title: "Widget Data & State Manipulation"
active_menu_item: developers
class_name: developers
full_width: true
---


The functions in this section deal with widget values and states (visible, enabled, read-only).

For normal reading and writing of widget data, please refer to the section [Reading and Writing App Data](/developers/user-guide/scripting-apis/client-scripting-overview/scripting-with-javascript/widget-reading-writing/) .

**In This Section:**

<table>
<tr>
<td width="206">
[assign()](/developers/user-guide/scripting-apis/client-api/widget-data-state-manipulation/assign)

</td>
<td width="17">
</td>
<td width="657">
Assigns an AC Expression to one or more Widgets

</td>
</tr>
<tr>
<td width="206">
[getValue()](/developers/user-guide/scripting-apis/client-api/widget-data-state-manipulation/refgetvalue)

</td>
<td width="17">
</td>
<td width="657">
Gets the value of one or more Widgets.

</td>
</tr>
<tr>
<td width="206">
[setValue()](/developers/user-guide/scripting-apis/client-api/widget-data-state-manipulation/refsetvalue)

</td>
<td width="17">
</td>
<td width="657">
Sets the value of one or more Widgets

</td>
</tr>
<tr>
<td width="206">
[getData()](/developers/user-guide/scripting-apis/client-api/widget-data-state-manipulation/getdata)

</td>
<td width="17">
</td>
<td width="657">
Gets the contents (rather than the value) of one or more Widgets.

</td>
</tr>
<tr>
<td width="206">
[setData()](/developers/user-guide/scripting-apis/client-api/widget-data-state-manipulation/setdata)

</td>
<td width="17">
</td>
<td width="657">
Sets the contents (rather than the value) of one or more Widgets.

</td>
</tr>
<tr>
<td width="206">
[visible()](/developers/user-guide/scripting-apis/client-api/widget-data-state-manipulation/visible)

</td>
<td width="17">
</td>
<td width="657">
Control the visibility of one or more Widgets

</td>
</tr>
<tr>
<td width="206">
[readOnly](/developers/user-guide/scripting-apis/client-api/widget-data-state-manipulation/readonly)

</td>
<td width="17">
</td>
<td width="657">
Control the read-only status of one or more Widgets

</td>
</tr>
<tr>
<td width="206">
[enabled()](/developers/user-guide/scripting-apis/client-api/widget-data-state-manipulation/enabled)

</td>
<td width="17">
</td>
<td width="657">
Control the enabled status of one or more Widgets

</td>
</tr>
<tr>
<td width="206">
[dataGetValues()](/developers/user-guide/scripting-apis/client-api/widget-data-state-manipulation/datagetvalues)

</td>
<td width="17">
</td>
<td width="657">
Extracts widget values into a javascript object

</td>
</tr>
<tr>
<td width="206">
[dataGetStates()](/developers/user-guide/scripting-apis/client-api/widget-data-state-manipulation/datagetstates)

</td>
<td width="17">
</td>
<td width="657">
Extracts widget states (visible, enabled, read-only) into a javascript object

</td>
</tr>
<tr>
<td width="206">
[dataSetValues()](/developers/user-guide/scripting-apis/client-api/widget-data-state-manipulation/datasetvalues)

</td>
<td width="17">
</td>
<td width="657">
Sets widget values from a javascript object

</td>
</tr>
<tr>
<td width="206">
[dataSetStates()](/developers/user-guide/scripting-apis/client-api/widget-data-state-manipulation/datasetstates)

</td>
<td width="17">
</td>
<td width="657">
Sets widget states from a javascript object

</td>
</tr>
<tr>
<td width="206">
[populateWidget()](/developers/user-guide/scripting-apis/client-api/widget-data-state-manipulation/populatewidget/)

</td>
<td width="17">
</td>
<td width="657">
This is a powerful and easy way of populating many Widgets including Grid, Repeater Container, Advanced Google Map, Timeline, Listbox (desktop and mobile) and Dropdown (desktop and mobile) Widgets from a complex data array.

</td>
</tr>
</table>

If you are working with [Server Side Javascripting](/developers/user-guide/scripting-apis/server-side-scripting-overview/) (SSJ) and you want to store widget data in [server side databases](/developers/user-guide/product-guide/data-storage/server-side-data-storage/) , then the [dataGetValues()](/developers/user-guide/scripting-apis/client-api/widget-data-state-manipulation/datagetvalues) , [dataGetStates()](/developers/user-guide/scripting-apis/client-api/widget-data-state-manipulation/datagetstates) , [dataSetValues()](/developers/user-guide/scripting-apis/client-api/widget-data-state-manipulation/datasetvalues) , [dataSetStates()](/developers/user-guide/scripting-apis/client-api/widget-data-state-manipulation/datasetstates) functions can be very useful.

These functions are used to extract Widget Values and Widget States from your App into simple object structures that can be passed to SSJ functions (often SSJ Database functions) or any other external systems.

You are free to use these functions for whatever purpose you like, however. The objects created can be converted to JSON strings and stored elsewhere or passed to APIs.

