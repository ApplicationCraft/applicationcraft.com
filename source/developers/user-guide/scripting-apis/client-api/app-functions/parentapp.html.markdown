---
title: "parentApp()"
active_menu_item: developers
class_name: developers
full_width: true
---


**parentApp** ();

## Description

This function is used in association with Embedded Apps and allows the Embedded App to get the App object of its parent (the App it is Embedded in).

## Example

A typical example would be to include an App as a cross-app menu bar. It can be Embedded into all your individual Apps that together form one, large Application. When the user clicks on a link, the Parent App must be used to switch Apps using the app.switchApp() function.

    function handler_lblFindPeople_onClick(mouseev){
        app.parentApp().switchApp("ffb343ba-0550-4af3-ad0d-954fd068b68e");    
    }  
   

## See Also

 - [switchApp()](/developers/user-guide/scripting-apis/client-api/app-functions/switchapp)

 - [childApp()](/developers/user-guide/scripting-apis/client-api/app-functions/childapp)

 - [Embedding Apps within Apps](/developers/user-guide/product-guide/advanced-features/embedding-apps-within-apps/)

 - [Embed App Widget](/developers/user-guide/product-guide/widget-properties-events/advanced/embed-app)

Related Video:

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/pUY3PXct_wk?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Switching between Apps seamlessly and the Global Data Store [2:17]
