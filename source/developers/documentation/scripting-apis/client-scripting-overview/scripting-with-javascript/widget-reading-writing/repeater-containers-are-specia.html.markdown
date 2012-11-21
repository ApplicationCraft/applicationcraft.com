---
old_url: repeater_containers_are_specia.htm
title: "Repeater Containers and Grids are special"
active_menu_item: developers
class_name: developers
full_width: true
---


Grids and Repeater Containers are very similar in many respects - they both take repeating rows of data and display them in one object, often with the ability to scroll through the rows.

A Grid is essentially a spreadsheet type Widget, A Repeater, however, lets the user configure the individuals elements of each row by laying out ordinary Widgets in any way they choose. At runtime, these rows can be presented horizontally, vertically or both, with data that can be loaded from Views or from the [populateWidget](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/populatewidget/) () function.

We recommend reading the sections on Grids and Repeater Containers to properly understand how to work with them. They do not work in the same way.

 - [Reading and Writing user selections and values in Grids](/developers/documentation/scripting-apis/client-scripting-overview/scripting-with-javascript/widget-reading-writing/widget-values-reading-writing-user-entered-data/grids-repeater-containers)
 - [Reading and Writing user selections and values in Repeater Containers](/developers/documentation/scripting-apis/client-scripting-overview/scripting-with-javascript/widget-reading-writing/widget-values-reading-writing-user-entered-data/repeater-containers)
 - [Reading and Writing Grid content](/developers/documentation/scripting-apis/client-scripting-overview/scripting-with-javascript/widget-reading-writing/widget-content-reading-and-writing/widgetcontentgrids-repeater-containers)
 - [Reading and Writing Repeater Container content](/developers/documentation/scripting-apis/client-scripting-overview/scripting-with-javascript/widget-reading-writing/widget-content-reading-and-writing/widgetcontentrepeater-containers)

The image below shows a Repeater Container being configured in the Designer.

![rpt-ide](/img/docs/rpt-ide.zoom68.png)

And this image, below, shows the page running and populated with data,

![rpt-preview](/img/docs/rpt-preview.zoom69.png)

## See Also

 - [populateWidget()](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/populatewidget/)
 - [setData()](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/setdata)

