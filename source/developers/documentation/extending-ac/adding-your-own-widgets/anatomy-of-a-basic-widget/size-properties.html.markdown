---
old_url: size_properties.htm
title: "Size Properties"
active_menu_item: developers
class_name: developers
full_width: true
---


This is included for informational purposes only. In most cases, your widget simply needs to include the following property section in order to have standard support for the 'Sizes' property. Most widgets have a ' Sizes' property. This brings up a dialog that allows you to manage the way a widget can resize. This includes the % width property that allows the widget to resize according to its parent container. This is useful for ensuring apps display 'responsively' on mobile devices or changing browser sizes.

The Layout section of the property bar contains the following properties.

                { name: AC.Property.group_names.layout, props:[
                    AC.Property.layout.x,
                    AC.Property.layout.y,
                    AC.Property.layout.pWidthHidden,
                    AC.Property.layout.widthHidden,
                    AC.Property.layout.heightHidden,
                    AC.Property.layout.sizes,
                    AC.Property.layout.repeat,
                    AC.Property.layout.zindex,
                    AC.Property.layout.anchors,
                    AC.Property.layout.alignInContainer
                ]},
                    AC.Property.layout.pWidthHidden,
                    AC.Property.layout.widthHidden,
                    AC.Property.layout.heightHidden,
                    AC.Property.layout.sizes,
    setProperty("myWidget", aSizeProperty, value)
    aSizeProperty
    width
    height
    pWidth (% width)
   

In order for your Widget to work with this mechanism, you should be sure to include these properties

The sizes property take care of the popup sizes dialog. The others are responsible for supporting where can be one of

 - 

 - 

 - 

