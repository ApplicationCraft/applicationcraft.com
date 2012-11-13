---
title: "dataGetValues()"
active_menu_item: developers
class_name: developers
full_width: true
---


**dataGetValues** (optional boolLabels)

**dataGetValues** (strPageOrWidgets[], optional boolLabels)

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

A javascript object where the object key name corresponds to the widget name and the value is the widget value. Complex widgets (list boxes, grids etc.) are also catered for.

## Description

This function is commonly used to extract data from your App so that it can be passed in a simple format to another system or a Server Side Javascript function (SSJ).

A common usage is where you want to extract data from your App so it can be stored in a database table using Application Crafts [SSJ database functions](/developers/documentation/product-guide/data-storage/server-side-data-storage/) . If you choose your Widget names to match the database field names then the javascript object returned by app.dataGetValues() can be used as-is by the [ssj.insert()](/developers/documentation/scripting-apis/server-side-api/ssj-object/database/insert) and [ssj.update()](/developers/documentation/scripting-apis/server-side-api/ssj-object/database/update) methods.

You can also store these values in 3rd party systems or database by converting the javascript object to JSON ( [app.OBJ2JSON()](/developers/documentation/scripting-apis/client-api/conversion-functions/json2text) ) and then storing the object as a string. You can restore later using [app.JSON2OBJ()](/developers/documentation/scripting-apis/client-api/conversion-functions/text2json) and then [app.dataSetValues()](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/datasetvalues) .

## Examples

The following examples show different ways to get data into an object.

This one gets all widget values, and also any labels (there is only one label in the App lblTitle)..

        var o = app.dataGetValues(true);
    page1
    txtLast
        var p = app.dataGetValues(["page1", "txtLast"]);
    txtFirst
    txtSummary
        var q = app.dataGetValues(["txtFirst", "txtSummary"]);
   

![getData-object](/img/docs/getdata-object.png)

This example extracts all widgets from and the single widget . Label values are not returned as the optional parameter has been omitted.

This example extracts the widgets and .

## See Also

 - [dataGetStates()](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/datagetstates)
 - [dataSetValues()](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/datasetvalues)
 - [dataSetStates()](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/datasetstates)
 - [Server Side Data Storage](/developers/documentation/product-guide/data-storage/server-side-data-storage/)
 - [SSJ database functions](/developers/documentation/product-guide/data-storage/server-side-data-storage/)
 - [Instance Data Functions](/developers/documentation/scripting-apis/client-api/instance-data-functions/)

