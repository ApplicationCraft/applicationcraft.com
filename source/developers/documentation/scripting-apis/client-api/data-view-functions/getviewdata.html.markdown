---
title: "getViewData()"
active_menu_item: developers
class_name: developers
full_width: true
---


**getViewData** (viewName, fieldsExpressionArray, callback(), optional filter, optional groupBy, optional orderBy, optional offset, optional count)

## Parameters

<table>
<tr>
<td width="257">
{string} viewName

</td>
<td width="15">
</td>
<td width="608">
The name of the View to get data from

</td>
</tr>
<tr>
<td width="257">
{string array} fieldsExpressionArray

</td>
<td width="15">
</td>
<td width="608">
An array of AC field expressions, each element/expression gets returned as a single field of data. See description for an example.

</td>
</tr>
<tr>
<td width="257">
{function} callback(error, data)

</td>
<td width="15">
</td>
<td width="608">
This function is called when the data is returned. Error is a boolean value and data is an array, with as many dimensions as there were elements in the expression array, containing the actual data

</td>
</tr>
<tr>
<td width="257">
{string|array} filter

</td>
<td width="15">
</td>
<td width="608">
This parameter is a array of string expressions (described in more detail below).

</td>
</tr>
<tr>
<td width="257">
{string|array} groupBy

</td>
<td width="15">
</td>
<td width="608">
This is a simple string (if only one grouping field) or a string array. Each element contains a single AC expression for the Group By

</td>
</tr>
<tr>
<td width="257">
{object|array} orderBy

</td>
<td width="15">
</td>
<td width="608">
A single object (if only sorted on one field) or an array of Order By objects {value:acExpression, asc:trueOrFalse}

</td>
</tr>
<tr>
<td width="257">
{integer} offset

</td>
<td width="15">
</td>
<td width="608">
Get 'count' records starting at 'offset' within the View

</td>
</tr>
<tr>
<td width="257">
{integer} count

</td>
<td width="15">
</td>
<td width="608">
How many rows to get from the data source.

</td>
</tr>
</table>
## Description

This function gets data from a View and reads it into an array. Data is passed back to a callback function as an array.

## Expressions

Where you are specifying View fields or Widget fields, you need to do this as an Application Craft 'Expression'. If you don't use Javascript, then you would set the Expression using the [Expression Editor](/developers/documentation/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/the-expression-editor) . The expressions you enter there are the same format as you would supply in the getViewData() method.

Expressions can include View (database) fields, App Widgets or  literal values. An expression string might look like this for simply getting a few fields

    var fields = ['{orders.orderDate}', 'Count({orders.orderNumber})', '{customers.customerName}'];
    var fields = ['Sum({orders.orderValue})'] // Calculate the total order value within the database query
    var fields = ['[Form.Widgets.numQuantity] * {products.price}']; // the product price multiplied by the App Widget 'numQuantity'
   

Or you can build compound expressions like

 - Widgets should be referenced as follows : [Form.Widgets.WidgetName]

 - View Fields are referenced like this : {queryTable.fieldname}

All field data is translated into a database query, so functions are executed as a part of the query.

## Aggregate Expressions

You are free to include aggregate functions in your expressions like Count({table.field}) \* [Forms.Widget.taxAmount].

## Callback Function

This gets two parameters - error (boolean) and data (array). The first element of the data array will contain the field names, not actual data. For each element, there will be as many dimensions as there were elements in the fieldsExpressionArray in the main getViewData() function call.

## Filter  (where clause)

A Filter Expression can be supplied as an array of string Expressions (and not an array of objects containing string expressions).

    var filter = ['{customers.CustomerName}="Atelier graphique"'];
    var groupBy = ["{customers.CustomerName}"];
    var orderBy = [{value:'{customers.CustomerName}', asc:true}];
     app.getViewData('Classic', ['{customers.country}','{customers.countryCode}'], function(error, data) {
            if (!error) {
                var listBoxData = [];
                for (var i = 1; i < data.length; i++) { //start with 1 in 0 string header is placed
                    listBoxData.push([data[i][0], data[i][0]]); 
                }
                app.setData('listBox1', listBoxData);
            }
        
        }, undefined, ['{customers.country}'], [{value: '{customers.country}', asc: false}], 101, 50);
   

Please refer to the earlier topic on Filters in the [Modifying Data Widgets with Scripts](/developers/documentation/scripting-apis/client-api/data-view-functions/modifying-data-widgets-with-scripts/) chapter.

## Group By

This is an AC Expression and will execute as a database GROUP BY statement. If there are multiple fields to group on, then each field should be placed in its own array element.

## Order By

This is an object (or an array of objects if their are multiple fields to order on) that specifies the field(s) and sort order.

## Example

This example shows simple usage. It is getting two fields from a database and then adding one of them to a listbox. There is no filter in this example but you can see it is Grouped By and Ordered By 'country'. It is also fetching 50 rows of data starting at the 101st row,

## See Also

 - [Reporting & Dashboards](/developers/documentation/product-guide/advanced-features/data-integration-reporting-dashboards/) (good introduction to Views)
 - [getViewData()](/developers/documentation/scripting-apis/client-api/data-view-functions/getviewdata)
 - [drillDownBroadcast()](/developers/documentation/scripting-apis/client-api/data-view-functions/drilldownbroadcast)
 - [bindViewData()](/developers/documentation/scripting-apis/client-api/data-view-functions/setviewcallback)

Related Video:

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/4FXN_AsiiMs?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Populating Chart Widgets [5:04]

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/rKbMmF7kcXs?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Javascript, Filtering, and other tips and tricks [6:11]
