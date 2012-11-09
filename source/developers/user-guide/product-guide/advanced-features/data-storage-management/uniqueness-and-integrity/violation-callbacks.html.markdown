---
title: "Violation Callbacks"
active_menu_item: developers
class_name: developers
full_width: true
---


IMPORTANT

## WE ARE DISCONTINUING FUTURE ENHANCEMENTS  FOR NATIVE DATA STORAGE. INSTEAD, WE HAVE INTRODUCED FAR SUPERIOR DATA STORAGE USING ANY CONNECTED DATABASE. See: [Server Side Data Storage](../../../../data-storage/server-side-data-storage/index)

## WE STRONGLY RECOMMEND THAT YOU DO NOT USE THESE FUNCTIONS. FUNCTIONALITY IS BEING RETAINED FOR A WHILE IN ORDER NOT TO DISRUPT EXISTING APPLICATIONS.

If there is an Integrity Violation, then the script that caused the violation can inspect the error status in a callback function.

Let's say you use the instanceCreate() function to add a new Instance to an App. This is a simple script that shows how you can handle the error.

    app.instanceCreate("dataContainer1", undefined, function(errorObj, statusObj) {
    if (error === null) {
    // Worked OK, so do nothing or say congratulations
    } else {
    // Failed, so display messages etc.
    }
    });
   

The same applies to [instanceUpdate()](../../../../scripting-apis/client-api/instance-data-functions/instancesave) .

