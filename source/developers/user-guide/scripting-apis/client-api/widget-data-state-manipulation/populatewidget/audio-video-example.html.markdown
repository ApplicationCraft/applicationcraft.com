---
title: "Video Example"
active_menu_item: developers
class_name: developers
full_width: true
---


You can use populateWidget() or setData() to overwrite the 'Source' property of a [HTML5 Video](../../../../widget-properties-events/advanced/html5-video) widget.

## Example

The advantage of using populateWidget() is that the map object allows you to easily extract the data you need from your own data array. Complex, nested object arrays are also handled (see [Complex JSON Examples](complex-json-example.htm) ).

    var data = [
        {type:'video/mp4', src:"http://10.0.0.36:8080/johndyer-mediaelement-70d209d/media/echo-hereweare.mp4"},
        {type:'video/webm', src:"http://10.0.0.36:8080/johndyer-mediaelement-70d209d/media/echo-hereweare.webm"},
        {type:'video/ogg', src:"http://10.0.0.36:8080/johndyer-mediaelement-70d209d/media/echo-hereweare.ogv"}
    ];
        
    var map = {type:"type", src:"src"};
    app.populateWidget("Video", data, map);  
     
     
   

