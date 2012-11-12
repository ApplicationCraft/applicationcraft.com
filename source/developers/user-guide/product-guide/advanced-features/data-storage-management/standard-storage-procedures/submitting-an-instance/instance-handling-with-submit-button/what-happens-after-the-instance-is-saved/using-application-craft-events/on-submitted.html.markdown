---
title: "On Submitted"
active_menu_item: developers
class_name: developers
full_width: true
---


IMPORTANT

**WE ARE DISCONTINUING FUTURE ENHANCEMENTS  FOR NATIVE DATA STORAGE. INSTEAD, WE HAVE INTRODUCED FAR SUPERIOR DATA STORAGE USING ANY CONNECTED DATABASE. See: [Server Side Data Storage](/developers/user-guide/product-guide/data-storage/server-side-data-storage/)**

**WE STRONGLY RECOMMEND THAT YOU DO NOT USE THESE FUNCTIONS. FUNCTIONALITY IS BEING RETAINED FOR A WHILE IN ORDER NOT TO DISRUPT EXISTING APPLICATIONS.**

See the following code example;

    function handler_application_onSubmitted(error, created){
        // write the parameters to the console for no good reason
        app.debugOutput("onSubmitted: error:" + error + " created:" + created);
    }
     
   

\`error\` is either null (success) or is an error object containing the details of the error

\`created\` is a boolean value: true - new application instance was created, false - instance was saved
