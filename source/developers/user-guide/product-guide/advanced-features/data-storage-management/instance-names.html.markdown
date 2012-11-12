---
title: "Instance Names"
active_menu_item: developers
class_name: developers
full_width: true
---


IMPORTANT

**WE ARE DISCONTINUING FUTURE ENHANCEMENTS  FOR NATIVE DATA STORAGE. INSTEAD, WE HAVE INTRODUCED FAR SUPERIOR DATA STORAGE USING ANY CONNECTED DATABASE. See: [Server Side Data Storage](/developers/user-guide/product-guide/data-storage/server-side-data-storage/)**

**WE STRONGLY RECOMMEND THAT YOU DO NOT USE THESE FUNCTIONS. FUNCTIONALITY IS BEING RETAINED FOR A WHILE IN ORDER NOT TO DISRUPT EXISTING APPLICATIONS.**

An Instance Name is a piece of text that uniquely identifies each Instance. For example, if our CRM system had a 'Lead' Instance you would want to have a friendly name to identify that Instance such as “IBM, Subscription (Gold Edition)”. This string is made up of three separate fields from the App that are combined into the one Instance Name.

## Instance Name Property

This Instance Name can be set in the 'Instance Name' property in the Advanced section of the App property bar. The Instance Name can be used referenced in your Queries and so it can appear in reports. AC also uses it in various places where it is helpful to identify an individual instances.

To reference a Widget in this property, simply put the Widget name in { } brackets. So my setup might be something like

{txtCompany}, {txtSubscriptionType} ({ddEdition})

