---
title: "getLoggedUser()"
active_menu_item: developers
class_name: developers
full_width: true
---


{object} **getLoggedUser()**

## Returns

Returns information about the currently logged in user accessing the App.

    obj = ssj.getLoggedUser();
   

where obj has the following keys

 - id - the internal GUID of the User

 - name - the full name of the user (not login name)

 - type - can be 'system' or 'external'. An external user is a user that is not a full Application Craft user but has been created as an anonymous user in the user table with an email but no rights to use the AC system itself other than to access App Instances.

