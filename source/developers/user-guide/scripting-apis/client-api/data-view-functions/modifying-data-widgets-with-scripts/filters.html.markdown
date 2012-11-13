---
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
    app.setProperty('widgetName', 'filter',  ['{person.gender}="Male"']);
    ({person.country}="USA" OR {person.country}="Canada") AND ({person.age}>[Form.Widgets.numMinAge] AND {person.age}>[Form.Widgets.numMinAge])
    var filterArray = ["({person.country}='USA'}) OR ({person.country}='Canada')","{person.age}>=[Form.Widgets.numMinAge]","{person.age}<=[Form.Widgets.numMaxAge}"];
    app.setProperty('widgetName', 'filter', filterArray);
   

In this case you can simple set the Filter as follows

For more complex expressions, things are a little different. Expressions to be AND'd should be placed in separate array elements. Bracketed ORs need to be bracketed in a particular way. We will be removing any possible limitations that might results from this approach in a later release so that expressions can be more freely designed.

If we take the following logical expression

You would use the following approach, which constructs an array with three elements, one for each of the AND'd clauses. Note that each expression either side of the OR must be bracketed.

**Important**

 - Each of the expressions that are OR'd must be enclosed in brackets.

 - You must use the app. [refreshData()](/developers/user-guide/scripting-apis/client-api/widget-functions/refreshdata) function to reload the widget with the filter applied.

 - If you need to access View data in the background, without the need to populate widgets, you should can use the [getViewData()](/developers/user-guide/scripting-apis/client-api/data-view-functions/getviewdata) function,

## Filtering Dates

Refer to the next section for information on how to filter dates.

## See Also

 - [Expressions](/developers/user-guide/product-guide/advanced-features/data-integration-reporting-dashboards/data-section-properties/the-expression-editor)
 - [Filtering Dates](/developers/user-guide/scripting-apis/client-api/data-view-functions/modifying-data-widgets-with-scripts/filtering-dates)
 - [getViewData()](/developers/user-guide/scripting-apis/client-api/data-view-functions/getviewdata)
 - [Drill Filter](/developers/user-guide/scripting-apis/client-api/data-view-functions/modifying-data-widgets-with-scripts/refdrill-filter)
 - [drillDownBroadcast()](/developers/user-guide/scripting-apis/client-api/data-view-functions/drilldownbroadcast)
 - [Data View Related Events](/developers/user-guide/scripting-apis/client-api/data-view-functions/data-view-related-events)

Related Video:

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/4FXN_AsiiMs?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Populating Chart Widgets [5:04]

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/t-MozAiRF0Q?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Automated & Javascript Drill Down [4:59]

