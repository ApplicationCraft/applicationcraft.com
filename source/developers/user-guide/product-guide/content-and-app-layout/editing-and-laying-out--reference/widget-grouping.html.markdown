---
title: "Widget Grouping"
active_menu_item: developers
class_name: developers
full_width: true
---


You can group a number of Widgets by

 - Multi selecting them, then selecting Application along the top bar and finally the Group option

 - Multi selecting the Widgets, then right clicking one of the selected objects and choosing the Grouping options from the pop-up menu

## The Group Widget

When you group a number of Widgets together, Application Craft creates a new Widget of type Group and the selected Widgets become children of that Group Widget. You can now change properties of the Group Widget. For [Radio Buttons](../../widget-properties-events/common/radio-button) , you can then set 'Mandatory = true' so users have to make a selection before submitting the app. See [App Properties](../../widget-properties-events/app-properties#mandatory)

## Effect on Data

Establishing a group of Widgets can effect the way that data is stored for certain objects. If a Group contains Radio Button Widgets then the Group itself has a value associated with it.

For example, if you want to ask a question like "What is your preferred color?" and give 3 Radio Buttons "Red", "Blue" and "Green" then you will need to place these within a Group. You should give the Group a suitable Name as this will be the field name for the "What is your preferred color" response.

You should be careful of Ungrouping as this will lose the Radio Button field definition.

