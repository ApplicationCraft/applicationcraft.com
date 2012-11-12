---
title: "Instance Handling with Submit Button"
active_menu_item: developers
class_name: developers
full_width: true
---


IMPORTANT

**WE ARE DISCONTINUING FUTURE ENHANCEMENTS  FOR NATIVE DATA STORAGE. INSTEAD, WE HAVE INTRODUCED FAR SUPERIOR DATA STORAGE USING ANY CONNECTED DATABASE. See: [Server Side Data Storage](/developers/user-guide/product-guide/data-storage/server-side-data-storage/)**

**WE STRONGLY RECOMMEND THAT YOU DO NOT USE THESE FUNCTIONS. FUNCTIONALITY IS BEING RETAINED FOR A WHILE IN ORDER NOT TO DISRUPT EXISTING APPLICATIONS.**

The Submit Button has an Action property in the General section. You can set this property in two ways

 - Submit Create - this will always create and store a new Instance.

 - Submit Save - this will save the current Instance unless there is no Instance loaded (in other words an App has been shown but nothing is loaded or entered into it) in which case it will it will create a new Instance and save it.

There are Javascript Events that you can then use to fine tune the behavior.

