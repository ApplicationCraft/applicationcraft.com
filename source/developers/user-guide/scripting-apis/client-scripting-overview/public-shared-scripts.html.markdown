---
title: "Public Shared Scripts"
active_menu_item: developers
class_name: developers
full_width: true
---


If you are in the Code Editor, you will see on the left hand panel a folder called 'Public Scripts'. This contains a folder structure that is common to all developers. Currently, any developer may modify this structure and add  new virtual folders and files. You can paste common, shared code into any virtual file within a folder and that is then accessible to all developers from all Apps.

**Important** : you should not casually rename the virtual folders or files, nor should you remove or rename functions without care. If you do so, you will effect all other users that may be referencing those functions. In a later version, we will introduce more features to protect against casual modifications.

![public-scripts](/img/docs/public-scripts.png)

In the image above, if you want to include 'sad functions', then you would need to add the following line of code to your App Scripts somewhere. Although you can include the same code several times, we recommend putting in the main app scripts folder (in the above image, this would be App Scripts -\> Device Hardware).

    include('sad@functions');
    include('virtual@folder@name|another@folder@perhaps|virtual@file@name');
   

If your virtual file is within a virtual folder path, you need to specify the path with the | character as a delimiter, so

## See Also:

 - [Defining SSJ Methods](../server-side-scripting-overview/ssj-user-defined-methods)

