---
old_url: data__state_extraction.htm
title: "Widget Data & State Manipulation"
active_menu_item: developers
class_name: developers
full_width: true
---


The functions in this section deal with widget values and states (visible, enabled, read-only).

For normal reading and writing of widget data, please refer to the section [Reading and Writing App Data](/developers/documentation/scripting-apis/client-scripting-overview/scripting-with-javascript/widget-reading-writing/) .

## In This Section

 - [assign()](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/assign)
    Assigns an AC Expression to one or more Widgets
 - [getValue()](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/refgetvalue)
    Gets the value of one or more Widgets.
 - [setValue()](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/refsetvalue)
    Sets the value of one or more Widgets
 - [getData()](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/getdata)
    Gets the contents (rather than the value) of one or more Widgets.
 - [setData()](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/setdata)
    Sets the contents (rather than the value) of one or more Widgets.
 - [visible()](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/visible)
    Control the visibility of one or more Widgets
 - [readOnly](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/readonly)
    Control the read-only status of one or more Widgets
 - [enabled()](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/enabled)
    Control the enabled status of one or more Widgets
 - [dataGetValues()](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/datagetvalues)
    Extracts widget values into a javascript object
 - [dataGetStates()](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/datagetstates)
    Extracts widget states (visible, enabled, read-only) into a javascript object
 - [dataSetValues()](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/datasetvalues)
    Sets widget values from a javascript object
 - [dataSetStates()](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/datasetstates)
    Sets widget states from a javascript object
 - [populateWidget()](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/populatewidget/)
    This is a powerful and easy way of populating many Widgets including Grid, Repeater Container, Advanced Google Map, Timeline, Listbox (desktop and mobile) and Dropdown (desktop and mobile) Widgets from a complex data array.

If you are working with [Server Side Javascripting](/developers/documentation/scripting-apis/server-side-scripting-overview/) (SSJ) and you want to store widget data in [server side databases](/developers/documentation/product-guide/data-storage/server-side-data-storage/) , then the [dataGetValues()](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/datagetvalues) , [dataGetStates()](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/datagetstates) , [dataSetValues()](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/datasetvalues) , [dataSetStates()](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/datasetstates) functions can be very useful.

These functions are used to extract Widget Values and Widget States from your App into simple object structures that can be passed to SSJ functions (often SSJ Database functions) or any other external systems.

You are free to use these functions for whatever purpose you like, however. The objects created can be converted to JSON strings and stored elsewhere or passed to APIs.

