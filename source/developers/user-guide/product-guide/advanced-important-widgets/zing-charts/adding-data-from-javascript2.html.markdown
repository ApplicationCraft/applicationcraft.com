---
title: "Adding Data from Javascript"
active_menu_item: developers
class_name: developers
full_width: true
---


To add data to the Zing Chart Widget, you can use a Javascript array and then pass the data into an already configured chart widget using [setData()](../../../scripting-apis/client-api/widget-data-state-manipulation/setdata.htm) or [populateWidget()](../../../scripting-apis/client-api/widget-data-state-manipulation/populatewidget()/index.htm)

The format of the data can vary depending on the type of chart and whether MultiSeries data is passed.

For a simple chart, the format of the data is

    <the plot title>: [{label, data}]
    p = { <series number>:
    [{label1:labelString1, data:dataValue1},
    {label2:labelString2, data:dataValue2},
    ....
    {labeln:labelStringn, data:dataValuen}]
    };
    p = {0:[{label:'Jan', data: 1},
    {label:'Feb', data: 10},
    {label:'Mar', data: 4},
    {label:'Apr', data: 11}],
    second: [{label:'Jan', data: 4},
    {label:'Feb', data: 1},
    {label:'Mar', data: 7},
    {label:'Apr', data: 3}]};
    app.setData('zing', p);
   

## Using setData()

app. [setData()](../../../scripting-apis/client-api/widget-data-state-manipulation/setdata.htm) allows you to pass in a javascript object containing the chart data. It is important that you use the exact object structure shown below.

For example

Using populateWidget()

The app. [populateWidget()](../../../scripting-apis/client-api/widget-data-state-manipulation/populatewidget()/index.htm) method allows you to take your data from your own data object and then map it to your chart widget. This give you more flexibility and means you do not have do pre-process your own array into the precise structure the setData() requires.

Typically, your array would have some keys that represent a) the series b) data labels and c) values. You then use a map object to describe how to map from your array into the widget. Please refer to the [populateWidget](../../../scripting-apis/client-api/widget-data-state-manipulation/populatewidget()/index.htm) () reference section to read more about this powerful way of mapping data.

The following example shows a user-defined object containing two series of data with 3 data values in each Series. populateWidget() can deal with more complex, nested user objects, as described in the [populateWidget](../../../scripting-apis/client-api/widget-data-state-manipulation/populatewidget()/index.htm) () documentation.

    var data = [
    {'year': '2012', 'lbl': 'Jan', 'amount': 12},
    {'year': '2012', 'lbl': 'Feb', 'amount': 15},
    {'year': '2012', 'lbl': 'Mar', 'amount': 10},
    {'year': '2013', 'lbl': 'Jan', 'amount': 11},
    {'year': '2013', 'lbl': 'Feb', 'amount': 9},
    {'year': '2013', 'lbl': 'Mar', 'amount': 16}
    ];
    var map = {
    'title': 'year',
    'label': 'lbl',
    'data': 'amount'
    };
    app.populateWidget('zingChart', data, map);
   

