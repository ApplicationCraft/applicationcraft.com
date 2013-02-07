---
old_url: printing_examples.htm
title: "Printing Examples"
active_menu_item: developers
class_name: developers
full_width: true
---


The following examples illustrate good ways to handle printing

**The Lazy Way**

This is the quick and dirty way, with no help for the user as to what is going on, and a label widget with then show 'Open PDF here' when it is ready

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
     
     
   

**A Nice Twirly Thing Approach**

This way is much nicer and shows a blocking hourglass / twirly thing that remains until the PDF is ready.

**Let the User Carry On Until Ready**

This approach lets the user carry on using the App but tells the user when the PDF is ready.

## See Also

 - [printApp()](/developers/documentation/scripting-apis/client-api/app-functions/printapp)
 - [isPrinting()](/developers/documentation/scripting-apis/client-api/app-functions/isprinting)
 - [dataGetAllWithIds()](/developers/documentation/scripting-apis/client-api/instance-data-functions/datagetallwithids)

