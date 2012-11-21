---
old_url: flot_charts2.htm
title: "Flot Charts"
active_menu_item: developers
class_name: developers
full_width: true
---


You can use [populateWidget()](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/populatewidget/) or [setData()](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/setdata) to populate a [Flot Charts](/developers/documentation/product-guide/widget-properties-events/advanced/flot-charts) widget.

## Example

This example shows how you can have data in an array and populate it into line chart. The advantage of using populateWidget() is that the map object allows you to easily extract the data you need from your own data array. Complex, nested object arrays are also handled (see [Complex JSON Examples](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/populatewidget/complex-json-example) ).

        var data = [
            {'series': 'first', 'lbl': 'Jan', 'data': 12},
            {'series': 'first', 'lbl': 'Jul', 'data': 15},
            {'series': 'first', 'lbl': 'Jun', 'data': 10},
            {'series': 'second', 'lbl': 'Jun', 'data': 10},
            {'series': 'second', 'lbl': 'Jul', 'data': 5}
            ];
        
         var map = {
            'series': 'series',
            'label': 'lbl',
            'data': 'data'
         };
        
         app.populateWidget('FlotChart', data, map);
   

