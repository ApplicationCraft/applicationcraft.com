---
title: "The assign() helper function"
active_menu_item: developers
class_name: developers
full_width: true
---


The [assign()](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/assign) function can be used to assign strings - that are made up of literal text and Widget data - to another Widget. Code written with the assign() function is easier  to read. For example, if you had the following code

    app.setData("targetWidget", app.getData("txtFirstName") + " " + app.getData("txtLastName"));
you could use the assign() function instead as follows 

    app.assign("targetWidget", "[Form.Widgets.txtFirstname] [Form.Widgets.txtLastName]");
   
However, for anything more advanced you will need to use getValue() and setValue() functions described below.

## See Also

 - [assign()](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/assign)

