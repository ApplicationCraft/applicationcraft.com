---
title: "On Instance Save"
active_menu_item: developers
class_name: developers
full_width: true
---


The server is about to save the App instance. You can perform logic on the server side at this point and then decide whether to prevent the instance being updated by returning false from the event.

    function handler_server_onInstanceSave(user, instance){
    }
   

 - user - an object identifying the user that is currently accessing the App and triggering the event.

 - instance -  this is the javascript object containing the instance content

