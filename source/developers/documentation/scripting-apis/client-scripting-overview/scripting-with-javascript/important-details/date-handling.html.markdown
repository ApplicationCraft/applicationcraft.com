---
title: "Date Handling"
active_menu_item: developers
class_name: developers
full_width: true
---


Working with Dates is rarely pain-free in any development environment. We have tried to make dates as pain free as possible. In order to fully understand what is going on behind the scenes, it is worth understanding a couple of things.

 - Inside an App, you will want to work with regular Javascript date objects.

 - But, Instance data is stored in the database as a database field, which is incompatible.

 - If you want to store a date (and optionally, time) in your App Instance without using your own tricks, then you must use a Date Picker Widget in your App. When you set the 'Store in Database' property to true, it will ensure it is stored in a date field in the database. Application Craft ensures that the Date Picker is correctly stored.

 - When Instance data is loaded into a Date Picker Widget, it is automatically stored internally as a javascript date object.

## Regular Date Picking and Date Range Picking

In most cases, you will want to select a single date. However, you can also set the 'Range' property of the Date Picker Widget to allow 2 clicks to be made in the Date Picker, which set the start and end of the range respectively.

Regular dates represent their data internally as a single date object. The app.getValue() or widgetObject.value() functions return either a

single date object or an array of two date objects if 'Range' is true.

## Date Filtering

If you want to set a date filter on a data view, then you should build your filter expression by converting the date object into a string using the [app.DATE2DB()](/developers/documentation/scripting-apis/client-api/conversion-functions/date2db) function. Application Craft will then perform the necessary conversion to ensure it is correctly converted so it can filter at the database level. Refer to the [Filters](/developers/documentation/scripting-apis/client-api/data-view-functions/modifying-data-widgets-with-scripts/filters) page to find out more about filtering.

## See Also

 - [Getting and Setting Date Widget Values](/developers/documentation/scripting-apis/client-scripting-overview/scripting-with-javascript/widget-reading-writing/widget-values-reading-writing-user-entered-data/dates)
 - [DATE2DB()](/developers/documentation/scripting-apis/client-api/conversion-functions/date2db)
 - [Filtering (Dates)](/developers/documentation/scripting-apis/client-api/data-view-functions/modifying-data-widgets-with-scripts/filters)
 - [Date & Time Management Functions](/developers/documentation/scripting-apis/client-api/date-time-management-functions/)

