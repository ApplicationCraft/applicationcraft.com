---
title: "fullSettings() javascript method"
active_menu_item: developers
class_name: developers
full_width: true
---


This approach allows you to set up your chart by configuring the javascript object from code for both chart properties as well as chart data. In order to use this approach, you can use the Full Settings wizard dialog to get the JSON as starting point. However, you can work with more control by referring to the ZingCharts documentation here [http://www.zingchart.com/learn/docs.php](http://www.zingchart.com/learn/docs.php) to see all available properties for each chart type.

In your code, you would then use the following code in your App to set the chart object.

    app.w('zingchart').fullSettings(jsObj) 
   

Where 'zingchart' is the name of your Application Craft widget and jsObj is an object.

## Modifying data for an existing chart

Please read to the [next section](/developers/documentation/product-guide/advanced-important-widgets/zing-charts/adding-data-from-javascript2) to see how you can get data stored in a javascript object loaded quickly and easily into a chart, whose other properties are already correctly set.

