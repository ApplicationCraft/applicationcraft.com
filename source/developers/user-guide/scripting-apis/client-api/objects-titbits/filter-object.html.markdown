---
title: "Filter Object"
active_menu_item: developers
class_name: developers
full_width: true
---


The Filter object is a simple object that is used to set Data View Filters from your scripts. The Filter property of a Widget is an array of Filter objects, where each array element represents an expression that is ANDed with the others.

Filters use AC expressions. An expression is a string that contains references to Data View fields, Widget Values and literal values. Please refer to the [Expression Editor](../../../product-guide/advanced-features/data-integration,-reporting-dashboards/data-section-properties/the-expression-editor) for a detailed overview.

AC handles filters in a slightly complex way (that may be simplified soon). This is best illustrated with an example. Let's say you have an expression like

{person.gender}=[Form.Widgets.ddGender] AND ({person.age}\>[Form.Widgets.numMinAge] OR  {person.age}\>[Form.Widgets.numMinAge])

You would need an array with 2 elements as shown below. Each element is an expression that is ANDed with the next expression element.

    ["{person.gender}=[Form.Widgets.ddGender]","{person.age}>[Form.Widgets.numMinAge])OR({person.age}>[Form.Widgets.numMinAge])}]
    app.setProperty("widgetName", 'filter', objArray);
    widgetObj.prop('filter', objArray);
   

## IMPORTANT : If your expression contains and OR, then each phrase MUST be enclosed in brackets. This requirement will be removed in due course in an update that will allow complex expressions to be built into a single element.

A filter array like this can then be passed to the filter property of all data enabled Widgets using one of the following methods

When you set the filter property, that Widget will not auto-refresh. You need to call [app.refreshData](../widget-functions/refreshdata) ("widgetName") to make this happen.

