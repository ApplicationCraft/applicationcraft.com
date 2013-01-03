---
old_url: populatewidget.htm
title: "populateWidget()"
active_menu_item: developers
class_name: developers
full_width: true
---


**populateWidget** (widget, dataArray, mapObject)

## Parameters

<table>
<tr>
<td width="137">
  { <a href="/developers/documentation/scripting-apis/client-api/objects-titbits/widget-list-parameters">wlist</a> } widget

</td>
<td width="20">
</td>
<td width="723">
Widget identifier - string, string array, object or object array

</td>
</tr>
<tr>
<td width="137">
{string} dataArray

</td>
<td width="20">
</td>
<td width="723">
an array where your data is stored

</td>
</tr>
<tr>
<td width="137">
{string} mapObject

</td>
<td width="20">
</td>
<td width="723">
a special object used to map data array elements to your Widget

</td>
</tr>
</table>
## Description

This is a powerful and easy way of populating many Widgets including Grid, Repeater Container, Advanced Google Map, Timeline, Listbox (desktop and mobile) and Dropdown (desktop and mobile) Widgets from a complex data array.

populateWidget() is passed an array of data to populate in the second parameter. This can be an array of any format you like.

## Wizard

To make your life even easier, please read about the [Map Object Wizard](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/populatewidget/populatewidget-wizard) .

## The Map Object

The mapObject parameter is used to map data from a specific location within your dataArray into the various fields within the target Widget.

Here is an example of a mapObject used to map two fields of data from an array into two fields within a Repeater Container

        var mapObject = {
            'lblItem' :  'item',   // Widget Name : object key name within the row array
            'lblPrice' : 'price'
        };

and here is one used for mapping data into a Mobile List, where it is possible to populate its various elements.

        var map = {
                        'label': 'lbl',
            'value': 'value',
            'count': 'count',
            'aside': 'aside'},
            'image': 'img',
            'divider' : 'separator';        
        }   
   



Below you will find links to more detailed examples for each Widget that can have data populated with populateWidget().

Map objects can get very complex and can support mapping from very complex, nested objects. Please refer to [Complex JSON Examples](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/populatewidget/complex-json-example) for more information.

**Elements per Page**

Widgets that have the Elements per Page property Grid and Repeater Containers will only display as many records as specified. In the case of the Repeater Container, populateWidget() stores all of the data you pass it, regardless of Elements per Page. You can then use the [drawNextPage()](/developers/documentation/scripting-apis/client-api/widget-object-functions/repeater-grid/drawnextpage) function to load more pages as the user requires them (typically when a button or label widget is pressed).

## Repeater Containers are Slow on Mobile Devices

These can be quite slow to draw as new browser objects need to be created dynamically. You should be aware that performance on Mobile devices, especially lower powered ones, can be pretty woeful even though they look fast on a desktop browser.

For this reason, it is strongly recommended that you use a Mobile List Widget instead. You can format it very nicely and include images as [described in this chapter](/developers/documentation/product-guide/advanced-important-widgets/important-mobile-widgets/mobile-list-widget/) .

You can speed things up, also valid for desktop apps

 - Set the Elements per Page property of the Repeater Container to a low value first but then use the [drawNextPage()](/developers/documentation/scripting-apis/client-api/widget-object-functions/repeater-grid/drawnextpage) function to load more pages as the user requires them (typically when a button or label widget is pressed).

## Widget Specific Examples

The following Widgets are covered in subtopics

 - [ListBoxes, Dropdowns and Context Menu Examples](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/populatewidget/listbox--dropdown-example)
 - [Mobile List](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/populatewidget/mobile-list-example)
 - [Repeater Container Example](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/populatewidget/repeater-container-example)
 - [Advanced Google Maps](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/populatewidget/advanced-google-maps-example)
 - [Video Example](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/populatewidget/audio-video-example)
 - [Photoswipe Example](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/populatewidget/photoswipe-example)
 - [Timeline](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/populatewidget/timeline-example)
 - [Calendar Widget](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/populatewidget/calendar-widget2)
 - [Mobiscroll List](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/populatewidget/mobiscroll-list2)
 - [Zing Charts](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/populatewidget/zingcharts)
 - [Flot Charts](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/populatewidget/flot-charts2)

## See Also

 - [fetchDataPage()](/developers/documentation/scripting-apis/client-api/data-view-functions/fetchdatapage)
 - [drawNextPage()](/developers/documentation/scripting-apis/client-api/widget-object-functions/repeater-grid/drawnextpage)
 - [isAllDataDrawn()](/developers/documentation/scripting-apis/client-api/widget-object-functions/repeater-grid/isalldatadrawn)

## Related Videos

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/q6VXeWOhAxA?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Populating List Widgets with Javascript  [5:15]

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/fPPlPcE69yE?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Populating a Repeater with Javascript [2:56]

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/rKbMmF7kcXs?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Javascript, Filtering, and other tips and tricks [6:11]
