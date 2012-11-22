---
old_url: on_instance_create.htm
title: "On Instance Create"
active_menu_item: developers
class_name: developers
full_width: true
---


The server is about to create a new App instance. You can perform logic on the server side at this point and then decide whether to prevent the instance being created by returning false from the event.

    function handler_server_onInstanceCreate(user, instance){
    }
   

 - user - an object identifying the user that is currently accessing the App and triggering the instanceCreate().

 - instance - this is the javascript object containing the instance content

