---
old_url: typical_scenarios.htm
title: "Single Field Widgets"
active_menu_item: developers
class_name: developers
full_width: true
---


Widgets such as Text, Numbers and Date Picker will display a single field of data mapped from the View. Typically, there are two common use cases

 - Displaying aggregate data such as totals or counts - in this case, you will want to apply an aggregate function within the Fields expressions, for example Sum({UnitSales}).

 - Display a single field of data from a single row - you will need the [Filter](/developers/documentation/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/filter) property of the View or Widget to be set so that only a single row of data is returned; you then select a field in the Expression Editor that is used to populate the Widget.

The Expression builder will show just the Value in the Items list on the left and you enter a mapping Expression on the right.

![txt\_expr](/img/docs/txt_expr.zoom66.png)
