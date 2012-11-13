---
title: "childApp()"
active_menu_item: developers
class_name: developers
full_width: true
---


**childApp** (appWidget);

## Parameters

<table>
<tr>
<td width="170">
{string} appWidget

</td>
<td width="1">
</td>
<td width="710">
The name of the Embedded App Widget

</td>
</tr>
</table>

## Description

This function is used in association with Embedded Apps and allows an App to get the App object of another App that is Embedded within it using the Embedded App Widget.

You can directly control all of that child App's behavior and Widgets using the normal API functions.

To ensure that the Embedded app is running, use the 'On Started' event

## Example

A typical example would be to include an App as a cross-app menu bar. It can be Embedded into all your individual Apps that together form one, large Application. When the user clicks on a link, the Parent App must be used to switch Apps using the app.switchApp() function.

    function handler_lblChangeName_onClick(){
        app.childApp('widgetName').setValue("Name", app.getValue("txtFullName"));   
    }  
   

## See Also

 - [switchApp()](/developers/user-guide/scripting-apis/client-api/app-functions/switchapp)
 - [parentApp()](/developers/user-guide/scripting-apis/client-api/app-functions/parentapp)
 - [Embedding Apps within Apps](/developers/user-guide/product-guide/advanced-features/embedding-apps-within-apps/)
 - [Embed App Widget](/developers/user-guide/product-guide/widget-properties-events/advanced/embed-app)

