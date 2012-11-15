---
title: "App Switching"
active_menu_item: developers
class_name: developers
full_width: true
---


Large Applications are best built by building several smaller AC Apps. You can chain these together seamlessly so the user does not notice the structure of the overall Application. This approach also allows you to develop Apps that can be worked on or upgraded very flexibly.

Switching between one App and another is easily accomplished using the switchApp() command.

However, when you do this, you may have data in one App that needs to be saved so when the Respondent returns to that App, the Instance data relating to it can be easily restored. Similarly, you may have a couple of values, variables or other data that you want to store temporarily across all Apps for the current session.

The Global Data Pool allows you to do exactly this with very little effort.

Saving individual values is done with the following functions

 - [setGlobalData()](/developers/documentation/scripting-apis/client-api/global-data-pool-functions/setglobaldata)
 - [getGlobalData()](/developers/documentation/scripting-apis/client-api/global-data-pool-functions/getglobaldata)
 - [clearGlobalData()](/developers/documentation/scripting-apis/client-api/global-data-pool-functions/clearglobaldata)

and saving/restoring entire App instances is done with these

 - saveGlobalState()
 - restoreGlobalState()

