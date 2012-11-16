---
title: "traverseChildren()"
active_menu_item: developers
class_name: developers
full_width: true
---


abort **traverseChildren** (callbackFn)

## Parameters

<table>
<tr>
<td width="169">
{boolean} result

</td>
<td width="17">
</td>
<td width="694">
if your callback function returns true then processing of traverseChildren() will be aborted

</td>
</tr>
<tr>
<td width="169">
{function} callbackFn

</td>
<td width="17">
</td>
<td width="694">
each child element of the Repeater Container is called once

</td>
</tr>
</table>
## Description

traverseChildren() is available for all Container type Widgets and is used to traverse all child widgets of the widget. This function starts with the widget itself and then takes the first child and its children before moving on to the next child and its children. For each of these child widgets, the callback function is called where you can perform any operation you choose.

If your callback function returns true, then further processing will be aborted. You do not need to include a 'return' to continue processing.

## Example

The first code snippet shows how coordinates are read from the Repeater Container's child widgets

    var container = app.w("PanelContainer");  // Get a Repeater Container widget object
    var map = {};  // Initialize an empty Javascript object
    container.traverseChildren(function(child){
        if (child.id() != container.id()){  // Ignore the container itself in this example
            map[child.name()] = {left: child.left(), top: child.top()}; // add the coordinate of the child widget
        }
    });
    var output = JSON.stringify(map); // This object can now be stored somewhere (see next example)

And this would shows those coordinates being restored at some arbitrary point later

    var rep = app.w('repeatContainer');  // Get a Repeater Container widget object
    // Next line recreates some sample data, as might have been created in the above snippet and saved in var output
    var input = '{"text":{"left":12,"top":86},"label3":{"left":13,"top":43},"label2":{"left":56,"top":17}}'; // for example
    data = JSON.parse(input); // Convert string representation of object into javascript object
    rep.traverseChildren(function(child){
        var node = data[child.name()];
        if (node){
            child.left(node.left);
            child.top(node.top);
        }
    });
   


