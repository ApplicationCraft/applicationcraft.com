---
title: "Photoswipe Example"
active_menu_item: developers
class_name: developers
full_width: true
---


You can use populateWidget() or setData() to populate a [Photoswipe](../../../../widget-properties-events/advanced/photoswipe) widget.

Example

This example shows how you can have data in an array and populate it directly in to the [Photoswipe](../../../../widget-properties-events/advanced/photoswipe) Widget. The advantage of using populateWidget() is that the map object allows you to easily extract the data you need from your own data array. Complex, nested object arrays are also handled (see [Complex JSON Examples](complex-json-example) ).

    var data = [
    {mytitle:'title1', mythumbnail:"http://10.0.0.36:8080/images/thumb/001.jpg", mythumbnailtext:'Label 1', mysrc:"http://10.0.0.36:8080/images/full/001.jpg"},
    {mytitle:'title2', mythumbnail:"http://10.0.0.36:8080/images/thumb/002.jpg", mythumbnailtext:'Label 2', mysrc:"http://10.0.0.36:8080/images/full/002.jpg"},
    {mytitle:'title3', mythumbnail:"http://10.0.0.36:8080/images/thumb/003.jpg", mythumbnailtext:'Label 3', mysrc:"http://10.0.0.36:8080/images/full/003.jpg"}
    ];
    var map = {title:"mytitle", thumbnail: "mythumbnail", thumbnailtext: "mythumbnailtext", src:"mysrc"};
    app.populateWidget("Photoswipe", data, map);
   

Note that you can map from any key name in your data array with the map object. You can omit any fields you don't need to populate.

