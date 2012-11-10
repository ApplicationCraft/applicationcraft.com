---
title: "Including Public Server Side Scripts"
active_menu_item: developers
class_name: developers
full_width: true
---


If you want to access a public server side script, you will need to reference this from within your App.

![public-scripts](/img/docs/public-scripts.png)

Server scripts, which are private to the App, are automatically included.

In the image above, if you want to include 'Date Functions', then you would need to add the following line of code to your Server side code. Be sure to add the include statement somewhere within the 'Server' folder. Adding it into App Scripts is Client Side and so will not work for server side includes. Although you can include the same code several times, we recommend putting in the main app folder (in the above image, this would be Server -\> Device Hardware).

    include('Max's@Public@Functions|Date@Functions');
   

As you can see, if your virtual file is within a virtual folder path, you need to specify the path with the | character as a delimiter.

