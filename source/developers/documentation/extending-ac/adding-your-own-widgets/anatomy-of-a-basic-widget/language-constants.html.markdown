---
old_url: language_constants.htm
title: "Language Constants"
active_menu_item: developers
class_name: developers
full_width: true
---


**WARNING** : we are planning some changes to this part of the system. For the time being, we recommend that you do not user language constants and instead hard-code your property texts. We will remove this warning once this has been carried out.

Language constants are used for multi-language support within the designer. All strings (properties and events) have strings that appear in the IDE. Property Name and Event Name are prime examples.

The 'alias' key (used in Property and Event names) provides the string constant that is used for the displaying of the actual property name in the IDE.

Application Craft provides a set of constant files where all of the AC system strings are defined. You are unlikely to need this, but you can find them at

[http://yourdomain.applicationcraft.com/live/langXX.js](http://yourdomain.applicationcraft.com/live/langXX.js%20)

where XX denotes the language. At the time of writing, only en' (english) is supported.

In most cases you will want to define your own language constants. This is done within the widget code itself on the whole

        /* Lang constants */
        lng =  { "en" : {  
            widget_name_simpleLabel: "Simple Label"
         } },
         emptyProps = {};
     
     
   

