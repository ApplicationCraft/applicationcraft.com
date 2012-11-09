---
title: "Using Application Craft Events"
active_menu_item: developers
class_name: developers
full_width: true
---


IMPORTANT

## WE ARE DISCONTINUING FUTURE ENHANCEMENTS  FOR NATIVE DATA STORAGE. INSTEAD, WE HAVE INTRODUCED FAR SUPERIOR DATA STORAGE USING ANY CONNECTED DATABASE. See: [Server Side Data Storage](../../../../../../../../data-storage/server-side-data-storage/index)

## WE STRONGLY RECOMMEND THAT YOU DO NOT USE THESE FUNCTIONS. FUNCTIONALITY IS BEING RETAINED FOR A WHILE IN ORDER NOT TO DISRUPT EXISTING APPLICATIONS.

When an Instance is submitted, the following Events are triggered, these can be found in the App Events section:

 - On Pre Submit - this is called just before the actual Instance submission takes place. It allows you to perform checks and cancel the submission process if you need to.

 - On Submitted - this is called once the submission process is finished and contains possible error information

