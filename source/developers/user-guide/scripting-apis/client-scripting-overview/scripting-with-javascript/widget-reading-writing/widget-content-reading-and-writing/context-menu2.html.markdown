---
title: "Context Menu"
active_menu_item: developers
class_name: developers
full_width: true
---


The [Context Menu](/developers/user-guide/product-guide/widget-properties-events/beta/context-menu) widget can be populated by code with the OnPreShow event

The following object is used

    app.setData('contextMenu',  [
            ['Red', 'value'],
            ['Green', 'value2'],
            ['Blue', 'value3']
           ] );
     
    function handler_contextMenu_onPreShow(){
        app.setData('contextMenu',  [
            ['Red', 'value'],
            ['Green', 'value2'],
            ['Blue', 'value3']
           ] );
   

## Example

