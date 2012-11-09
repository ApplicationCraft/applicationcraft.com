---
title: "Dates"
active_menu_item: developers
class_name: developers
full_width: true
---


The Date Widget can be either a single date or a date range (by setting the Range property). If a regular date (Range = false), then you can get and set using a regular date object.

    app.setValue('dtDeparture', dateObject);
    app.w('dtDeparture').value(dateObject);
    dateRange[0] = dateObjectDepart;
    dateRange[1] = dateObjectReturn;
    app.setValue('dtTravelDates', dateRange);
   

or

If you are dealing with a date range, then you must use an array of two date objects.

Dates and View Filters

Of you have a date object and you want to apply that within a [Filter Expression](../../../../client-api/data-view-functions/modifying-data-widgets-with-scripts/filters.htm) , you must make sure that the date is correctly formatted. View Filters expect the date in the format 'YYYY-MM-DD HH:MM:SS'. AC provides a conversion function [app.DATE2DB()](../../../../client-api/conversion-functions/date2db.htm) that does this for you automatically. Any other format must be converted by your code into the correct format for the Filter Expression.

    opStockFilter=['{CF_Readings.dpReadingDate}<="'+app.DATE2DB(firstDay)+'"','{CF_Tanks.TankNo}="' +g_tankNoArray[i]+'"'];
    app.setProperty('myDataWidget', 'filter', opStockFilter);
   

See Also

[Filters](../../../../client-api/data-view-functions/modifying-data-widgets-with-scripts/filters.htm)

[DATE2DB()](../../../../client-api/conversion-functions/date2db.htm)

