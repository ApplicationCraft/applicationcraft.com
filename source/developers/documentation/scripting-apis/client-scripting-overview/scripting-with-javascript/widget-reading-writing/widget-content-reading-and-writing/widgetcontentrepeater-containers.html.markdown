---
old_url: widgetcontentrepeater_containers.htm
title: "Repeater Containers"
active_menu_item: developers
class_name: developers
full_width: true
---


Repeater Containers are similar in concept to Grids but they are structured differently. The user is free to include all and any Widgets into a Repeater and so we offer a special way of loading content from any JSON object directly into the Repeater Widget.

## Getting the Contents of a Repeater

If you want to extract the contents of a Repeater, you use the app.getData('RepeaterWidget') function. This returns an object array

    objRepeater = app.getData('myRepeater');
    alert(app.OBJ2JSON(objRepeater));
    
 Would display the following    
     
    [ {"lblItem":"Tenon Saw","lblPrice":"19.95","numQuantity":"0","numTotal":"0","btnRemove":"Remove"},
      {"lblItem":"Dovetail Saw","lblPrice":"39.95","numQuantity":"0","numTotal":"0","btnRemove":"Remove"},
      {"lblItem":"Jack Plane No.4","lblPrice":"69.95","numQuantity":"0","numTotal":"0","btnRemove":"Remove"},
      {"lblItem":"Jointer Plane No.7","lblPrice":"29.95","numQuantity":"0","numTotal":"0","btnRemove":"Remove"},
      {"lblItem":"Firmer Chisel 1\"","lblPrice":"29.95","numQuantity":"0","numTotal":"0","btnRemove":"Remove"}]
      
## Populating a Repeater Container

Repeaters can be quite slow to draw as new browser objects need to be created dynamically. If you try to load hundred of records into the Repeater (or less for mobile devices) then things can slow down. There are two things you can do to speed things up

 - Set any labels 'Fast Draw' property to true (which should not effect rendering behavior)

 - Set the Elements per Page property of the Repeater Container to a low value first but then use the [drawNextPage()](/developers/documentation/scripting-apis/client-api/widget-object-functions/repeater-grid/drawnextpage) function to load more pages as the user requires them (typically when a button or label widget is pressed).

The following example shows how we load some simple, dummy data into a Repeater. We can load data directly from any array within any object directly into the Repeater without having to write any messy mapping code. Please refer to the [populateWidget()](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/populatewidget/) function reference for a detailed explanation. The populateWidget() function works just as well with Grids, Lists and Dropdowns.   

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
        
        // This object is used to map from any object into the repeater
        var mapObject = {
            'lblItem' :  'item',
            'lblPrice' : 'price'
        };
     
        // And this command loads the data, pointing to the data array and mapping object
        app.populateWidget("rptOrder", data['rowitems']['menuitem'], mapObject);
        
    }
  
## Deleting and Inserting Individual Rows with Scripts

You can add or remove rows using object functions described in the [Widget Object](/developers/documentation/scripting-apis/client-api/objects-titbits/widget-object) topic.

