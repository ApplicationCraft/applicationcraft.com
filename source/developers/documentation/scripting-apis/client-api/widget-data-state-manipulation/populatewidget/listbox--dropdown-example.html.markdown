---
old_url: listbox___dropdown_example.htm
title: "ListBoxes, Dropdowns and Context Menu Examples"
active_menu_item: developers
class_name: developers
full_width: true
---


In the example shown below, you can see that the mapping object maps two fields. The data array contains two elements 'lbl' and 'value' that we want to map into the Value and Label properties of the Widget.

If you are not interested in the 'value' then simply leave it out of your mapping object.

    function handler_application_onAppStarted(){
        var data = [
                    {'lbl': 'McClaren','value': '1'},
                    {'lbl': 'Ferrari','value': '2'},
                    {'lbl': 'Mercedes','value': '3'},
                    {'lbl': 'Red Bull','value': '4'}
        ];
        var map = {
                        0:'lbl',
             1:'value'
        };       
        app.populateWidget('list', data, map);
    }
     
   

If your data array is not as simple as the one shown above (some AJAX calls can return complex, nested object structures) then read the [Complex JSON Examples](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/populatewidget/complex-json-example) section to show you how to map these.
