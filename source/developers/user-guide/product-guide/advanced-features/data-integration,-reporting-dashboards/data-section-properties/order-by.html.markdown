---
title: "Order By"
active_menu_item: developers
class_name: developers
full_width: true
---


This allows you to specify the order in which records are returned from the View. You can specify any number of Order By fields and whether the sorting should be in ascending or descending order.

![orderby](/img/docs/orderby.zoom90.png)

This property is obviously useful for Grid or List type data where you want to order rows of data displayed in a tabular format. However, it is also useful for ordering aggregated and grouped data that might appear in chart Widgets.

Example

Let's suppose you want to display monthly sales data in a Bar Chart with labels Jan, Feb, Mar etc. but you also want the data correctly ordered. You would set the following Fields settings

  1.   Fields -\> Label - MonthNameShort(Date)

  2.   Fields -\> Value - Sum(Amount)

  3.   Group By - MonthNameShort(Date)

If you were to set the Order By to be MonthNameShort(Date) also, then you would get the Bars ordered by month alphabetically. To get them to appear in correct month order you would use

 - Order By - Month(Date)

Modifying the Order By from a Script

Please refer to the [Data Views chapter](../../../../scripting-apis/client-api/data-view-functions/index.htm) of the [Client API](../../../../scripting-apis/client-api/index.htm) section for more information.

Related Video:

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/GzJiwBDXlX8?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Configuring Data Section Properties [5:47]
