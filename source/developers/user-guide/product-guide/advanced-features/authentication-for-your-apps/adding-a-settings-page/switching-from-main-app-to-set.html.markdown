---
title: "Switching from Main App to Settings and back"
active_menu_item: developers
class_name: developers
full_width: true
---


There are two places in our Tutorial application where we need to switch Apps.

 - Pressing the Settings button in the Main App (assumes the user is now authenticated)

 - Once in the Settings App, pressing Save or Cancel returns back to the calling App.

The scripting command that handles this is [app.switchApp(appId)](../../../../scripting-apis/client-api/app-functions/switchapp) .

If there is only one App that has the settings button on it (as is the case in our Tutorial) then within the Settings page we can specify the ID of the other (Main) App that should be called when the settings are saved or canceled. SO, when the Save button is pressed, this code executes.

![Auth\_Save](/img/docs/auth_save.zoom95.png)

For completeness, if you had several Apps that could call the Settings App, then you should use the [Global Data Pool](../../../../scripting-apis/client-api/global-data-pool-functions/index) and [app.setGlobalData()](../../../../scripting-apis/client-api/global-data-pool-functions/setglobaldata) to pass in the ID of the calling App. The Settings page can then use [app.getGlobalData()](../../../../scripting-apis/client-api/global-data-pool-functions/getglobaldata) to get the ID of the caller and use this ID to switch back to.

