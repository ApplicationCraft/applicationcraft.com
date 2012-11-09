---
title: "The Skeleton"
active_menu_item: developers
class_name: developers
full_width: true
---


Any custom dialog has a basic skeleton.

    (function($, gType) {
    if (!gType)
    return;
    gType.
    = function(cell) {
    // The following line should always be included
    this.cell(cell);
    ...
    gType.
    .prototype = new gType.dialogType;
    })(jQuery, jqSimpleGrid.types);
    {name: "exampleDialogProperty", type : "
    ", get: "exampleDialogProperty", set: "exampleDialogProperty", alias : "example Dialog Property"}
    ]}
   

## dialogExample

## dialogExample

As mentioned in the topic Associating a property with the dialog, the custom property type is defined in the main widget code ...

## dialogExample

You can see the association is made with 'dialogExample'. The sections in bold show what needs to be modified in your code.

