---
title: "Constructor / Destructor"
active_menu_item: developers
class_name: developers
full_width: true
---


The constructor provides context in which the Widget is running. In our Hello World example, we have the following simple constructor

        /**
         * Description of constructor
         * @class  Some words about label widget class
         * @constructs
         */
        p.init = function() {
            widget._sc.init.apply(this, arguments);
        };
     
    p.init = function(param) {
      var mode = param.mode; // widget mode editor or runtime
      var parent = param.parent; // parent widget (a container) object
      var form = param.form; // link to the form (App) object
      var page = param.page; // link to widget page object
      var project = param.project; // json structure of the widget
      widget._sc.init.apply(this, arguments);
    }
        p.destroy = function() {
            widget._sc.destroy.apply(this, arguments);
        };
   

If you wish to carry out other tasks at this point, you can receive a parameter that provides information about the context in which  the widget is running.

<a id="destructor"> </a> You will also find a destructor function. In our example, this destructor is also empty.

