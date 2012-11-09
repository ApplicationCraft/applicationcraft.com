---
title: "filterArray()"
active_menu_item: developers
class_name: developers
full_width: true
---


## {array} filterArray (inputArray, callbackFunction)

Parameters

<table>
<tr>
<td width="212">
{array} inputArray

</td>
<td width="9">
</td>
<td width="714">
A Javascript array to which a filter will be applied

</td>
</tr>
<tr>
<td width="212">
{function} callbackFunction

</td>
<td width="9">
</td>
<td width="714">
A callback function that will be called for each array element and determines whether it should be included in the new array.

</td>
</tr>
</table>

Description

This filters a Javascript array using a jolly clever callback function. You pass in an input array and for each element within the array, the callback function you supply will be called. If your callback returns true, the element is included otherwise it will be excluded. Once completed, the function returns a new, filtered array.

A good usage of this function is where your App retrieves data from an API call into an array and you then load this data into a Widget using [populateWidget()](../widget-data-state-manipulation/populatewidget()/index.htm) . If you then offer a filter option against this Widget, you can store a single copy of the entire array and then use filterArray() to create a new array with the appropriate filter before using that new array with populateWidget().

Example

The following example shows how you would filter out any array elements where the age is less than 40.

    filteredArray = app.filterArray(patients, function(element) {
    if(element.patientAge<40) {
    return true;
    }
    else {
    return false;
    }
    });
   

See Also:

 - [populateWidget()](../widget-data-state-manipulation/populatewidget()/index.htm)

 - [setData()](../widget-data-state-manipulation/setdata.htm)

