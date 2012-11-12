---
title: "How is Data Stored"
active_menu_item: developers
class_name: developers
full_width: true
---


IMPORTANT

**WE ARE DISCONTINUING FUTURE ENHANCEMENTS  FOR NATIVE DATA STORAGE. INSTEAD, WE HAVE INTRODUCED FAR SUPERIOR DATA STORAGE USING ANY CONNECTED DATABASE. See: [Server Side Data Storage](/developers/user-guide/product-guide/data-storage/server-side-data-storage/)**

**WE STRONGLY RECOMMEND THAT YOU DO NOT USE THESE FUNCTIONS. FUNCTIONALITY IS BEING RETAINED FOR A WHILE IN ORDER NOT TO DISRUPT EXISTING APPLICATIONS.**

Application Craft needs to take several things into account when handling data storage, but performance and scalability are at the forefront. For this reason we store data in two different ways:

 - Core Database - App Instance data is stored in JSON format for very fast saving and loading.

 - Reporting Database - A separate database that stores data in key-value pairs for fast analysis and aggregation

Using the App property 'Store in Database' you can control whether data is stored in the CDB, CDB and RDB or not at all.
