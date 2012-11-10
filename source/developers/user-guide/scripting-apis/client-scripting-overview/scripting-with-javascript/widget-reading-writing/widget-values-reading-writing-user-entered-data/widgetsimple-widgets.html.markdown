---
title: "Simple Widgets"
active_menu_item: developers
class_name: developers
full_width: true
---


These are Widgets that capture a single field of data.

 - Text

 - Numeric

 - Date Picker

 - Text Area

 - Checkbox

 - Radio Button

 - Masked Edit

**Reading Values**

Use app.getValue(WidgetName) to read the contents of any of these widgets

    var@firstName@=@app.getValue("txtFirstName");
    var@firstName@=@app.setValue("txtFirstName",@'Michael@Caine');
     
     
   

**Writing Values** - use app.setValue(WidgetName, Value) to write data to a widget

## See Also:

 - [assign()](../../../../client-api/widget-data-state-manipulation/assign)

 - [setValue()](../../../../client-api/widget-data-state-manipulation/refsetvalue)

 - [getValue()](../../../../client-api/widget-data-state-manipulation/refgetvalue)

