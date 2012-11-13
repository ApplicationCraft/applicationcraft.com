---
title: "Rows Object"
active_menu_item: developers
class_name: developers
full_width: true
---


The rows object is used to populate Grid, Listbox and Dropdown Widgets and is also returned by the getData() function for a Grid Widget.

     
        var griddata = {"rows":[
            {"data":["UK","United Kingdom","61 million"], "id":1},
            {"data":["US","United States of America","250 million"], "id":2},
            {"data":["RU","Russia","96 million"], "id":3}
           ]};
        app.setData('myGrid', griddata);
     
        var colorObject = { "rows" : [
             {"junk":1, "data":["Red", "#ff0000"],"ind":1},
             {"junk":1, "data":["Green","#00ff00"],"ind":2},
             {"junk":1, "data":["Blue", "#0000ff"],"ind":3}]
         };
        app.setData("listColor", colorObject);    
     
     
   

The data property contains an array of strings corresponding to each grid column.

For List and Dropdown Widgets, the data property should have two elements inside the array. The first is the text to be displayed and the second contains the select value. Any other properties will be ignored.

