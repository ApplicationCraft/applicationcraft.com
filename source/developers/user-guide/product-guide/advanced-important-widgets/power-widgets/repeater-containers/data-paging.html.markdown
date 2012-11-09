---
title: "Data Population & Paging"
active_menu_item: developers
class_name: developers
full_width: true
---


Data Paging allows you to manage the way that data is handled by the Repeater Container. There are two ways you can populate your Repeater Container

app. [populateWidget()](../../../../scripting-apis/client-api/widget-data-state-manipulation/populatewidget()/index.htm)

This approach is common if you get your data from outside the AC system using either app. [httpRequest](../../../../scripting-apis/client-api/soap-restful-ajax-calls/httprequest.htm) (), app. [soapRequest](../../../../scripting-apis/client-api/soap-restful-ajax-calls/soaprequest.htm) () or your own methods.

Say you retrieve 1000 records of data into an array. You call populateWidget() and pass in this array but the Elements per Page property is set to 10. In this case, it will only generate the first 10 records for display. However, it stores the full 1000 internally.

From this point on, if you want to display more data, you use the [drawNextPage](../../../../scripting-apis/client-api/widget-object-functions/repeater-grid/drawnextpage.htm) () function. Refer to its documentation for a usage example.

Data Views

If you are pulling data from a Data View, then Elements per Page property also determines exactly how much data is loaded. However, in this case, you can navigate forwards and backwards through the Data View using the fetchDataPage() method.

For more information about how to set this up, start reading from [this section](../../../advanced-features/data-integration,-reporting-dashboards/reporting-widgets.htm) .

