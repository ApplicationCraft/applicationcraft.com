---
title: "Defining Properties"
active_menu_item: developers
class_name: developers
full_width: true
---


This is where you define the properties your widget offers in the IDE. Properties are made up of two types

 - Application Craft standard properties, for example

 - Your widget's additional properties

    /**
    * Property definitions and then their default values
    */
    { name: AC.Property.group_names.general, props:[
    AC.Property.general.widgetClass,  // required
    AC.Property.general.name,         // required
    // The next two are custom properties of this widget (there is another one in the Style section)
    {name: "text", type : "text",
    set: "textFn", get: "textFn", alias: "widgetpropname_simpleLabel_text"},
    {name: "hiddenText", type : "boolean",
    set:"hiddenTextFn", get: "hiddenTextFn", alias:"widgetpropname_simpleLabel_hiddenText"}
    ]},
    { name: AC.Property.group_names.layout, props:[
    AC.Property.layout.x,
    AC.Property.layout.y,
    AC.Property.layout.pWidth,
    AC.Property.layout.width,
    AC.Property.layout.height,
    AC.Property.layout.repeat,
    AC.Property.layout.zindex,
    AC.Property.layout.anchors,
    AC.Property.layout.alignInContainer
    ]},
    { name: AC.Property.group_names.behavior, props:[
    AC.Property.behavior.visible
    ]},
    { name: AC.Property.group_names.style, props:[
    AC.Property.behavior.opacity,
    AC.Property.style.margin,
    // This is a custom Style property for the Font
    {name: "font", type : "tfont",
    set:"fontFn", get: "fontFn", alias:"widget_font"}
    ]}
    ],
   

You will see that the properties are grouped into the sections you will see in the property bar in the IDE.

Application Craft Standard Property Types

You should use AC properties wherever you can as these offer a lot of the AC Framework's powerful features such as layout and data integration. The properties are of the format

    AC.Property.sectionname.propertyname
   

However, it is important to note that while you do inherit any custom dialog offered by the property, you do not inherit any behavioral functionality. For example, let's assume you have a Page Jump property. You can use the AC property for this and you will see a drop-down appear when you click on the property value in the toolbar. However, what actually happens at run time must be implemented by you.

Our Widgets on GitHub

We feel that the easiest way to learn about this is by example. Please refer to [Widgets on GitHub](../widgets-on-github.htm) to see how you can download and examine many of our own widgets.

Additional Properties

You can see how the 'text' and 'hiddenText' custom properties are defined (Hidden Text does not mean anything clever, it is used to illustrate the treatment of some non-visual property). Here is the 'text' property

    {name: "hiddenText", type : "boolean",
    set:"hiddenTextFn", get: "hiddenTextFn", alias:"widgetpropname_simpleLabel_hiddenText"}
    widgetpropname_simpleLabel_text
   

The key meanings are as follows

 - name : the internal property  as accessed through the AC API; we strongly recommend you choose the name very carefully and match it precisely to the property label in the IDE; more on this topic below. The alias key (see below) is the property name that is actually shown in the property bar in the IDE.

 - type : the data type associated with this widget

 - set : function name that is called when the widget's property is written to

 - get : function name that is called when the widget's property is read from

 - alias : a [language constant](language_constants.htm) that contains the property label as displayed in the left column of the IDE property bar. AC will attempt to find a constant with this name. If it cannot, then it will use the constant name as the IDE string. The example above assumes there is a language constant defined. Read the note below on property naming.

Property Naming

There are two things involved in property naming

Internal Property Name : in the above example, 'hiddenText' is the widget's internal property name.

Alias : this is the string constant that determines what appears in the IDE's property bar.

Although you can choose any property alias you like for a given property name, we strongly recommend a specific approach to naming to avoid confusing users and having to look up internal names elsewhere.

So, in our example property, we would recommend "hiddenText" as the internal property name and "Hidden Text" as the alias string.

We would not recommend "hiddenText" as the internal property name and "Hidden" as the alias string. The user will see Hidden in the property bar and perhaps assume that the internal property name is the same, which, in this case, it is not.

A user can reference a property in any of the following ways

    app.setProperty('widget', 'hiddenText', 'Dark Matter');
    app.setProperty('widget', 'Hidden text', 'Dark Matter');
    app.setProperty('widget', 'HIDden Text', 'Dark Matter');
    (etc.)
   

As you can see, the AC API will take a Property name (or Widget name as it happens) referenced in an App's API call and

 - removes spaces

 - make it case insensitive.

Application Craft String Constants

Application Craft has a constants file that contains all strings used throughout the system, including the property name constants. If you want to use these, you can. In our example, we reference widget\_font instead of creating our own. You will notice in the [language constants](language_constants.htm) code that widget\_font is not defined, as this gets taken from the AC constants.

