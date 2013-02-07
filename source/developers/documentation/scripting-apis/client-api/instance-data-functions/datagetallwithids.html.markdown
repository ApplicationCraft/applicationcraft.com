---
title: "dataGetAllWithIds()"
active_menu_item: developers
class_name: developers
full_width: true
---


obj = **dataGetAllWithIds** (widgets, includeLabels)

## Parameters

<table>
<tr>
<td width="134">
{object} obj

</td>
<td width="20">
</td>
<td width="750">
The object that returns the data.

</td>
</tr>
<tr>
<td width="134">
{array} widgets

</td>
<td width="20">
</td>
<td width="750">
An array of widget names you want to get like ['page1', 'container2'].

</td>
</tr>
<tr>
<td width="134">
{object} includeLabels

</td>
<td width="20">
</td>
<td width="750">
true/false used if you want to store current widgets labels for printing.

</td>
</tr>
</table>
## Description

This function takes a data and state snapshot of the widgets defined in your array stores it in an object variable, which can then be passed to [printApp()](/developers/documentation/scripting-apis/client-api/app-functions/printapp).

This contains data and field state (visible, read-only, enabled properties) information only for those fields in the App that have the 'Store in Database' property set to true. 


## Example

     function handler_actionBtn_onClick(mouseev){
        params = {
        pages: ['page1'],
        instance: app.dataGetAllWithIds(['page1'],true),
        orientation: 'landscape', //'Portrait',         
        };
        
        
        app.printApp(app.id(),params, function(err, url){
            if(!err)
            {
               app.setProperty('label','label',"<a href='" + url + "' target='_blank'>open PDF here</a>");
            // window.open(url);   if you want to automatically open 
            }        
        });
    }
     
     
   

## See Also

 - [printApp()](/developers/documentation/scripting-apis/client-api/app-functions/printapp)
 - [isPrinting()](/developers/documentation/scripting-apis/client-api/app-functions/isprinting)

 
