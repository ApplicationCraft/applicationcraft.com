---
old_url: filters.htm
title: "Filters"
active_menu_item: developers
class_name: developers
full_width: true
---


You can modify a Widget's Data Filter using a script that can modify

 - the Filter property of any Data View enabled Widget

 - the dynamic drill-down filter of a Data View enabled Widget

Application Craft deals with Filter in a way that allows conditions to be nicely constricted in code. In the simplest case, you might have one of the following expressions

    {person.gender}='Male'
    {person.gender}=[Form.Widgets.ddGender]

In this case you can simple set the Filter as follows

    app.setProperty('widgetName', 'filter',  ['{person.gender}="Male"']);

For more complex expressions, things are a little different. Expressions to be AND'd should be placed in separate array elements. Bracketed ORs need to be bracketed in a particular way. We will be removing any possible limitations that might results from this approach in a later release so that expressions can be more freely designed.

If we take the following logical expression

    ({person.country}="USA" OR {person.country}="Canada") AND ({person.age}>[Form.Widgets.numMinAge] AND {person.age}>[Form.Widgets.numMinAge])

You would use the following approach, which constructs an array with three elements, one for each of the AND'd clauses. Note that each expression either side of the OR must be bracketed.

    var filterArray = ["({person.country}='USA'}) OR ({person.country}='Canada')","{person.age}>=[Form.Widgets.numMinAge]","{person.age}<=[Form.Widgets.numMaxAge}"];
    app.setProperty('widgetName', 'filter', filterArray);
   


**Important**

 - Each of the expressions that are OR'd must be enclosed in brackets.

 - You must use the app. [refreshData()](/developers/documentation/scripting-apis/client-api/widget-functions/refreshdata) function to reload the widget with the filter applied.

 - If you need to access View data in the background, without the need to populate widgets, you should can use the [getViewData()](/developers/documentation/scripting-apis/client-api/data-view-functions/getviewdata) function,

## Filtering Dates

Refer to the next section for information on how to filter dates.

## See Also

 - [Expressions](/developers/documentation/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/the-expression-editor)
 - [Filtering Dates](/developers/documentation/scripting-apis/client-api/data-view-functions/modifying-data-widgets-with-scripts/filtering-dates)
 - [getViewData()](/developers/documentation/scripting-apis/client-api/data-view-functions/getviewdata)
 - [Drill Filter](/developers/documentation/scripting-apis/client-api/data-view-functions/modifying-data-widgets-with-scripts/refdrill-filter)
 - [drillDownBroadcast()](/developers/documentation/scripting-apis/client-api/data-view-functions/drilldownbroadcast)
 - [Data View Related Events](/developers/documentation/scripting-apis/client-api/data-view-functions/data-view-related-events)

## Related Videos

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/4FXN_AsiiMs?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Populating Chart Widgets [5:04]

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/t-MozAiRF0Q?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Automated & Javascript Drill Down [4:59]
