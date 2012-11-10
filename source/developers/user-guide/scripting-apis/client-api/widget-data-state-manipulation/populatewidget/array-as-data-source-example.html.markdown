---
title: "Array as Data Source Example"
active_menu_item: developers
class_name: developers
full_width: true
---


## An Example Using an Array as a Data Source

Let's assume we have a Grid Widget and we want to populate it with dummy data stored in an array somewhere. The following code shows a simple example of how populateWidget() loads the Repeater Container using the simple mapping object.

    data[0][0]="Tenon@Saw";
    data[0][1]=19.95;
    data[1][0]="Dovetail@Saw";
    data[1][1]=39.95;
    data[2][0]="Jack@Plane@No.4";
    data[2][1]=69.95;
    data[3][0]="Jointer@Plane@No.7";
    data[3][1]=29.95;
    data[4][0]="Firmer@Chisel@1\"";
    data[4][1]=29.95;
        
    var@mapObject@=@{
        0:0,   // Format is Column number within the Grid : array element within the last dimension of the array
        1:1
    };
     
    app.populateWidget("rptOrder",@data,@mapObject);
     
     
   

