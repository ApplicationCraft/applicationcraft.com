---
title: "Group By"
active_menu_item: developers
class_name: developers
full_width: true
---


The Group By determines how data is returned to the Widget from the View. Often you will find that The Group By field will be the same expression as the Label field in Chart objects.

![groupby](/img/docs/groupby.zoom84.png)

Group By is best explained using examples. Let's assume we have the following Fields in a View

 - Date

 - Amount

 - Discount

 - Country

## Example 1

You want to display in a Chart the number of Sales made in each Country. You would make the following key property settings

  1.   Fields: Label - select {customers.country} in the Expression Editor a you want to display the name of the Country.

  2.   Fields: Value - select Count({customers.country}) as you want to display the Count of each Country within the Group. Note the importance of the Group By property in this particular example. Without it, you would get meaningless data.

  3.   Group By - {customers.country}. This tells AC to group the rows of data being returned into groups of each Country. Any aggregate functions (in this case, Count()) are applied to each group of countries.

## Example 2

You want to display the total sales made in each month of the year in a Bar Chart

  1.   Fields: Label - Month({orders.date})

  2.   Fields : Value - Sum({orders.amount})

  3.   Group By - Month({orders.date})

Notice that this uses a Month function to extract the Month number from the Date field. This is not an aggregate function, whereas the Sum function is.

## Setting Group By from Scripting

You can also modify the Group By property dynamically from a script using [app.setProperty](../../../../scripting-apis/client-api/widget-functions/setproperty) ('widgetName', 'groupBy', 'expression')

Related Video:

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/GzJiwBDXlX8?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Configuring Data Section Properties [5:47]

