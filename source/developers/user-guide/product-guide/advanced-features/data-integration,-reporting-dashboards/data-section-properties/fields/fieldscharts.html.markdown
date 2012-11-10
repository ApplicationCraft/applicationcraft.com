---
title: "Charts"
active_menu_item: developers
class_name: developers
full_width: true
---


These Widgets will always require at least 2 fields to be defined and more if you are displaying a multi-series chart. Each series will require one Label/Value pair to be defined in the Expression Builder.

 - Label : this is the expression to use to label the chart series; it could be a simple field {customers.country}' or a function applied to a field 'Month({orders.PaymentDate})'

 - Value : this will usually be an aggregate function such as Count({customers.country}) or Sum({orders.paymentAmount})

## Important Chart Data Properties

You will often need to set the Group By, Drill Filter, Broadcast and Listen properties when working with Charts. You can save a lot of time by using the [Automatic Property Settings](../using-automatic-property-setti) to help make these settings at the same time as defining Fields.

![chartExpr](/img/docs/chartexpr.zoom67.png)
