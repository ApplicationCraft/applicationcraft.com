---
old_url: accessing_user_parameters_from.htm
title: "Reading User Parameters from an App"
active_menu_item: developers
class_name: developers
full_width: true
---


Within an App, you can access a User Parameter from scripting. This provides a very easy way of setting an App Widget's value to a user parameter. If you wanted to set a text Widget to contain the User Name of the currently logged on user, you might use this simple script when the App loads, for example.

    app.setData("txtUserName", app.userParameterGet(UserIdentifier, Item)); 
     
   

