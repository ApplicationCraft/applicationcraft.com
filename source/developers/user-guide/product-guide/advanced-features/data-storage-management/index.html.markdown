---
title: "Data Storage & Management"
active_menu_item: developers
class_name: developers
full_width: true
---


IMPORTANT

**WE ARE DISCONTINUING FUTURE ENHANCEMENTS  FOR NATIVE DATA STORAGE. INSTEAD, WE HAVE INTRODUCED FAR SUPERIOR DATA STORAGE USING ANY CONNECTED DATABASE. See: [Server Side Data Storage](/developers/user-guide/product-guide/data-storage/server-side-data-storage/)**

**WE STRONGLY RECOMMEND THAT YOU DO NOT USE THESE FUNCTIONS. FUNCTIONALITY IS BEING RETAINED FOR A WHILE IN ORDER NOT TO DISRUPT EXISTING APPLICATIONS.**

Application Craft offers a configuration free storage engine that allows your Apps to capture and store field data. It is not intended to power Enterprise scale applications, although every effort has been made to make it scale to a healthy level.

The key features are

 - You don't need to set up or manage any database or tables, this is done fully automatically

 - Any field capable of collecting data has a 'Store in Database' property, which you can enable

 - A field can be Unique and this is enforced at the database level

 - A field can be Mandatory as this is also enforced at the database level

 - From each App, you can define relationships to other Apps. This allows you to create 'relational apps' which can be queried, just as regular tables can be JOINed.

 - App data can be populated into Widgets using Data Integration features

 - There is client side API support for Create, Read, Update and Delete functions (CRUD). These client side functions are insecure, however, and so we have introduced Server Side Javascript support and these functions are available on a server side API that is be secure

