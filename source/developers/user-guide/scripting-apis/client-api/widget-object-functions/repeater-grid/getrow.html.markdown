---
title: "getRow()"
active_menu_item: developers
class_name: developers
full_width: true
---


widgetObj **getRow** (index)

## Parameters

<table>
<tr>
<td width="169">
{object} widgetObj

</td>
<td width="17">
</td>
<td width="694">
Returns the Widget Object of the selected row in the Repeater.

</td>
</tr>
<tr>
<td width="169">
{integer} index

</td>
<td width="17">
</td>
<td width="694">
the index of the row within the Repeater

</td>
</tr>
</table>
## Description

Returns the specified Repeater Container row as a Widget object. Grids do not need this as the selected row index is passed into relevant Grid events as well as being able to use the [getSelectedRow()](getselectedrow.htm) object function.

Read the [Interacting with Widgets](../../../client-scripting-overview/scripting-with-javascript/widget-reading-writing/) chapter to learn more about reading from and writing to Grids and Repeater Containers.

## Examples

The following example shows the onRowLoaded event that is called as each individual row is populated. It calculates the difference between the numTotOilBbls and numH2OBbls and writes the results to the numNetOilBbls Widget.

    function handler_rcReadings_onRowLoaded(index, createdRow){
        rowObj=app.w("rcReadings").getRow(index);  // get the current row object
        netOilBbls=rowObj.w("numTotOilBbls").value()-rowObj.w("numH2OBbls").value();
        rowObj.w("numNetOilBbls").value(netOilBbls);
    }
    function handler_abCalcNet_onClick(mouseev){
        for(i=0; i<app.w('rcReadings').rowCount(); i++) {
            rowObj=app.w("rcReadings").getRow(i);
            rowObj.w("numNetOilBbls").value(rowObj.w("numTotOilBbls").value()-rowObj.w("numH2OBbls").value());    
        }
    }
   

This next example shows how a loop could perform the same operation rather than using the onRowLoaded event

## See Also

 - [rowCount()](length.htm)

 - [rowIndex()](rowindex.htm)

 - [parent()](../general/parent)

 - [Widget Object](../../objects-titbits/widget-object)

