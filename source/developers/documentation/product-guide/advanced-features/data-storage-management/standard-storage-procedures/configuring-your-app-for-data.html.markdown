---
title: "Configuring your App for Data Storage"
active_menu_item: developers
class_name: developers
full_width: true
---


IMPORTANT

**WE ARE DISCONTINUING FUTURE ENHANCEMENTS  FOR NATIVE DATA STORAGE. INSTEAD, WE HAVE INTRODUCED FAR SUPERIOR DATA STORAGE USING ANY CONNECTED DATABASE. See: [Server Side Data Storage](/developers/documentation/product-guide/data-storage/server-side-data-storage/)**

**WE STRONGLY RECOMMEND THAT YOU DO NOT USE THESE FUNCTIONS. FUNCTIONALITY IS BEING RETAINED FOR A WHILE IN ORDER NOT TO DISRUPT EXISTING APPLICATIONS.**

By default, an App will not store any data at all. For Apps that are concerned with reporting, this is a good thing. If you have text input fields, for example, that are used as filters rather than data collection, you don’t want these to be stored unnecessarily.

## Telling the App to store data

As soon as you decide that there are fields on your App that you want to store, you set the Storage property of the App. Select the Application properties (press the button at the top of the property pane or click outside the page).

![authentication-app-storage](/img/docs/authentication-app-storage.png)

The possible settings are:

 - None - Do not store data at all (neither CDB nor RDB)

 - Save Instances - this will store CDB data only. You will not be able to access data as a query in any way but Instances can be saved and loaded.

 - Save Instances and add to Reporting - this stores data in the CDB and also in the RDB for reporting and access by Application Craft Widgets.

## Telling Fields to store data

By default, Widgets will not store data, so if you want them to, you need to enable this specifically. Again, the reason for this is to not store unnecessary information and to improve performance.

To enable data storage for a Widget, you set the Store in Database property in the Database section of the Widget to true.

Related Video:

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/wEHzzhCmE04?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Enabling Data Storage for an App [4:11]

