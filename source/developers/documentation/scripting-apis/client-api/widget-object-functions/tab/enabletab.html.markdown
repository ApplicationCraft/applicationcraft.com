---
old_url: enabletab.htm
title: "enableTab()"
active_menu_item: developers
class_name: developers
full_width: true
---


**enableTab** (index,true/false)

## Description

Enable/Disable a tab. Please note that you cannot use an array of tabs. 
ie

     app.w("Tab").enableTab([1,2],false);     
will not work

## Example

     
    app.w("Tab").enableTab(1,false); // Disables the 2nd tab in the tab container
     
   

## See Also

 - [enabled()](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/enabled)

