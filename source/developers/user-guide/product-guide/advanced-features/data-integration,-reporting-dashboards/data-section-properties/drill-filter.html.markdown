---
title: "Drill Filter"
active_menu_item: developers
class_name: developers
full_width: true
---


This option is used by Application Craft to control the way automatic drilling down works between Widgets that use the same View. Many Widgets support drill down broadcast so that when they are clicked they add to the current filter that is applied to the View.

![groupby](/img/docs/groupby.zoom79.png)

Note that without the 'broadcast' property set to true, the drill-down filter will not be applied to the View.

Using the Expression Builder, you are able to control the expression that is added to the drill down filter. The following Widgets are commonly used to "broadcast" a drill down event to other Widgets.

 - Grid - by clicking on a row or multi-selecting rows using the ctrl/cmd key

 - Pie / Doughnut Chart - by clicking in a chart segment; note you can achieve a multiple selection drill-down by clicking on more than one segment in conjunction with the Drill Type property.

 - Listbox - by selecting one or more list rows .

 - Drop Down - by selecting one or more rows from the drop down list.

 - Other Widgets - most Widgets have Drill Filter property and how you use this is up to your and your imagination.

Drill Filter Expression &  {value} and {label}

This will be the condition that should be added to the drill down filter. For example, if you have a Listbox containing country names and you want to drill down on the Country Name., you would use something like {customers.country}={label}. AC will replace {label} with the label of the selected item. You will see both {label} and {value} in the Fields list in the expression editor.

{value} is used when your Widget has a Value property for the clicked on item. A Listbox, for example, can have both a Label (that is see in the list) and a Select Value (that is not seen but is associated with each list item). If, for example, your country list needs to set a filter using a Country Code, then you would set the Value property in the Fields property with something like {Customers.CountryCode} and the Label with {Customers.Country}. The Drill Filter would then be set to {customers.country}={value}.

Drilling Down Using Grids

You can drill down using Grids very easily but you need to decide which column should be used to drill down on. This is done by selecting the {value} option from the Field list in the Expression Editor. Next to {value} is a number that indicates the column number. This is 0-based, so {value}[0] means the first column.

Modifying Drill Down from Scripts

You can write scripts that dynamically modify the drill-down filter. Please refer to the [Data Views chapter](../../../../scripting-apis/client-api/data-view-functions/index) of the [Client API](../../../../scripting-apis/client-api/index) section for more information.

Related Video:

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/t-MozAiRF0Q?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Automated & Javascript Drill Down [4:59]
