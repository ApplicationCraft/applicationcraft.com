---
title: "On Instance Load"
active_menu_item: developers
class_name: developers
full_width: true
---


The server is about to load a new App instance and send it to the client. You can perform logic on the server side at this point and then decide whether to prevent the instance being loaded by returning false from the event.

    function handler_server_onInstanceLoad(user, instance){
    }
   

 - user - an object identifying the user that is currently accessing the App and triggering the event

 - instance -  this is the javascript object containing the instance content

