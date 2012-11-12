---
title: "Fields"
active_menu_item: developers
class_name: developers
full_width: true
---


Having selected a View, you will now want to specify which fields are used to supply the Widget with its data. When you click in the Fields property, you will use the Expression Builder to select the fields. The Expression builder will let you select not just a simple field but expressions combining multiple fields and functions.

## Simple Widgets

For widgets that have a single data value (text Widget for example), the left column will contain a single item 'value'. This tells AC to map the data returned and assign it to the Widget's value property.

![txt\_expr](/img/docs/txt_expr.zoom77.png)

## Grids, Repeater & Data Containers, Lists and Dropdowns

These have a multi-dimensional data structure and so there will be an item and associated expression for each element of the Widget. These elements are

 - Grid - each item corresponds to a Grid Column name

 - Repeater and Data Containers - all items within the container are listed and you can map any of the items you need.

![grid\_expr](/img/docs/grid_expr.zoom66.png)

 - Lists and Dropdowns - there are always 2 items - label (maps a Data View field to the text that appears in the list) and value (maps the lists select value)

![list\_expr](/img/docs/list_expr.zoom66.png)

## **See Also**

 - [Using Automatic Property Settings](/developers/user-guide/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/using-automatic-property-setti)

Related Video:

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/GzJiwBDXlX8?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Configuring Data Section Properties [5:47]
