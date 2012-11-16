---
title: "Filtering Dates"
active_menu_item: developers
class_name: developers
full_width: true
---


Filtering dates is worth a special mention. Date Picker Widgets store their data in a javascript date object. When data is read from the database and loaded into a Date Picker Widget, this conversion happens automatically. For this reason, even if you do not need to see or use a Date Picker you can use one, with its Visible property set to false, so you can comfortably work with date objects and use the javascript date functions to manipulate it.

In the database, however, dates are stored in a different format. When filtering, your expression should have the following format

    {orders.date} >= "2010-10-21" 
    {orders.date} >= "2010-10-21 21:00:00"

If you want to convert from a javascript object into the correct format, AC provides a simple conversion function [DATE2DB()](/developers/documentation/scripting-apis/client-api/conversion-functions/date2db) that does this for you automatically.

## Example

This example shows how a Date Pickers is used in Range mode (Range property is true) and this is then applied to a Grid Widget.

    function handler_dtRange_onSelectDate(value){
        var toDate = new Date(value[1]);     // get the top of the date range
        toDate.setDate(toDate.getDate()+1);  // and add 1 day to it so < includes all times of the last day chosen
        filterExp = ['{Dates.dtDepart}>="' + app.DATE2DB(value[0]) + '"', 
            '{Dates.dtDepart}<"' + app.DATE2DB(toDate) + '"'];
        app.setProperty('grid', 'filter', filterExp);   // apply the filter
        app.refreshData('grid');             // refresh the Grid
    }
   


## See Also

 - [Modifying Filters with a Script](/developers/documentation/scripting-apis/client-api/data-view-functions/modifying-data-widgets-with-scripts/filters)
 - [DATE2DB()](/developers/documentation/scripting-apis/client-api/conversion-functions/date2db)
