---
title: "parent()"
active_menu_item: developers
class_name: developers
full_width: true
---


widgetObj **parent** ()

## Parameters

<table>
<tr>
<td width="169">
{object} widgetObj

</td>
<td width="17">
</td>
<td width="694">
Returns the parent Widget of the Widget

</td>
</tr>
</table>
## Description

This function is useful for finding out the parent Widget of another Widget. This is especially useful within a Repeater Container where a Respondent might interact with a Widget inside a row of a Repeater Container. Let's say the use presses an 'Order' button,.

    rowObj = _widget.parent();    // the row within the Repeater Container
    rptObj = rowObj.parent();     // And the parent of that row is the actual Repeater Container

The following command would be used to get the value of a Widget contained within the same Repeater row as the Widget that is clicked on.

    quantityOrder = _widget.parent().w('numQuantity');
    
   

## Important - Repeater Containers

It often happens that the main containers within a Repeater have a complex container structure. Sometimes Table widgets are used and they can even have further child containers. In this case, you will often need to use parent() several times.

The image below shows the Explorer view (left panel of the IDE). Image that you want to delete the Repeater row when the user presses the delete button 'removeImage'.

![repeater-structure-explorer](/img/docs/repeater-structure-explorer.zoom82.png)

In this case, we have a button called 'removeImage'. It has been placed within a Table widget called 'aToDoRow'. However, each cell of a Table is a container itself, in this case 'deleteCol' is the name of the cell that contains the button.

So, if you had a event handler for the removeImage widget, you would use the following code to reference the repeater row

	rowObj = _widget.parent().parent().parent()
