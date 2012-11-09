---
title: "getUserById()"
active_menu_item: developers
class_name: developers
full_width: true
---


## {object} getUserById (userId])

Parameters

<table>
<tr>
<td width="183">
{string} userId

</td>
<td width="15">
</td>
<td width="682">
The User ID to search for

</td>
</tr>
</table>

Description

This returns an object of the format shown below describing the User

    {
    id: userId,
    login: login,
    removed: null | remove date,
    type: system or external,
    username: frendly user name
    }
   

See Also:

 - [getLatestError()](../../ssj-object/miscellaneous/getlatesterror)

