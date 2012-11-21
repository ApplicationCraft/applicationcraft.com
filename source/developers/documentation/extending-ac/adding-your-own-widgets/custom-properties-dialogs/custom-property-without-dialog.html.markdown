---
old_url: custom_property_without_dialog.htm
title: "Custom Property Without Dialog"
active_menu_item: developers
class_name: developers
full_width: true
---


If your custom property does not require a special dialog, then you add your property to the property definitions as described in [Defining Properties](/developers/documentation/extending-ac/adding-your-own-widgets/anatomy-of-a-basic-widget/defining-properties) .

The entry below would add a new property simpleLength.

    {name: "simpleLength", type : "simpleLength", set:"simpleLength", get: "simpleLength", alias:"Simple Length"},
    p.simpleLength = AC.Property.normal('simpleLength');
    // simpleLength custom property type. Does not need any dialog
    gType.simpleLength = function (cell) {
        this.cell(cell);
        this._params = {min : 0, max: 99};
    };
    gType.simpleLength.prototype = new gType.basenumber;
   

We don't need a dialog, but we would need to implement a widget method within the main widget code, for example

We would then need to handle this within our custom property definition code. Please refer to the section [The full dialog code example](/developers/documentation/extending-ac/adding-your-own-widgets/custom-properties-dialogs/the-full-dialog-code-example) , where you will see this near the top.

