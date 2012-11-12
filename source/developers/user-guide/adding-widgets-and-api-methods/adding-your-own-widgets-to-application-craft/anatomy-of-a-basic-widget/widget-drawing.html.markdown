---
title: "Widget Drawing"
active_menu_item: developers
class_name: developers
full_width: true
---


When Application Craft wants to render the widget, the draw function will be called

     
        /**
         * Widget draw function
         */
    None
           this.base().html(this.textFn())
           .css('font', this.fontFn());
           widget._sc.draw.apply(this, arguments); // call parent class draw method (required) 
        };
   

So if you are embedding some 3rd party widget, creating your own DIV etc. then this is where you get it drawn. Note that the last line is required to fit into the AC Framework correctly.

