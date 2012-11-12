---
title: "CRUD - Create Read Update Delete"
active_menu_item: developers
class_name: developers
full_width: true
---


IMPORTANT

**WE ARE DISCONTINUING FUTURE ENHANCEMENTS  FOR NATIVE DATA STORAGE. INSTEAD, WE HAVE INTRODUCED FAR SUPERIOR DATA STORAGE USING ANY CONNECTED DATABASE. See: [Server Side Data Storage](../../data-storage/server-side-data-storage/)**

**WE STRONGLY RECOMMEND THAT YOU DO NOT USE THESE FUNCTIONS. FUNCTIONALITY IS BEING RETAINED FOR A WHILE IN ORDER NOT TO DISRUPT EXISTING APPLICATIONS.**

AC provides special support for Apps needing to interact with instances from other Apps. Let's take a simple CRM Application, where you manage Companies and Contacts. In AC it would make sense to split your Application into 2 Apps - Companies and Contacts.

But you may want your Companies App to be able to add or modify Contacts data (and your Contacts data is defined in its own Contacts App). CRUD facilitates exactly this with very little effort. CRUD also takes care of relationships between the currently loaded App Instance and the foreign App Instance you create with CRUD operations. This means that JOIN queries can be defined showing any contacts matching the currently selected company.

You can also read/write to external databases

Please refer to [CRUD in Detail](crud-in-detail/) for an in depth description..

## **See Also**

 - [CRUD Permissions](crud-in-detail/using-ac-app-storage/crud-permissions)

