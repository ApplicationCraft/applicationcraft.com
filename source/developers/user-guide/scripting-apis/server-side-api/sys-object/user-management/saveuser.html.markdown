---
title: "saveUser()"
active_menu_item: developers
class_name: developers
full_width: true
---


## saveUser (userObject, optional checkOwnerRights)

Parameters

<table>
<tr>
<td width="183">
{string} userObject

</td>
<td width="15">
</td>
<td width="682">
The ID of the User to update

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

Description

Updates the user with the details of the user passed in the userObject parameter (shown below). If there is an error due to permissions, then an exception is thrown.

    {
    username: friendly name,
    login: login,
    password: pasword,
    type: 'system or external'
    }
   

See Also:

 - [getLatestError()](../../ssj-object/miscellaneous/getlatesterror)

