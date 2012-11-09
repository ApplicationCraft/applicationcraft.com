---
title: "checkOwnerUserRights parameter"
active_menu_item: developers
class_name: developers
full_width: true
---


This parameter is used by several User and Group functions. As a function parameter, it is usually not needed and defaults to false.

Purpose

When a function such as [createUser()](createuser.htm) or [deleteUser()](deleteuser.htm) is called, Application Craft needs to check the permissions of either the App Developer or of the person who is currently logged in to an App in order to determine whether the user is allowed to be created.

The User rights flag needs to be set for these functions to operate correctly.

The normal situation is that as long as the application developer has the rights to create a user then it is purely up to the code to ensure that [createUser()](createuser.htm) (or any of the functions that use the checkOwnerRights parameter) is called appropriately.

However, some Apps may want the actual User logged in to the App to dictate whether createUser succeeds or fails. In this case, the checkOwnerRights parameter should be set to true. The system will then check the rights of the logged on user to determine whether the User may be created or not.

