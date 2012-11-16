---
title: "Grids"
active_menu_item: developers
class_name: developers
full_width: true
---


Grids are more or less like lists, except they have multiple columns, not just 2.

## Reading Selected Data

When a row in a Grid is **selected** , you can inspect the contents of that row using the getValue() function, which returns an array of strings, each element being a cell in the selected row.

["114","Australian Collectors, Co.","Melbourne","Victoria","Australia","117300"]

gets column n+1 from the currently selected row of the Grid

    app.getValue('grid')[n];
    
or you can reference using the Column name property     
     
    app.getValue('grid')['Company'];
    
    var numSelectedRows = app.getValue('grid').length; // number of selected rows in the Grid
    var colValue = app.getValue('grid')[0];
    
## Reading Unselected Data

If you want to read data from any row in a Grid they will probably unselected by the Respondent. In this case you have to use the [getData()](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/getdata) function. You should also [see here](/developers/documentation/scripting-apis/client-scripting-overview/scripting-with-javascript/widget-reading-writing/widget-content-reading-and-writing/widgetcontentgrids-repeater-containers) for more about getData().

This shows how you can get the entire row into an object and then process it   
    
    rowObj = app.w('grid').getRow(ind);
    arrivalTime = rowObj.data['Arrival'];
    
 alternatively,   
    
    arrivalTime = app.getData('grid').rows[index].data[2];
    
## Writing Data to a Cell

This can be done in two ways.   
    app.setValue('grid', {column: 1}, 'Cell Data'); 
    //sets the 2nd column of the currently selected row to 'Cell Data'.
     
     
    app.setValue('grid', {row:2, column: 3}, 'Cell Data'); 
    //writes 'Cell Data' into the 4th column of the 3rd row of the grid.
     
  
## See Also

 - [Reading & Writing the entire Grid contents](/developers/documentation/scripting-apis/client-scripting-overview/scripting-with-javascript/widget-reading-writing/widget-content-reading-and-writing/widgetcontentgrids-repeater-containers)
 - [setValue()](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/refsetvalue)
 - [getValue()](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/refgetvalue)

