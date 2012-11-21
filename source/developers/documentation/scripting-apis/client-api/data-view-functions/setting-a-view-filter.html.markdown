---
old_url: setting_a_view_filter.htm
title: "Setting a View Filter"
active_menu_item: developers
class_name: developers
full_width: true
---


There is currently no specific function to set a View Filter, but it can be done by getting a View object and then manipulating the object as shown below.

    var viewObj = app.viewByName('view name');
    if (!jQuery.isArray(viewObj.project().filter)) {
         viewObj.project().filter = [];
    }
    viewObj.project().filter.push({value: 'filter'});
   

