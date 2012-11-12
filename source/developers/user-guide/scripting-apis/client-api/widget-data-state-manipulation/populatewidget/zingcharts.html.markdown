---
title: "Zing Charts"
active_menu_item: developers
class_name: developers
full_width: true
---


You can use [populateWidget()]() or [setData()](../setdata) to populate a [Zing Charts](../../../../product-guide/advanced-important-widgets/zing-charts/) widget.

## Example

This example shows how you can have data in an array and populate it into line chart. The advantage of using populateWidget() is that the map object allows you to easily extract the data you need from your own data array. Complex, nested object arrays are also handled (see [Complex JSON Examples](complex-json-example) ).

        var data = [
            {'title': 'first', 'lbl': 'Jan', 'data': 12},
            {'title': 'first', 'lbl': 'Jul', 'data': 15},
            {'title': 'first', 'lbl': 'Jun', 'data': 10},
            {'title': 'second', 'lbl': 'Jun', 'data': 10},
            {'title': 'second', 'lbl': 'Jul', 'data': 5}
            ];
        
         var map = {
            'title': 'title',
            'label': 'lbl',
            'data': 'data'
         };
        
         app.populateWidget('ZingChart', data, map);
   

## **See Also**

 - [Adding Data from Javascript](../../../../product-guide/advanced-important-widgets/zing-charts/adding-data-from-javascript2)

