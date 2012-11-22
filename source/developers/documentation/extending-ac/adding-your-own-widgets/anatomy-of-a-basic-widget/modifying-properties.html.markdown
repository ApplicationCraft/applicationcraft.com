---
old_url: modifying_properties.htm
title: "Modifying Properties"
active_menu_item: developers
class_name: developers
full_width: true
---


When you define a property (previous section), you specify get and set function names that are called whenever a property is queried (get) or modified (set). The Application Craft framework supplies three template functions to help you modify the internal widget structure without having to go into the bowels of the structure to perform these modifications yourself.

## Template Function Parameters

There are three Template functions you can use to handle the getting and setting of your property's data.

 - normal() - when no visual change occurs as a result of setting this property

 - html() - when a visual change arises but you do not want to relate this change to the widget's 'Style'

 - theme() - when a visual changes arises and you do want to relate this change to the widget's 'Style'

All three template functions have two parameters, the second of which is optional

 - Key for this property within the widget's internal JSON structure

 - Callback (optional) that is called whenever the property is modified. This would usually only be used if the property changes the visual appearance of the widget.

## Which template function do I use?

To illustrate this, let's assume a widget has the following properties

 - Text - the text to display; this would use the html() template function as you want to display the new text value

 - Page Jump - at run time, a page to jump to when the text is clicked on; this would use the normal() template as the value needs to be stored but there is not visual changes when this property changes.

 - Foreground Color - the color of the text that is shown on the page; this could use the theme() template as this results in a change to the display of the widget and you may want this value to be included in the theme's widget style.

## The html() template

The user code shown below shows the textFn method that is associated with the 'text' property (see [Defining Properties](/developers/documentation/extending-ac/adding-your-own-widgets/anatomy-of-a-basic-widget/defining-properties) ). You will see this property definition

    {name: "text", type : "text", set: "textFn", get: "textFn", alias: "Text"},
    AC.Property.html
        // The get/set function for the 'text' property
        p._simpleText = function(value) {
            this.base().html(value);
        };
        p.textFn = (function(){
            var propertyFunction = AC.Property.html('simpleText', p._simpleText);
     
            return function(value) {
                if (value !== undefined) // if setter called
                    $(this).trigger(widget.onChange, [value, this.textFn()]);
                return propertyFunction.apply(this, arguments);
            }
        })();
        // Setting an arbitrary internal property
        p.hiddenTextFn = AC.Property.normal('hiddenText');
        // Setting Font information (shows use of the theme template)
        p._simpleTextFont = function(value) {
            this.base().css('font', value);
        };
        p.fontFn = AC.Property.theme('font', p._simpleTextFont);
   

It calls , which is our html template function. It also shows how the onChange event is called if the function is called as a 'set'.

In our example, we are changing the displayed text. The first parameter is the internal property name. The second parameter is a callback function that is called if the widget is drawn, where you would redraw or modify the widget's visual state. You can also see how it triggers the onChange event, which would be called if the App is running.

## The normal() template

If you need to modify an internal widget property that does not relate a) to a theme and b) does not effect the visual output of the widget, then use the normal() template function. It ensures that the property value is correctly stored within the widget's internal structure.

## The theme() template

If the property you are modifying is one that resides in the Theme, then you should use the theme() template function.

This is a template for theme driven properties. It allows a value to be loaded from the Theme. If the property takes its value from a Theme, then you should use this template.

