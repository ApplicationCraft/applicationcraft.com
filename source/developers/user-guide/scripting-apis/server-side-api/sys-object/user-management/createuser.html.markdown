---
title: "createUser()"
active_menu_item: developers
class_name: developers
full_width: true
---


**createUser** (objUser, optional checkOwnerRights)

## Parameters

<table>
<tr>
<td width="183">
{object} objUser

</td>
<td width="15">
</td>
<td width="682">
an object containing information about the user to be created

</td>
</tr>
<tr>
<td width="183">
{bool} checkOwnerRights

</td>
<td width="15">
</td>
<td width="682">
[click here](checkowneruserrights-parameter) to see the checkOwnerRights description

</td>
</tr>
</table>
## Description

Creates a new User in the AC system. You should pass in the following object

    {
        username: friendly name, 
        login: login, 
        password: pasword, 
        type: 'system or external'
    }
     
   

If there is an error creating the user due to permissions, then an exception is thrown.

## See Also

 - [getLatestError()](../../ssj-object/miscellaneous/getlatesterror)

