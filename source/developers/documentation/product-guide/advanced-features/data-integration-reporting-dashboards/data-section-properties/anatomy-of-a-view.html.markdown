---
title: "Anatomy of a View"
active_menu_item: developers
class_name: developers
full_width: true
---


Views are intelligent channels through which App Widgets can access data. Each View has some interesting properties

## Query Subset

Even though a Query may contain many fields, you may only need access to one or two of them; the View lets you narrow down to the fields you really need which improves performance and leaves you having to browse through unnecessary Widgets in your Widget setup.

To select a subset of all available fields, select the Query in the Query Used list and then check or uncheck Input and Output fields as required. Input fields are fields where you pass data to the Query and Outputs are fields that are returned from the Query to the App.

## Widgets share Views

An App can contain one or several Views. Several App Widgets will often share the same View. All Widgets that share the same view can be set to trigger and/or listen to a drill down event. Drilling down by clicking on a chart or grid row is the most common example of this. The screenshot below shows three Widgets which might share a common View.

![Sample\_dashboard](/img/docs/sample_dashboard.zoom62.png)

## Drill Down Filter

Each View has a Drill Down filter that is maintained by the browser instance when running the report. In the above screenshot, you have three Widgets that all share the same View. If I click on a pie chart slice or a row in the Grid, for example, the other Widgets will react to that click by only showing results that apply to the pie slice I just clicked on.

## Multi-Select Drill Down

Pie Charts, Grids and Listboxes have the ability to allow multiple item selection. In this case, clicking will cause a filter which "ORs" the items together.

## Broadcast and Listen

The Drill Down Filter is affected by all Widgets whose Broadcast property is set to True. As soon as a Widget is clicked on whose Broadcast property is set to true,  Application Craft will internally set the Drill Down Filter and then instruct all Widgets on that Page, that a) share the same View and b) have their Listen properties set to True, to request new (and therefore filtered) data.

## See Also

 - [Must Read Chart Reference](/developers/documentation/product-guide/advanced-features/data-integration-reporting-dashboards/chart-reference)
 - [Drilling Down](/developers/documentation/product-guide/advanced-features/data-integration-reporting-dashboards/drilling-down)

Related Video:

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/bSpGoTvBrW4?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Data Views [2:18]

