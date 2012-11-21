---
old_url: repeater_container_example.htm
title: "Repeater Container Example"
active_menu_item: developers
class_name: developers
full_width: true
---


Here is a typical example of populateWidget() being used to populate data from a hard-coded data array into two Label Widgets 'lblItem' and 'lblPrice'.

    function handler_application_onAppStart(){
        
        // Generate some dummy data for the Repeater  
         var data = {"rowitems": {
            "menuitem": [
              {"item": "Tenon Saw", "price": "19.95"},
              {"item": "Dovetail Saw", "price": "39.95"},
              {"item": "Jack Plane No.4", "price": "69.95"},
              {"item" : "Jointer Plane No.7", "price": "29.95"},
              {"item" : "Firmer Chisel 1\"", "price": "29.95"}
            ]
          }
        };
        
        var mapObject = {
            'lblItem' :  'item',   // Widget Name : object key name within the row array
            'lblPrice' : 'price'
        };
     
        app.populateWidget("rptOrder", data['rowitems']['menuitem'], mapObject);
        
    }
   

You will often get your data by making an AJAX call using [httpRequest()](/developers/documentation/scripting-apis/client-api/soap-restful-ajax-calls/httprequest) and so this example shows the principle clearly. If your data comes as an array of complex, nested objects, then you should refer to the [Complex JSON Examples](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/populatewidget/complex-json-example) topic.
