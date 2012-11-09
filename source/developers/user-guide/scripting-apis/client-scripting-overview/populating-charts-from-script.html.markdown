---
title: "Populating Charts from Script"
active_menu_item: developers
class_name: developers
full_width: true
---


If you are getting your data manually, probably using httpRequest() or soapRequest(), then you will need to populate the chart from javascript. This is pretty easily done as shown here.

A Single Series Example

Get your data into an object that looks like this and then pass it to app.setData(). A simple, hard-coded example with 2 data points looks like this

    var obj =  {'my data': [{label: "Point 1 Label", data: 60}, {label: "Point 2 Label", data: 90}]};
    app.setData("flotChart", obj);
    // Populate the Country Pie Chart (single series)
    var fldsArray = ['{customers.country}', 'Count({customers.country})'];
    var grpArray = ['{customers.country}'];
    var orderArray = [{value:'Count({customers.country})', asc:true}];
    app.getViewData("Customers", fldsArray, function(error, data) {
    var chartArray = [];
    for(i=1; i<data.length; i++) {
    chartArray.push({"label":data[i][0], "data":data[i][1]});
    }
    app.setData("flotCountry", {"My Series Name":chartArray});
    }, undefined, grpArray, orderArray);
   

Here is a slightly more complex example that gets generates the array on the fly.

The above example shows some code being fetched back from the AC sever using Data Integration (getViewData). However, the data can come from anywhere. The basic point is that you have an array of data points in the correct format as shown above.

A Multi Series Example

Multi series charts follow exactly the same principle. Here is a hard-coded example of the data being prepared in the correct format.

    var obj = {'2010': [{Label A: "123", data: 60}, {label: "Label B", data: 90}], '2011': [{label: "Label A", data: 90}, {label: "Label B", data: 60}]};
    app.setData("flotChart", obj);
    // Populate the Sales Chart with 2 years of Sales data (multi series)
    fldsArray = ['Year({orders.orderDate})', 'MonthNameShort({orders.orderDate})', 'Count({orders.orderNumber})'];
    grpArray = ['Year({orders.orderDate})', 'Month({orders.orderDate})'];
    orderArray = [{value:'Year({orders.orderDate})', asc:true},{value:'Month({orders.orderDate})', asc:true}];
    filterArray = ["Year({orders.orderDate})=2003 OR Year({orders.orderDate})=2004"];
    app.getViewData("CustomerOrders", fldsArray, function(error, data) {
    var chartArray=[];
    data.splice(0,1);
    for(yrCtr=0, dCtr=0; yrCtr<2; yrCtr++) {
    chartArray[yrCtr]=[];
    for(i=0; i<12; i++, dCtr++) {
    chartArray[yrCtr].push({"label":data[dCtr][1], "data":data[dCtr][2]});
    }
    }
    app.setData("flotSales", {"2003":chartArray[0], "2004":chartArray[1]});
    }, filterArray, grpArray, orderArray);
    var colors = {"rows":[{"data":[1,"Title1","#ff0000"],"ind":0},{"data":[2,"Title2","#00ff00"],"ind":1}]}
    app.w("flotChart").multySeries(colors);
    var flotData = {"Title1":[{"label":"AppLoad","data":1},{"label":"InstanceSave","data":1}], "Title2":[{"label":"AppLoad","data":3}, {"label":"InstanceSave","data":1}]};
    var colors = {"rows":[{"data":[1,"Title1","#ff0000"],"ind":0},{"data":[2,"Title2","#00ff00"],"ind":1}]};
    app.w("flotChart").multiSeries(colors);
    app.setData("flotChart", flotData);
   

Here is a more complex example of data being fetched using getViewData(). Due to the fact that each data series can get its data in any way the user chooses, each data series ...

 - either needs to be fetched with its own getViewData() call

 - or a single call is made, which returns all data in a single array, which then needs to be split up; the example below shows this approach.

## Manipulating Chart Colors Example

You can also use code to set the colors in the charts. For example, a multi or single series bar chart, you could set the bar colors

and therefore to populate a chart and set the line colors:

Related Video:

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/4FXN_AsiiMs?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Populating Chart Widgets [5:04]

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/rKbMmF7kcXs?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Javascript, Filtering, and other tips and tricks [6:11]

