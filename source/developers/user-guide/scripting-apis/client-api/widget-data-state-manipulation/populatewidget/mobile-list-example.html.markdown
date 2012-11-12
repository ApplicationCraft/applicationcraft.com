---
title: "Mobile List Example"
active_menu_item: developers
class_name: developers
full_width: true
---


Note that the Mobile list has quite a few extra fields - count, aside, divider, image. These are not available in regular (non-mobile) list widgets.

In example below, the map object contains all 6 available properties supported by the Mobile List Widget. You do not have to supply all of these if you are not using them, in which case you simply omit them.

    function handler_application_onAppStarted(){
        var data = [
                    {'lbl': 'McClaren','value': '1','count': '12','aside': 'Mercedes', 'separator':'false', 'img':'http://adomain/animage.png'},
                    {'lbl': 'Ferrari','value': '2','count': '15','aside': 'Ferrari', 'separator':'false', 'img':'http://adomain/animage.png'},
                    {'lbl': 'Mercedes','value': '3','count': '2','aside': 'Mercedes', 'separator':'false', 'img':'http://adomain/animage.png'},
                    {'lbl': 'Red Bull','value': '4','count': '1','aside': 'Renault', 'separator':'false', 'img':'http://adomain/animage.png'}
          ];
     
        var map = {
             'label': 'lbl',
             'value': 'value',
             'count': 'count',
             'aside': 'aside',
             'image': 'img',
             'divider' : 'separator'        
        };  
        app.populateWidget('list', data, map);
    }
   

If your data array is not as simple as the one shown above (some AJAX calls can return complex, nested object structures) then read the [Complex JSON Examples](complex-json-example) section to show you how to map these.

