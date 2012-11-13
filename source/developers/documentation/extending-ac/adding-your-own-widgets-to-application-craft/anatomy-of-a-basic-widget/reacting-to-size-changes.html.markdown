---
title: "Reacting to Size Changes"
active_menu_item: developers
class_name: developers
full_width: true
---


Your Widgets can change size in one of several ways.

 - the developer can adjust the size of the widget in the IDE

 - a running App can change its overall size by changing the actual browser size if in a desktop browser or by changing the device orientation on a mobile device; wherever a % width is used for a widget, this will result in the automatic resizing of the widget

 - an App's javascript code can modify the widget size using setProperty() and specifying the height, width or % width property.

In any of these cases, you may wish for your widget to adjust itself depending on the new size.

        /**
         * Widget update function
         */
        p._updateLayout = function(){
            widget._sc._updateLayout.apply(this, arguments);
            //put your code here to reflect on size properties changed
        };
    this.width()
    this.height()
    this.pWidth()
   

The above function shows where you can place your code to handle this behavior. Within your code, you can query the width, height and precent width values for the widget as follows

 - 

 - 

 - 

