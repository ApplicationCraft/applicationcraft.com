---
title: "Correct App Permissions for Authentication"
active_menu_item: developers
class_name: developers
full_width: true
---


By default, an App is assigned permissions for the group Everyone to access the App. This means that no authentication is required. The App that handles the authentication have access permissions for the Group 'Everyone' (in most cases).

If you have a Dedicated Authentication App Strategy (as discussed in the previous topic) then you need to leave the App responsible for authentication set to Everyone but all other Apps should be modified as follows

 - all Apps except the authentication App should have their App permissions set to Authenticated Users

 - the Application property 'User Access' is set to 'Authenticated Users' for all Apps except the authentication App

 - the Application property 'Login Form' points to the Signin App for all Apps except the authentication App

## App Permissions

When you set the 'User Access' property to 'Authenticated Users', Application Craft will automatically remove Everyone and set Authenticated Users in the Application Permissions section of the Console.

You can also manually set the permissions by selecting the App in the Console and then, on the right hand side, remove the Group 'Everyone' (if it is there) and add 'Authenticated Users' by pressing the Add button beneath the permissions list.

![permissions-authenticated-users](/img/docs/permissions-authenticated-users.zoom50.png)

## Application Settings

To correctly set up the Apps that require authentication before they are accessed, open the App in the designer and then press the Application Properties button at the top of the properties column. You will find the User Access and Login Form properties near the top of the property bar.

![authentication-app-properties](/img/docs/authentication-app-properties.png)

