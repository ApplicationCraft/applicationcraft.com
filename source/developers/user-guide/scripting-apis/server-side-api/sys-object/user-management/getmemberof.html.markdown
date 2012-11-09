---
title: "getMemberOf()"
active_menu_item: developers
class_name: developers
full_width: true
---


## {objArray} getMemberOf (strUserId)

Parameters

<table>
<tr>
<td width="183">
{string} strUserId

</td>
<td width="15">
</td>
<td width="682">
the UID of the User

</td>
</tr>
</table>

Description

An array of the following object type is returned, indicating which AC Groups the specified User belongs to.

    {
    id_group:group_ID,
    name: friendly_name
    };
   

See Also:

 - [getLatestError()](../../ssj-object/miscellaneous/getlatesterror)

