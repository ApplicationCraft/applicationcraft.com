---
old_url: extendevents.htm
title: "Events"
active_menu_item: developers
class_name: developers
full_width: true
---


There are two ways to add events to you widget

 - Inherit the standard Event set from the Application Craft Framework

 - Add your own custom defined Events

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
     
        ...
     
     
        // onChange event constant definition
        widget.onChange = "Event#SimpleLabel#onChange";
        
## Inheriting Application Craft Framework Events

Just add the following code into your widget (commented out in our example as we only want one single event)        
     
       actions = AC.Widgets.Base.actions()
       
and you will automatically get the following events      
       
       On Click, On Double Click,
       Mousedown, Mouse Up, Mouse Enter, Mouse Leave,
       Drag Start, Drag Stop, Resize Start, Resize Stop
       
## Adding your own Events

Our example includes an onChange event we have defined       
       
        actions = {
            change: {alias: "widget_event_onchange", funcview: "onChange",
            action: "AC.Widgets.SimpleWidget.onChange", params: "newValue, oldValue", 
            group: "widget_event_general"}
        },
     
    alias : this is a language constant that displays the actual event name in the IDE event bar. If the constant is not found, then the constant name will be displayed.
    funcview : the text that is added to the widget name to create the actual event handler name for the event as it will appear in the IDE for the user, so handler_widgetName_onChange() for example.
    action : link to event constant
    params : the parameter names that are passed into your custom event
    group : constant referring to the event group name that should be used
    
For each widget event, you should create a unique string constant and specify this constant in the action    
    
    widget.onChange = "Event#SimpleLabel#onChange";
     

