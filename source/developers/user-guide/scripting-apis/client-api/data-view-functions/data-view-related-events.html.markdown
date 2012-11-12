---
title: "Data View Related Events"
active_menu_item: developers
class_name: developers
full_width: true
---


There are some handy events that are called when things happen with Data Views

<table>
<tr>
<td width="129">
**Widget Type**

</td>
<td width="10">
</td>
<td width="259">
**Event Name**

</td>
<td width="12">
</td>
<td width="1126">
**Description**

</td>
</tr>
<tr>
<td width="129">
## App

</td>
<td width="10">
</td>
<td width="259">
**onDrillDown** (viewName, widgetId, filters, resetFlag)

</td>
<td width="12">
</td>
<td width="1126">
Called when a Drill Down has been triggered and data is about to be requested.

</td>
</tr>
<tr>
<td width="129">
Grid, Repeater

</td>
<td width="10">
</td>
<td width="259">
**onRowLoaded** (index, createdRow)

</td>
<td width="12">
</td>
<td width="1126">
Called whenever a Grid or Repeater Widget has a row of data added (either from a Data View or the [setData()](/developers/user-guide/scripting-apis/client-api/widget-data-state-manipulation/setdata) or [populateWidget()](/developers/user-guide/scripting-apis/client-api/widget-data-state-manipulation/populatewidget/) functions

</td>
</tr>
<tr>
<td width="129">
All Data Enabled Widgets

</td>
<td width="10">
</td>
<td width="259">
**onDataLoaded** (error, data)

</td>
<td width="12">
</td>
<td width="1126">
This is called once data has been fully loaded to  When a widget is in a container,When a widget is in a container it is the container which is loading data, so this event listens to the container.

</td>
</tr>
<tr>
<td width="129">
</td>
<td width="10">
</td>
<td width="259">
**onDataReset** ()

</td>
<td width="12">
</td>
<td width="1126">
Called if a Data View has its Drill Down filter reset.

</td>
</tr>
</table>
## Example

    function handler_rptTest_onRowLoaded(index, createdRow){
        calc = createdRow.w('lblA').value().toUpperCase();
        app.setValue(createdRow.w('lblCalc'), calc);
    }
    calc = createdRow.w('lblA').value().toUpperCase();
   

The above example shows a row of a repeater being loaded and the event being called. createdRow is the object of the row added. is looking for the Widget called ' lblA' and converting it to an upper case string. The next function sets the widget called 'lblCalc' to be that new string.

