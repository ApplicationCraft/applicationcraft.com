---
title: "Lists & Dropdowns"
active_menu_item: developers
class_name: developers
full_width: true
---


You can read the actual contents or populate Listboxes or Dropdowns content by using the [getData()](/developers/user-guide/scripting-apis/client-api/widget-data-state-manipulation/getdata) and [setData()](/developers/user-guide/scripting-apis/client-api/widget-data-state-manipulation/setdata) functions.

## Reading Listbox Contents

[getData()](/developers/user-guide/scripting-apis/client-api/widget-data-state-manipulation/getdata) will return a two dimensional array containing all row data (Labels and Values) of the specified Listbox or Drop Down. For example, let's say I had a Listbox called myACListbox with the following data in it

<table>
<tr>
<td width="97">
  <strong>Text Label</strong>

</td>
<td width="16">
</td>
<td width="767">
  <strong>Value</strong>

</td>
</tr>
<tr>
<td width="97">
Red

</td>
<td width="16">
</td>
<td width="767">
\#ff0000

</td>
</tr>
<tr>
<td width="97">
Green

</td>
<td width="16">
</td>
<td width="767">
\#00ff00

</td>
</tr>
<tr>
<td width="97">
Blue

</td>
<td width="16">
</td>
<td width="767">
\#0000ff

</td>
</tr>
</table>

I can use [getData()](/developers/user-guide/scripting-apis/client-api/widget-data-state-manipulation/getdata) to access data from all of the List as follows

    [ ["Red","#ff0000"],["Green","#00ff00"],["Blue","#0000ff"] ];
    app.getData('listColor').length       // the number of items (rows) in the listbox
    app.getData("listColor")[0][1]   // the list select value from the first listbox row
    var mapObject = {
        0 : 'lblInArray',
        1 : 'valueInArray'
    }; 
   

I can then access information, for example

## Populating a Listbox or Dropdown

[setData()](/developers/user-guide/scripting-apis/client-api/widget-data-state-manipulation/setdata) enables you to populate the contents of a Listbox type Widget with a two dimensional array of the same format.

## Populating a Listbox or Dropdown using populateWidget().

Currently, these  Widgets must use the following mapping object (you cannot use 'Label' and 'Value' as key names yet. We will introduce support for these keynames in  an upcoming release.

For more on this, see [populateWidget()](/developers/user-guide/scripting-apis/client-api/widget-data-state-manipulation/populatewidget/)

## See Also

 - [setData()](/developers/user-guide/scripting-apis/client-api/widget-data-state-manipulation/setdata)
 - [getData()](/developers/user-guide/scripting-apis/client-api/widget-data-state-manipulation/getdata)
 - [populateWidget()](/developers/user-guide/scripting-apis/client-api/widget-data-state-manipulation/populatewidget/)

