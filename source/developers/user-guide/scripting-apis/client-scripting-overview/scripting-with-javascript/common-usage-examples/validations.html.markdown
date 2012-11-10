---
title: "Validations"
active_menu_item: developers
class_name: developers
full_width: true
---


This is another very commonly used feature. It allows users to write simple or very complex validations.

    function SimpleValidation(){
     
    if(app.getValue("dropdownAge").label<18 && app.getValue("txtMovieRating")=="18") {
    app.showMessage("Minors may not purchase 18 rated movies");
    }
    }
     
     
    app.highlightWidgets(["If set to true, the user is able to drag and drop the widget with the mouse at run timeColor", "shapeColor"], "#22ff22", 40);
   

## Highlighting Offending Widgets

## If your code detects a validation issue, then you can draw the user's attention to the offending fields using the [highlightWidgets()](../../../client-api/widget-functions/highlightwidgets) function.

## Checking for Required Fields

You can also use the [checkMandatory()](../../../client-api/widget-functions/checkmandatory) function to let AC determine if one or more Widgets have been answered at all

You should also refer to [Interacting with Widgets](../widget-reading-writing/) for full details on how to read data from the various Widget types.

## **See Also**

 - [showConfirm()](../../../client-api/app-functions/showconfirm)

 - [showMessage()](../../../client-api/app-functions/showmessage)

