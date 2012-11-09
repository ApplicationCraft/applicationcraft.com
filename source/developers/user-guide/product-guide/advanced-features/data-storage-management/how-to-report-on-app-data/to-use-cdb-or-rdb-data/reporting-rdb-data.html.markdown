---
title: "Reporting (RDB) Data"
active_menu_item: developers
class_name: developers
full_width: true
---


IMPORTANT

## WE ARE DISCONTINUING FUTURE ENHANCEMENTS  FOR NATIVE DATA STORAGE. INSTEAD, WE HAVE INTRODUCED FAR SUPERIOR DATA STORAGE USING ANY CONNECTED DATABASE. See: [Server Side Data Storage](../../../../../data-storage/server-side-data-storage/index.htm)

## WE STRONGLY RECOMMEND THAT YOU DO NOT USE THESE FUNCTIONS. FUNCTIONALITY IS BEING RETAINED FOR A WHILE IN ORDER NOT TO DISRUPT EXISTING APPLICATIONS.

If you set the App’s Storage property to Save Instances and add to Reporting, you will also be able to report on individual App fields.

You will see entries called ‘Basic Data', 'Full Data' and if you have Grid, List Boxes or Image Mapping with multi selections allowed, you will also see a separate entry for those fields.

These entries can be dragged to the Tables section on the right hand side.

The main Full Data item contains all simple data fields within the entire App with the exception of Grids, List Boxes or Image Mapping (where multiple selections are allowed)

The reason for this is that Grids, ListBox and Image mapping (where multiple selections are allowed) are complex data types that result in a one-to-many relationship between the App and these fields. For this reason, these widgets are displayed as separate table items below the Full Data item.

## See Also:

 - [Instance (CDB) Data](instance_cdb_data.htm)

