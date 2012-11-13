---
title: "The Expression Editor"
active_menu_item: developers
class_name: developers
full_width: true
---


The Expression Editor is widely used within Application Craft. It is a way of building expressions that include

 - Data View Fields

 - Widget Data

 - Literal values

Several Data properties will invoke the Expression Editor such as

 - Fields

 - Group By

 - Order By

 - Filter

 - Drill Filter

![Auto\_property\_settings](/img/docs/auto_property_settings.zoom64.png)

## Bringing up the Expression Editor

The Expression Editor appears when a relevant property is clicked on in the property bar for a data widget. It will take on a slightly different appearance, depending on the property selected.

## Example Expressions

Expressions can vary in complexity.

 - {Orders.Total} - this would reference the 'Total' field from the Data View called 'Orders'

 - Sum({Orders.Total} -  aggregates the total of all order in the 'Orders' Data View

 - Sum({Orders.Total} \* 1.08) - aggregates the total of all orders multiplied by 1.08

 - Sum({Orders.Total} \* [Form.Widgets.TaxPercent]) - aggregates the total of all orders multiplied by whatever value is contained within the widget 'TaxPercent'.

 - Sum({Orders.Total} + {Orders.TaxAmount}) - the total of all orders plus tax

## Related Videos

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/Jy5HgPdtvMY?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Integration Overview [4:51]

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/bSpGoTvBrW4?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Data Views [2:18]

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/GzJiwBDXlX8?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Configuring Data Section Properties [5:47]

