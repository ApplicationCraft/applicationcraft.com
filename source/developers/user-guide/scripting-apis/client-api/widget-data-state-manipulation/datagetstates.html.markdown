---
title: "dataGetStates()"
active_menu_item: developers
class_name: developers
full_width: true
---


**dataGetStates** (optional boolLabels)

**dataGetStates** (strPageOrWidgets[], optional boolLabels)

## Parameters

<table>
<tr>
<td width="186">
{wlist} strPageOrWidgets

</td>
<td width="16">
</td>
<td width="678">
An array of page names and/or widgets to include in the Object

</td>
</tr>
<tr>
<td width="186">
{bool} boolLabels

</td>
<td width="16">
</td>
<td width="678">
If specified, this instructs AC to also return label widget contents

</td>
</tr>
</table>
## Returns

A javascript object where the object key name corresponds to the widget name. Each Key is itself an object that contains the 3 main state properties

 - Visible

 - Enabled

 - ReadOnly

The image below shows an object created with

    stateObj = app.dataGetStates();
        var s1 = app.dataGetStates(["txtLast"]);
        var s2 = app.dataGetStates(["txtFirst","txtLast"]);
        var stateObj = app.dataGetStates(["page1", "txtLast"]);
   

![getStates-object](/img/docs/getstates-object.png)

## Description

This function is commonly used to extract widget state information from your App so that it can be passed in a simple format to another system or a Server Side Javascript function (SSJ).

In many cases, your App will show and hide widgets as well as enabling/disabling or setting them to be read-only. The app.dataGetStates() function allows to you get a javascript object that contains this state information for some or all widgets. You can then store these elsewhere along with the widget values and then restore them using the [app.dataSetStates()](datasetstates.htm) and [app.dataSetValues()](datasetvalues.htm) functions.

## Examples

The following examples show different ways to get state information into an object.

## See Also:

 - [dataGetValues()](datagetvalues.htm)

 - [dataSetValues()](datasetvalues.htm)

 - [dataSetStates()](datasetstates.htm)

 - [Server Side Data Storage](../../../data-storage/server-side-data-storage/)

 - [SSJ database functions](../../../data-storage/server-side-data-storage/)

 - [Instance Data Functions](../instance-data-functions/)

