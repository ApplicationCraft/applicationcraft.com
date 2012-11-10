---
title: "getUsersList()"
active_menu_item: developers
class_name: developers
full_width: true
---


{objArray} **getUsersList** (optional [ids])

## Parameters

<table>
<tr>
<td width="183">
{string array} ids

</td>
<td width="15">
</td>
<td width="682">
An optional array of User IDs

</td>
</tr>
</table>
## Description

This returns an object array of the below structure. If no parameter is supplied then all Users are returned.

    {
        id: userId, 
        login: login, 
        removed: null | remove date, 
        type: system or external, 
        username: frendly user name
    }
   

## See Also:

 - [getLatestError()](../../ssj-object/miscellaneous/getlatesterror)

