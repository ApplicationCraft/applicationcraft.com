---
title: "App Object"
active_menu_item: developers
class_name: developers
full_width: true
---

At various points throughout the tutorials, you will see code starting with `app`, so something like this 

    var firstName = app.getValue(txtFirstName);

What this does is to get the data contained in the Application Craft widget called `txtFirstName` and assign it in the variable called `firstName`.

It is important to understand what is going on here. 

 - `app` is a special object provided by Application Craft that extends Javascript with special methods that make it easy to interact with Application Craft widgets.
 - `getValue` is a 'method', which om this case gets the data contained within an AC widget. 
 - `txtFirstName` is a parameter that is passed to the `getValue` method.
 - `firstName` is a regular Javascript variable.

 So, wherever you see somethign starting with 'app.' you know that this is specifically related to Application Craft and its Widgets.