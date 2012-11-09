---
title: "Prefilling List and Grids"
active_menu_item: developers
class_name: developers
full_width: true
---


As well as being able to populate [Mobile List](mobile/list.htm) [Listbox](common/listbox.htm) , [Dropdown List](common/dropdown-list.htm) and [Grid](advanced/grid.htm) widgets from an external data source by setting properties in the [Data Section](../product-guide/advanced-features/data-integration,-reporting-dashboards/data-section-properties/index.htm) , you can also do this using [Data Lists](../product-guide/advanced-features/data-lists-management/index.htm) .

If you are likely to want to populate multiple widgets with this data, either in the same app or in future apps, [Data Lists](../product-guide/advanced-features/data-lists-management/index.htm) is recommended

You can also though manually populate your widgets if required.

You can do this by either

 - Manually entering in the Label and Values

or

 - Importing a CSV file that you have uploaded as a Resource to your Account

![ImportResouce3](/img/docs/importresouce3.zoom63.png)

## Manual method:

Use Add Row, Delete Row, Up and Down as required and enter in the required Label text (that will be visible to your app users) and the Value

## Import Resource:

Having already uploaded your CSV file as a [Resource](../product-guide/the-console/console-tabs/resources.htm) , click the 'Import Resource' button to initiate the Import Resource Dialog

![ImportResource](/img/docs/importresource.zoom62.png)

 - Select your CSV file from the Resources pane

 - Run 'Parse Resource'

In most cases if your CSV file is correctly set up this will enable to file to be parsed and you will be presented with:

![ImportResource2](/img/docs/importresource2.zoom65.png)

 - In the RH Mapped Table pane, select the Columns to write to the Label (Column 1 in the above example) and Value (Column 2 in the above example) properties

If you do not see the Parsed Resource as intended, 'Cancel' back to the previous screen and review the options available for the Delimiter, Enclosure and Escape fields in your CSV file

See Also:

 - [Listbox](common/listbox.htm)

 - [Dropdown List](common/dropdown-list.htm)

 - [Grid](advanced/grid.htm)

 - [List](mobile/list.htm)

