---
old_url: drawnextpage.htm
title: "drawNextPage()"
active_menu_item: developers
class_name: developers
full_width: true
---


**boolean drawNextPage()**

## Returns

 - True, if there is more data available after the Repeater Container contents has been drawn, in which case you can call drawNextPage() again.

 - False, if there is no more data to fetch.

## Description

This function is only available for the Repeater Container widget. If you have used populateWidget() to load data into a Repeater Container, then it will display only as many records as the Elements per Page property of the  Repeater Container specifies, even if you passed in many more records. However, you can then either use one of the following approaches to access the remaining data

 - [fetchDataPage()](/developers/documentation/scripting-apis/client-api/data-view-functions/fetchdatapage) allows you to page up and down through the available data

 - drawNextPage() retrieves the next block of data and adds this to the Repeater Container

Typically, you might use buttons above or below the Repeater to manage the paging.

You should be aware that the return value can only be relied upon if the page is already shown where the Repeater Container is located. If not, then you should perform a check with the [isAllDataDrawn()](/developers/documentation/scripting-apis/client-api/widget-object-functions/repeater-grid/isalldatadrawn) function once you have switched to that page.

## Example

This example shows how, when a 'More...' button is clicked, the drawNextPage() function is called.

    function handler_btnMoreEntities_onClick(mouseev){
        if(app.w('rptEntities').drawNextPage()===false) {
            app.visible('btnMoreEntities', false);
        } 
    }
     
   

## See Also

 - [getViewData()](/developers/documentation/scripting-apis/client-api/data-view-functions/getviewdata)
 - [isAllDataDrawn()](/developers/documentation/scripting-apis/client-api/widget-object-functions/repeater-grid/isalldatadrawn)
 - [populateWidget()](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/populatewidget/)
 - [fetchDataPage()](/developers/documentation/scripting-apis/client-api/data-view-functions/fetchdatapage)

## Related Videos

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/Bq6PinoEIA8?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Managing Large Lists, Repeater Contents & Data Paging [4:25]
