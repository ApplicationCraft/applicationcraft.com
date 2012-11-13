---
title: "Grids"
active_menu_item: developers
class_name: developers
full_width: true
---


The [getData()](/developers/user-guide/scripting-apis/client-api/widget-data-state-manipulation/getdata) and [setData()](/developers/user-guide/scripting-apis/client-api/widget-data-state-manipulation/setdata) functions allow you to read and populate the actual contents rather than selections made by the user of that content.

## Reading Contents

[getData()](/developers/user-guide/scripting-apis/client-api/widget-data-state-manipulation/getdata) will return an object containing all columns for all rows. For example, let's say I had a Grid called myACGrid with the following data in it

<table>
<tr>
<td width="75">
**Code**

</td>
<td width="22">
</td>
<td width="183">
**Country**

</td>
<td width="27">
</td>
<td width="394">
**Population**

</td>
</tr>
<tr>
<td width="75">
UK

</td>
<td width="22">
</td>
<td width="183">
United Kingdom

</td>
<td width="27">
</td>
<td width="394">
61 million

</td>
</tr>
<tr>
<td width="75">
US

</td>
<td width="22">
</td>
<td width="183">
United States of America

</td>
<td width="27">
</td>
<td width="394">
250 million

</td>
</tr>
<tr>
<td width="75">
RU

</td>
<td width="22">
</td>
<td width="183">
Russia

</td>
<td width="27">
</td>
<td width="394">
96 million

</td>
</tr>
</table>

If I use the basic getData like this app.getData('myACGrid'), it will return a rows object array

        "rows":[
        {"id":"wwrt5jflhlqyp4mxk37borj178d88yds12rwv4","data":["UK","United Kingdom","61 million"]},
        {"id":"wzs4rashjhp3gmpf-ji8fk8pdhhx82l0x8zd6t","data":["US","United States of America","250 million"]},
        {"id":"w3hkr9l-f6yq-vhit490846titrw6-bj2o58ac","data":["RU","Russia","96 million"]}]
     
        var grid = app.getData("myACGrid");
        var population = grid.rows[1].data[2]; // returns '250 million'
        var gridRow = app.getData("myACGrid").rows[2];
        var myCountry = gridRow.data[1]; // returns 'Russia'
    var gridAdvData = app.getData('myGrid');
    var dData = app.OBJ2ARRAY(gridAdvData);
     
   

I can use Javascript to access various bits of data as follows:

Or I could get:

**Converting to a simple Array**

If you want to operate on a simple array, you can call the app. [OBJ2ARRAY()](/developers/user-guide/scripting-apis/client-api/conversion-functions/advancedtoarray) function, which will return a Javascript array.

## Populating a Grid

There are two ways to populate a Grid

 - You create a 'rows' object and fill it with your data and then use the [app.setData(widgetName, rowsObject)](/developers/user-guide/scripting-apis/client-api/widget-data-state-manipulation/setdata) function to populate.

 - You can use the [populateWidget()](/developers/user-guide/scripting-apis/client-api/widget-data-state-manipulation/populatewidget/) function to map data from any array within any object directly into the Grid using a field map. This is better, faster and results in much less code, so take a look at it.

## Deleting and Inserting Individual Rows with Scripts

You can add or remove rows using object functions described in the [Widget Object](/developers/user-guide/scripting-apis/client-api/objects-titbits/widget-object) topic.

## See Also

 - [Reading & Writing Cell Values](/developers/user-guide/scripting-apis/client-scripting-overview/scripting-with-javascript/widget-reading-writing/widget-values-reading-writing-user-entered-data/grids-repeater-containers)
 - [setData()](/developers/user-guide/scripting-apis/client-api/widget-data-state-manipulation/setdata)
 - [getData()](/developers/user-guide/scripting-apis/client-api/widget-data-state-manipulation/getdata)
 - [populateWidget()](/developers/user-guide/scripting-apis/client-api/widget-data-state-manipulation/populatewidget/)

