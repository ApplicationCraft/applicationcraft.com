---
title: "Custom Property With Custom Dialog"
active_menu_item: developers
class_name: developers
full_width: true
---


For more complex properties, you may require a dialog. Within your main widget code you can define all of the properties for your widget in the normal way.

    var props = [
        { name: AC.Property.group_names.general, props:[
            // These are standard AC properties
            AC.Property.general.widgetClass,
            AC.Property.general.name,
            // And here is a custom one for which we have a custom dialog
            {name: "exampleDialogProperty", type : "dialogExample", get: "customProperty", set: "customProperty", alias : "Example Dialog Property"}
                ]},
   

The 'type' specifies the property type. We have specified dialogExample, which is a custom property type. As this is a new property type, Application Craft will try to load this. The code shown in the next section shows how we add this property type handler.

Note that the get and set functions will need to be present in your main widget code. These are all explained in the [Defining Properties](/developers/user-guide/adding-widgets-and-api-methods/adding-your-own-widgets-to-application-craft/anatomy-of-a-basic-widget/defining-properties) section.

