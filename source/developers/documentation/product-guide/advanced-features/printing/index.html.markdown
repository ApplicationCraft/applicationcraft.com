---
old_url: printing.htm
title: "Printing"
active_menu_item: developers
class_name: developers
full_width: true
---


Printing  should be considered to be in a Beta state until mention of it is removed from the documentation.

The Application Craft printing feature allows you to print out your Apps along with the instance data contained in it. The Application Craft Client API has the following functions

 - app.printApp() - print the App
 - app.isPrinting() - returns true if the App is currently printing

The printApp() does not actually cause the Application to print and as such is a bit of a misnomer. It actually generates a pdf that can then be printed by the user.

## See Also

 - [printApp()](/developers/documentation/scripting-apis/client-api/app-functions/printapp)
 - [isPrinting()](/developers/documentation/scripting-apis/client-api/app-functions/isprinting)
 - [dataGetAllWithIds()](/developers/documentation/scripting-apis/client-api/instance-data-functions/datagetallwithids)
 
