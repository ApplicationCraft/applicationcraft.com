---
old_url: cookie_storage.htm
title: "Cookie Storage"
active_menu_item: developers
class_name: developers
full_width: true
---


A cookie is a variable that is stored on the user's computer. An entire cookie cannot exceed 4KB in size and so the actual size available to data storage is slightly less.

You need to first convert your data into text before writing the cookie data. As your data may actually be in a javascript object or an array or even an array of javascript objects, the function that comes to your rescue is JSON.stringify(). You can then call [app.cookie()](/developers/documentation/scripting-apis/client-api/others/cookie) to write the cookie.

    jsonText = JSON.stringify(mySmallList);
    app.cookie("List", "jsonText");

You can then call [app.cookie()](/developers/documentation/scripting-apis/client-api/others/cookie) to read data from your cookie and load it into your array, object or variable.

    jsonText = app.cookie("List");
    mySmallList = JSON.parse(jsonText);
   


