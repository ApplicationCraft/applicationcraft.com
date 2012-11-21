---
old_url: viewing_complex_widget_content.htm
title: "Viewing Complex Widget Content"
active_menu_item: developers
class_name: developers
full_width: true
---


In order to speed up the debugging process, you may want to examine the contents of Widgets such as Listboxes, Dropdowns, Grids or Repeater Containers. Note that this is not the same as selections made by Respondents (which is debugged using debugValues()). AC creates a special object that makes it very easy to view in the debugger by expanding the tree.

    watchVars = app.debugData(["gridWidget", "repeaterContainer"]); // Watches 2 widgets
    singleWatchVar = app.debugData('firstName'); // watches a text field. Returns the same as debugValues()
   

You should note that debugValues() and debugData() return different results depending on the type of Widget specified. Values refer to the data entered or clicked on by a Respondent. Data refers to the content (list items, data grid content) within Widgets. For simple Widgets such as Text fields, they both return the same.

