---
old_url: hellow_world.htm
title: "Hello World"
active_menu_item: developers
class_name: developers
full_width: true
---


Below is the code for a very simple 'Hello World' type widget.

This Widget does very little other than display a piece of text. It is explained in more detail in the next Chapter 'Anatomy of a Basic Widget'. We will then develop this widget over the following chapters.

     
    (function($, windows, document, undefined){
     
        // This top section should always be present
        var widget = AC.Widgets.SimpleLabel = function() {
            this.init.apply(this, arguments);
        };
        AC.extend(widget, AC.Widgets.Base);
        var p = widget.prototype;
     
        // Define the widget Class name
        p._widgetClass = "SimpleLabel";
     
        /**
         * Constructor
         * @class  Constructor / Destructor below
         * @constructs
         */
        p.init = function() {
            widget._sc.init.apply(this, arguments);
        };
     
        p.destroy = function() {
            widget._sc.destroy.apply(this, arguments);
        };
     
        /**
         * Widget draw function
         */
        p.draw = function() {
            this.base().html(this.textFn())
            this.base().css('font', this.fontFn());
            widget._sc.draw.apply(this, arguments); // call parent class draw method (required)
         };
     
        /**
         * Widget update function
         */
        p._updateLayout = function(){
            widget._sc._updateLayout.apply(this, arguments);
            //put your code here to reflect on size properties changed
        };
     
        /**
         * Widget methods implementation
         */
     
            // The get/set function for the 'text' property
        p._simpleText = function(value) {
            this.base().html(value);
        };
        p.textFn = (function(){
            var propertyFunction = AC.Property.html('text', p._simpleText);
     
            return function(value) {
                if (value !== undefined) // if setter called
                    $(this).trigger(widget.onChange, [value, this.textFn()]);
                return propertyFunction.apply(this, arguments);
            }
        })();
     
        // Setting Font information (shows use of the theme template)
        p._simpleTextFont = function(value) {
            this.base().css('font', value);
        };
        p.fontFn = AC.Property.theme('font', p._simpleTextFont);
     
        // Setting an arbitrary internal property
        p.hiddenTextFn = AC.Property.normal('hiddenText');
     
        /**
         * Property definitions and then their default values
         */
        var props = [
                { name: AC.Property.group_names.general, props:[
                    AC.Property.general.widgetClass,  // required
                    AC.Property.general.name,         // required
                    // The next two are custom properties of this widget (there is another one in the Style section)
                    {name: "text", type : "text",
                        set: "textFn", get: "textFn", alias: "Text"},
                    {name: "hiddenText", type : "boolean",
                        set:"hiddenTextFn", get: "hiddenTextFn", alias:"Hidden Text"}
                ]},
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
                { name: AC.Property.group_names.behavior, props:[
                    AC.Property.behavior.visible
                ]},
                { name: AC.Property.group_names.style, props:[
                    AC.Property.behavior.opacity,
                    AC.Property.style.margin,
                    // This is a custom Style property for the Font
                    {name: "font", type : "tfont",
                        set:"fontFn", get: "fontFn", alias:"widget_font"}
                ]}
     
            ],
            defaultProps = {
                name: "SimpleLabel", value: 1, enable: true,
                text: "Hello World", hiddenText:"Dark Matter", font: "normal 16px Verdana",
                width: "200", height: "50", x : "100", y: "100", zindex : "auto",
                margin: "", alignInContainer: 'left', pWidth: "",
                anchors : {left: true, top: true, bottom: false, right: false},
                visible : true, opacity : 1
            },
     
            /**
             * Event Handling
             */
     
                // If you want to just inherit the standard AC Events, then use the following line
                //actions = AC.Widgets.Base.actions(),
     
                // But we will just add in this single "onChange" custom event definition
                actions = {
                change: {alias: "widget_event_onchange", funcview: "onChange",
                    action: "AC.Widgets.SimpleWidget.onChange", params: "newValue, oldValue",
                    group: "widget_event_general"}
            },
     
        /* Lang constants */
            lng =  { "en" : {
                widgetpropname_simpleLabel_text: "Simple Text",
                widgetpropname_simpleLabel_hiddenText : "Hidden Text"
            } },
            emptyProps = {};
     
        // onChange event constant definition
        widget.onChange = "Event#SimpleLabel#onChange";
     
        // The following lines are required
     
        /**
         * Return available widget prop
         * @return {Object} available property
         */
        widget.props = function() {
            return props;
        };
     
        /**
         * Return empty widget prop
         * @return {Object} default properties
         */
        widget.emptyProps = function() {
            return emptyProps;
        };
     
        /**
         * Return widget inline edit prop name
         * @return {String} default properties
         */
        widget.inlineEditPropName = function() {
            return "data";
        };
     
        widget.defaultProps = function() {
            return defaultProps;
        };
     
        /**
         * Return available widget actions
         * @return {Object} available actions
         */
        widget.actions = function() {
            return actions;
        };
     
        /* Lang constants */
        /**
         * Return available widget langs
         * @return {Object} available actions
         */
        widget.langs = function() {
            return lng;
        };
     
    })(jQuery,window,document);
     
     
   

