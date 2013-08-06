---
old_url: getdata_versus_getvalue_and_se.htm
title: "getData() versus getValue() and setData() versus setValue()"
active_menu_item: developers
class_name: developers
full_width: true
---


Understanding the difference between these is important. Let's look at the general purpose of each one.

 - [setValue()](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/refsetvalue) and [getValue()](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/refgetvalue) are used to write or read what the user has entered or selected for a Widget. So, whenever you are looking to read what a Respondent has entered or if you want your script to alter entered or selected data, these are the functions to use.

 - [setData()](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/setdata) and [getData()](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/getdata) are used to write and read the contents of a Widget. So, the primary usage for these functions is to read or modify the contents of Listboxes, Dropdowns, Grids and Repeater Containers rather than selections made by a Respondent within those Widgets.

Grids and Repeaters are worth looking at in more detail. These offer a lot of opportunity to manage complex data. They are slightly more involved to write to and read from. We recommend reading up on Grids and Repeaters in the following sections

 - [Reading and Writing user selections and values in Grids](/developers/documentation/scripting-apis/client-scripting-overview/scripting-with-javascript/widget-reading-writing/widget-values-reading-writing-user-entered-data/grids-repeater-containers)
 - [Reading and Writing user selections and values in Repeater Containers](/developers/documentation/scripting-apis/client-scripting-overview/scripting-with-javascript/widget-reading-writing/widget-values-reading-writing-user-entered-data/repeater-containers)
 - [Reading and Writing Grid content](/developers/documentation/scripting-apis/client-scripting-overview/scripting-with-javascript/widget-reading-writing/widget-content-reading-and-writing/widgetcontentgrids-repeater-containers)
 - [Reading and Writing Repeater Container content](/developers/documentation/scripting-apis/client-scripting-overview/scripting-with-javascript/widget-reading-writing/widget-content-reading-and-writing/widgetcontentrepeater-containers)

