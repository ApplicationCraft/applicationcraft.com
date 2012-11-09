---
title: "On Pre Submit"
active_menu_item: developers
class_name: developers
full_width: true
---


IMPORTANT

## WE ARE DISCONTINUING FUTURE ENHANCEMENTS  FOR NATIVE DATA STORAGE. INSTEAD, WE HAVE INTRODUCED FAR SUPERIOR DATA STORAGE USING ANY CONNECTED DATABASE. See: [Server Side Data Storage](../../../../../../../../data-storage/server-side-data-storage/index.htm)

## WE STRONGLY RECOMMEND THAT YOU DO NOT USE THESE FUNCTIONS. FUNCTIONALITY IS BEING RETAINED FOR A WHILE IN ORDER NOT TO DISRUPT EXISTING APPLICATIONS.

See the following javascript code example;

    function handler_application_onPreSubmit(savingOptions){
    // perform some validation or checks here
    if(myCondition==false) {
    savingOptions.abortSaving = true;
    }
    }
   

This shows how the savingOptions object is passed into the event. If you wish to cancel the submission process, you would set abortSaving to true.

