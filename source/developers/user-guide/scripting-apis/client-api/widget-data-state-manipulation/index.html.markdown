---
title: "Widget Data & State Manipulation"
active_menu_item: developers
class_name: developers
full_width: true
---


The functions in this section deal with widget values and states (visible, enabled, read-only).

For normal reading and writing of widget data, please refer to the section [Reading and Writing App Data](../../client-scripting-overview/scripting-with-javascript/widget-reading-writing/) .

**In This Section:**

<table>
<tr>
<td width="206">
[assign()](assign)

</td>
<td width="17">
</td>
<td width="657">
Assigns an AC Expression to one or more Widgets

</td>
</tr>
<tr>
<td width="206">
[getValue()](refgetvalue)

</td>
<td width="17">
</td>
<td width="657">
Gets the value of one or more Widgets.

</td>
</tr>
<tr>
<td width="206">
[setValue()](refsetvalue)

</td>
<td width="17">
</td>
<td width="657">
Sets the value of one or more Widgets

</td>
</tr>
<tr>
<td width="206">
[getData()](getdata)

</td>
<td width="17">
</td>
<td width="657">
Gets the contents (rather than the value) of one or more Widgets.

</td>
</tr>
<tr>
<td width="206">
[setData()](setdata)

</td>
<td width="17">
</td>
<td width="657">
Sets the contents (rather than the value) of one or more Widgets.

</td>
</tr>
<tr>
<td width="206">
[visible()](visible)

</td>
<td width="17">
</td>
<td width="657">
Control the visibility of one or more Widgets

</td>
</tr>
<tr>
<td width="206">
[readOnly](readonly)

</td>
<td width="17">
</td>
<td width="657">
Control the read-only status of one or more Widgets

</td>
</tr>
<tr>
<td width="206">
[enabled()](enabled)

</td>
<td width="17">
</td>
<td width="657">
Control the enabled status of one or more Widgets

</td>
</tr>
<tr>
<td width="206">
[dataGetValues()](datagetvalues)

</td>
<td width="17">
</td>
<td width="657">
Extracts widget values into a javascript object

</td>
</tr>
<tr>
<td width="206">
[dataGetStates()](datagetstates)

</td>
<td width="17">
</td>
<td width="657">
Extracts widget states (visible, enabled, read-only) into a javascript object

</td>
</tr>
<tr>
<td width="206">
[dataSetValues()](datasetvalues)

</td>
<td width="17">
</td>
<td width="657">
Sets widget values from a javascript object

</td>
</tr>
<tr>
<td width="206">
[dataSetStates()](datasetstates)

</td>
<td width="17">
</td>
<td width="657">
Sets widget states from a javascript object

</td>
</tr>
<tr>
<td width="206">
[populateWidget()](populatewidget/)

</td>
<td width="17">
</td>
<td width="657">
This is a powerful and easy way of populating many Widgets including Grid, Repeater Container, Advanced Google Map, Timeline, Listbox (desktop and mobile) and Dropdown (desktop and mobile) Widgets from a complex data array.

</td>
</tr>
</table>

If you are working with [Server Side Javascripting](../../server-side-scripting-overview/) (SSJ) and you want to store widget data in [server side databases](../../../product-guide/data-storage/server-side-data-storage/) , then the [dataGetValues()](datagetvalues) , [dataGetStates()](datagetstates) , [dataSetValues()](datasetvalues) , [dataSetStates()](datasetstates) functions can be very useful.

These functions are used to extract Widget Values and Widget States from your App into simple object structures that can be passed to SSJ functions (often SSJ Database functions) or any other external systems.

You are free to use these functions for whatever purpose you like, however. The objects created can be converted to JSON strings and stored elsewhere or passed to APIs.

