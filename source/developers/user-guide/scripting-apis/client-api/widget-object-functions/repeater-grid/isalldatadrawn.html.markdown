---
title: "isAllDataDrawn()"
active_menu_item: developers
class_name: developers
full_width: true
---


**boolean isAllDataDrawn()**

## Returns

 - True, if there is no more data available in the Repeater Container's buffer that has not yet been displayed.

 - False, if there is more data to fetch in which case you could use [drawNextPage()](drawnextpage.htm) to fetch and display it.

## Description

This checks to see whether all data that was loaded with [populateWidget()](../../widget-data-state-manipulation/populatewidget/) has been displayed. This function is only available for the Repeater Container widget. See the [drawNextPage()](drawnextpage.htm) function for more details.

## Example

This example shows how, when data is loaded into the Repeater, it checks to see whether there is more data. If not, the 'More...' button is hidden.

    function@handler_rptEntities_onDataLoaded(error,@data){
        if(app.w('rptEntities').isAllDataDrawn()) {
            app.visible('btnMoreEntities', false);
        } else {
            app.visible('btnMoreEntities', true);
        }        
    }
     
   

## See Also:

 - [getViewData()](../../data-view-functions/getviewdata)

 - [drawNextPage()](drawnextpage.htm)

 - [populateWidget()](../../widget-data-state-manipulation/populatewidget/)

 - [fetchDataPage()](../../data-view-functions/fetchdatapage)

