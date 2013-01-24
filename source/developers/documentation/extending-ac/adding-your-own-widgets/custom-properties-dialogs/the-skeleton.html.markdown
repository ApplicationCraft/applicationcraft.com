---
old_url: the_skeleton.htm
title: "The Skeleton"
active_menu_item: developers
class_name: developers
full_width: true
---


Any custom dialog has a basic skeleton.

    (function($, gType) {
        if (!gType)
            return;
     
        gType.**dialogExample**= function(cell) {
            // The following line should always be included
            this.cell(cell); 
     
        ...
     
        gType.**dialogExample**.prototype = new gType.dialogType;
     
    })(jQuery, jqSimpleGrid.types);
    
As mentioned in the topic Associating a property with the dialog, the custom property type is defined in the main widget code ...    
    
    {name: "exampleDialogProperty", type : "**dialogExample**", get: "exampleDialogProperty", set: "exampleDialogProperty", alias : "example Dialog Property"}
                ]}
   
You can see the association is made with 'dialogExample'. The sections in bold show what needs to be modified in your code.

