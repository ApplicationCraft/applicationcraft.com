---
title: "Drilling Down"
active_menu_item: developers
class_name: developers
full_width: true
---


Drilling down is the application of a filter on the View that is triggered by a user clicking on a part of the data displayed by a Widget. For example, a Grid (employee details) and a Pie Chart (countries) share the same View and when the user selects a country by clicking on a pie segment, the Grid should only show employees within that country.

Broadcast & Listen

In order for a Drill Down to occur, the clicked on Widget's [Broadcast](data-section-properties/broadcast.htm) property must be set to True. In order for a Widget to react to a Drill Down, that Widget's [Listen](data-section-properties/listen.htm) property must be set to True.

Auto Filter Reset on Drill Down

By default, each time a Drill Down action occurs, the Drill Down filter is added to, so any existing Drill Down filter actions are added to. In practice, this means that the user can drive complex drill-downs across multiple Widgets across multiple Pages in an App.

However, you may want a specific Widget, when clicked on, to clear the Drill Down filter before applying the filter relating to itself. In this case, you would set the Widget's [Reset Filter](data-section-properties/reset-filter.htm) property to True.

Drill Filter Property

The way that AC manages the drilling down is by looking at the [Drill Filter](data-section-properties/drill-filter.htm) property for the Widget that is clicked on. This property contains the Expression that is added to the Drill Down Filter.

The Drill Filter is usually set automatically when the Label in the Widgets Fields property is specified and so provided you have already set the Fields property (which you would normally do) you will see the Drill Filter Expression already set. You are free to modify it.

Drill Type for Multi Select Drill Downs

Some Widgets, such as Pie & Doughnut Charts, allow you to control how they react when they have been clicked on to drive a drill down. The [Drill Type](data-section-properties/drill-type.htm) property allows you to:

 - leave the chart as is

 - Self: show only the selected item (and click on it again to remove the drill down filter)

 - Call Out: call out the selected segment so you can then make more drill down clicks within the same Widget.

