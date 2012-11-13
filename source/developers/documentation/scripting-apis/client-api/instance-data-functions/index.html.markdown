---
title: "Instance Data Functions"
active_menu_item: developers
class_name: developers
full_width: true
---


IMPORTANT

**WE ARE DISCONTINUING FUTURE ENHANCEMENTS  FOR NATIVE DATA STORAGE. INSTEAD, WE HAVE INTRODUCED FAR SUPERIOR DATA STORAGE USING ANY CONNECTED DATABASE. See: [Server Side Data Storage](/developers/documentation/product-guide/data-storage/server-side-data-storage/)**

**WE STRONGLY RECOMMEND THAT YOU DO NOT USE THESE FUNCTIONS. FUNCTIONALITY IS BEING RETAINED FOR A WHILE IN ORDER NOT TO DISRUPT EXISTING APPLICATIONS.**

## In This Section:

 - [instanceXxxx() callback functions](/developers/documentation/scripting-apis/client-api/instance-data-functions/instancexxxx-callback-function)
    Describes how callbacks work for many of the instanceXxxxx() functions
 - [instanceCreate()](/developers/documentation/scripting-apis/client-api/instance-data-functions/instancecreate)
    Save the current Instance as a new App Instance
 - [instanceUpdate()](/developers/documentation/scripting-apis/client-api/instance-data-functions/instancesave)
    Saves the current Instance, if the current Instance does not exist in the system a new one is created
 - [instanceDelete()](/developers/documentation/scripting-apis/client-api/instance-data-functions/instancedelete)
    Deletes the current App Instance
 - [instanceSync()](/developers/documentation/scripting-apis/client-api/instance-data-functions/instancesync)
    Forces a Grid or Repeater Container to synchronize with multiple Instances that it is connected to via a Data View
 - [instanceLoad()](/developers/documentation/scripting-apis/client-api/instance-data-functions/instanceload)
    Loads a specific Instance for the current App
 - [instanceSetRelationship()](/developers/documentation/scripting-apis/client-api/instance-data-functions/instancesetrelationship)
    Sets or breaks a relationship between Instances
 - [instanceNew()](/developers/documentation/scripting-apis/client-api/instance-data-functions/instancenew)
    Creates a new Instance and resets Widgets
 - [getInstanceData()](/developers/documentation/scripting-apis/client-api/instance-data-functions/getinstancedata)
    Gets the Instance data for the current App as an object so it can be stored externally
 - [setInstanceData()](/developers/documentation/scripting-apis/client-api/instance-data-functions/setinstancedata)
    Restore an Instance previously created with getInstanceData()

## Related Videos

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/TrfVkAavkOQ?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Data Containers Explained [4:25]

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/ezafw_TVk8s?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Creating, Updating, Deleting Instances using Javascript [4:44]

