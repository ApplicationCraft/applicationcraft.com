---
old_url: widgetsimple_widgets.htm
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

    var firstName = app.getValue("txtFirstName");
    
**Writing Values** - use app.setValue(WidgetName, Value) to write data to a widget    
    
    var firstName = app.setValue("txtFirstName", 'Michael Caine');
     

## See Also

 - [assign()](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/assign)
 - [setValue()](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/refsetvalue)
 - [getValue()](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/refgetvalue)

