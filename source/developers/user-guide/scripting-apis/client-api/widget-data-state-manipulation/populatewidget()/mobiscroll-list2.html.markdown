---
title: "Mobiscroll List"
active_menu_item: developers
class_name: developers
full_width: true
---


You can use [populateWidget()](index) or [setData()](../setdata) to populate a [Mobiscroll List](../../../../widget-properties-events/mobile/mobiscroll-list) widget.

Example

This example shows how you can have data in an array and populate it directly in to a 2 column [Mobiscroll List](../../../../widget-properties-events/mobile/mobiscroll-list) Widget. The advantage of using populateWidget() is that the map object allows you to easily extract the data you need from your own data array. Complex, nested object arrays are also handled (see [Complex JSON Examples](complex-json-example) ).

    var Arr = [
    {index:0, lbl:'test11', val:'val'},
    {index:0, lbl:'test1', val:true},
    {index:0, lbl:'test12', val:1},
    {index:0, lbl:'test13', val:'val1'},
    {index:1, lbl:'test15', val:'val2'},
    {index:1, lbl:'test17', val:'val3'},
    {index:1, lbl:'test19', val:false},
    ];
    var Map = {columnIndex:'index', label:'lbl', value:'val'};
    app.populateWidget("mobiscrollList", Arr, Map);
   

Note that you can map from any key name in your data array with the map object. You can omit any fields you don't need to populate.

