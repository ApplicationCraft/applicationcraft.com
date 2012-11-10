---
title: "Core Database (CDB)"
active_menu_item: developers
class_name: developers
full_width: true
---


IMPORTANT

**WE ARE DISCONTINUING FUTURE ENHANCEMENTS  FOR NATIVE DATA STORAGE. INSTEAD, WE HAVE INTRODUCED FAR SUPERIOR DATA STORAGE USING ANY CONNECTED DATABASE. See: [Server Side Data Storage](../../../../data-storage/server-side-data-storage/)**

**WE STRONGLY RECOMMEND THAT YOU DO NOT USE THESE FUNCTIONS. FUNCTIONALITY IS BEING RETAINED FOR A WHILE IN ORDER NOT TO DISRUPT EXISTING APPLICATIONS.**

Your AC system uses one single database to drive Apps and basic App Instance data storage. It doesn’t matter how many Apps you create and how many Instances are stored within each App, all basic data lives in this database.

This core system has to be fast and responsive at all times and so App Instances are stored as JSON objects in the CDB. This means that data can be loaded and saved very quickly without the need for data to be parsed at all. It also means that AC does not have to create dedicated tables for individual Apps.

