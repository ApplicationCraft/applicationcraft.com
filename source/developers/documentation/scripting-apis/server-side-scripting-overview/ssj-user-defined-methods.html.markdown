---
title: "Defining SSJ Methods"
active_menu_item: developers
class_name: developers
full_width: true
---


You can create your own private and public server side scripts.

![public-scripts](/img/docs/public-scripts.png)

## Private Scripts

You will always find a folder with the same name as your App located within the Server folder (Server -\> Device Hardware in the above image). This is the default folder and contains scripts that are private to your App and can be executed from client or server side calls only from the App.

You can also create your own sub folders within the Server folder by right-clicking and then adding a new folder. You should then create a virtual file which is the place to locate your own methods.

## Very Private Scripts

If you prefix a function with '\_' then this function cannot be called from Client App and can only be called from another server side script.

## Public Scripts

You should also be able to see the folder 'Server Public'. This contains scripts that are available for server side execution and are available to all Apps.

The folder structure you see here will appear the same for all developers. If you modify it, those changes will be reflected as well. You will need to include these scripts explicitly as described in the next topic.

**Important** : you should not casually rename the virtual folders or files, nor should you remove or rename functions without care. If you do so, you will effect all other users that may be referencing those functions. In a later version, we will introduce more features to protect against casual modifications.

## Server Side API Methods

Application Craft has a different API on the server side to the client API. Please refer to the [Server Side API](/developers/documentation/scripting-apis/server-side-api/) chapter.

## See Also

 - [Public Shared Scripts](/developers/documentation/scripting-apis/client-scripting-overview/public-shared-scripts)

