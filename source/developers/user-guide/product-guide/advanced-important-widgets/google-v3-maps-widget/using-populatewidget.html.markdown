---
title: "Using populateWidget()"
active_menu_item: developers
class_name: developers
full_width: true
---


The [populateWidget()](../../../scripting-apis/client-api/widget-data-state-manipulation/populatewidget/) function offers a quick way to populate an Application Craft widget with data from a complex object array. Repeater Containers and Lists can be efficiently populated this way also.

With maps, you can package data up into an array and then load it with a simple call. Below is an example of several things being populated onto a map at once. The first image shows the resulting display and below that is the relevant code.

![advanced-maps-populateWidget](/img/docs/advanced-maps-populatewidget.png)

    function handler_actionBtn17_onClick(mouseev){
        polylineObj = null;
        polygonObj = null;
        circleObj = null;
        rectObj = null; 
        
        var overlaysArr = [
            {type:0, 
    coords:"41.878113,-87.629798", mouseOverHTML: "<div>On Over HTML</div>", 
    onClickHTML: "<p>Mouse click!!!</p>", 
    },
            {overlayId:'polylineId', type:1, 
    coords:"41.878113,-87.629798;47.878113,-87.629798;61.878113,-67.629798", 
    strokeColor: "#ff0000", strokeOpacity: 0.7
    },
            {type:AC.Widgets.GoogleMapsAdvanced.OVERLAY_TYPE_POLYGON, 
    coords:"21.878113,-77.629798;37.878113,-77.629798;41.878113,-67.629798", 
    strokeColor: "#000000", strokeOpacity: 0.7, strokeWeight: 2, 
    fillColor: "#00ff00", fillOpacity: 0.5
    },
            {type:AC.Widgets.GoogleMapsAdvanced.OVERLAY_TYPE_CIRCLE, 
    coords:"61.878113,-57.629798", radius: 380000, 
    strokeColor: "#000000", strokeOpacity: 0.7, 
    strokeWeight: 2, fillOpacity: 0.5
    },
            {type:4, 
    coords:"31.878113,-57.629798;11.878113,-37.629798", 
    strokeColor: "#00ff00", strokeOpacity: 0.7, strokeWeight: 1, 
    fillColor: "#00ffff", fillOpacity: 0.7
    }
        ];
        
        var overlaysMap = {id:'overlayId', type:'type', coords: "coords", 
            radius:"radius", strokeColor: "strokeColor", strokeOpacity: "strokeOpacity", 
            strokeWeight: "strokeWeight", fillColor: "fillColor", fillOpacity: "fillOpacity", 
            mouseOverHTML:"mouseOverHTML", onClickHTML: "onClickHTML", 
            markerImageURL: "markerImageURL"};
     
        app.populateWidget("googleMapsAdvanced", overlaysArr, overlaysMap);
    }
   

## Mapping Object

The overlaysMap is a simple object that explains how to map from the source array (overlaysArr) to the Map widget. The key name is the name of the field within the Map widget and the key value is the name within the source data.

You do not need to specify all of the keys, in which case they should be omitted from the map object.

The following table explains all of the possible keys

<table>
<tr>
<td width="151">
Key Name

</td>
<td width="14">
</td>
<td width="833">
Description

</td>
</tr>
<tr>
<td width="151">
**id**

</td>
<td width="14">
</td>
<td width="833">
The text ID of the overlay object that will get created. Use this to identify the overlay if clicked on or the overlay objects are inspected and need to be identified and tied back to your data source

</td>
</tr>
<tr>
<td width="151">
**type**

</td>
<td width="14">
</td>
<td width="833">
This value indicates the type of overlay to be created (see table below this one)

</td>
</tr>
<tr>
<td width="151">
**coords**

</td>
<td width="14">
</td>
<td width="833">
A string representing coordinates. A single coordinate is represented as "lat, lng" and multiple coordinates (rectangles, polylines, polygons) as "lat1, lng1; lat2, lng2; ....; latn, lngn"

</td>
</tr>
<tr>
<td width="151">
**radius**

</td>
<td width="14">
</td>
<td width="833">
The radius of a circle in meters

</td>
</tr>
<tr>
<td width="151">
**strokeColor**

</td>
<td width="14">
</td>
<td width="833">
Color of the line defining the overlay in hex format

</td>
</tr>
<tr>
<td width="151">
**strokeWeight**

</td>
<td width="14">
</td>
<td width="833">
Thickness of the line defining the overlay in pixels

</td>
</tr>
<tr>
<td width="151">
**strokeOpacity**

</td>
<td width="14">
</td>
<td width="833">
% opacity of the line defining the overlay

</td>
</tr>
<tr>
<td width="151">
**fillColor**

</td>
<td width="14">
</td>
<td width="833">
The color of the inside or fill area of the overlay in hex

</td>
</tr>
<tr>
<td width="151">
**fillOpacity**

</td>
<td width="14">
</td>
<td width="833">
% opacity of the inside or fill area of the overlay

</td>
</tr>
<tr>
<td width="151">
**mouseOverHTML**

</td>
<td width="14">
</td>
<td width="833">
HTML displayed as a popup when the user moves the mouse over a marker

</td>
</tr>
<tr>
<td width="151">
**onClickHTML**

</td>
<td width="14">
</td>
<td width="833">
HTML displayed as a popup when the user clicks a marker

</td>
</tr>
<tr>
<td width="151">
**markerImageURL**

</td>
<td width="14">
</td>
<td width="833">
Alternative Image URL of the marker

</td>
</tr>
</table>

<table>
<tr>
<td width="182">
**Overlay Object Type**

</td>
<td width="8">
</td>
<td width="85">
**Value**

</td>
</tr>
<tr>
<td width="182">
Marker

</td>
<td width="8">
</td>
<td width="85">
0

</td>
</tr>
<tr>
<td width="182">
Polyline

</td>
<td width="8">
</td>
<td width="85">
1

</td>
</tr>
<tr>
<td width="182">
Polygon

</td>
<td width="8">
</td>
<td width="85">
2

</td>
</tr>
<tr>
<td width="182">
Circle

</td>
<td width="8">
</td>
<td width="85">
3

</td>
</tr>
<tr>
<td width="182">
Rectangle

</td>
<td width="8">
</td>
<td width="85">
4

</td>
</tr>
</table>

When creating your own mapping object, copy the above example and modify the key values to match your own data source.

The [populateWidget()](../../../scripting-apis/client-api/widget-data-state-manipulation/populatewidget/) topic provides a detailed explanation on how you can map data from complex data sources without having to write code to prepare your data.

