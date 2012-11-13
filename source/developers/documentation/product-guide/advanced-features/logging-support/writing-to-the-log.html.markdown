---
title: "Writing to the Log"
active_menu_item: developers
class_name: developers
full_width: true
---


Writing to the log is simple. You call one of the following functions

    ssj.logSimple(title, description, instanceId, errorCode, tags);
    ssj.log( {title: "", description:””, instanceID:"", errorCode:"", tags:""} );
   

Both of these do the same thing. ssj.logSimple() expects a formal parameter list. ssj.log() expects an object, wherein some or all of the available parameters can be specified.

