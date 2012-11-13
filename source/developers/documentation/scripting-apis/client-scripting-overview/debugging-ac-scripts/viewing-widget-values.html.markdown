---
title: "Viewing Widget Values"
active_menu_item: developers
class_name: developers
full_width: true
---


In order to speed up the debugging process, you will often want to watch the values contained by certain Widgets. Rather than wading through all of the Widgets in your App, the debugValues() command allows you to specify one or more Widget names that you want to watch. These are then placed into a Javascript object that can be watched by the debugger.

    watchVars = app.debugValues(["firstName", "Email", "Listbox"]); // Watch several Widget values
    singleWatchVar = app.debugValues('firstName'); // watch a single Widget value
   

You should note that debugValues() and debugData() return different results depending on the type of Widget specified. Values refer to the data entered or clicked on by a Respondent. Data refers to the content (list items, data grid content) within Widgets. For simple Widgets such as Text fields, they both return the same.

