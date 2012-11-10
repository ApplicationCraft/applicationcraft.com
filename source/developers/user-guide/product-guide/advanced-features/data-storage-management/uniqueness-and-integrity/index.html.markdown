---
title: "Uniqueness and Integrity"
active_menu_item: developers
class_name: developers
full_width: true
---


IMPORTANT

**WE ARE DISCONTINUING FUTURE ENHANCEMENTS  FOR NATIVE DATA STORAGE. INSTEAD, WE HAVE INTRODUCED FAR SUPERIOR DATA STORAGE USING ANY CONNECTED DATABASE. See: [Server Side Data Storage](../../../../data-storage/server-side-data-storage/)**

**WE STRONGLY RECOMMEND THAT YOU DO NOT USE THESE FUNCTIONS. FUNCTIONALITY IS BEING RETAINED FOR A WHILE IN ORDER NOT TO DISRUPT EXISTING APPLICATIONS.**

Within your related apps you may want to enforce some Integrity rules. These are controlled by 2 Widget properties that can be found in the Database section of the Property bar.

 - Uniqueness -the combination of all Widgets that have their Unique property set to true will be enforced

 - Mandatory -all Widgets that have their Mandatory property set to true instructs AC to enforce these as required fields when the data is saved. You can use [checkMandatory()](../../../../scripting-apis/client-api/widget-functions/checkmandatory) to enforce validation rules that should apply only under certain circumstances and therefore should not be enforced by AC.

