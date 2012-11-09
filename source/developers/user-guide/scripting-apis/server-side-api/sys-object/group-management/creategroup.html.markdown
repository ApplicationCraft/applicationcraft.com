---
title: "createGroup()"
active_menu_item: developers
class_name: developers
full_width: true
---


## createGroup (objGroup, optional checkOwnerRights)

Parameters

<table>
<tr>
<td width="183">
{object} objGroup

</td>
<td width="15">
</td>
<td width="682">
an object containing information about the Group to be created

</td>
</tr>
<tr>
<td width="183">
{bool} checkOwnerRights

</td>
<td width="15">
</td>
<td width="682">
[click here](../user-management/checkowneruserrights-parameter) to see the checkOwnerRights description

</td>
</tr>
</table>

Description

Creates a new group in the AC system. You should pass in the following object

    {
    name: group_name
    }
   

If there is an error creating the Group due to permissions, then an exception is thrown.

See Also:

 - [getLatestError()](../../ssj-object/miscellaneous/getlatesterror)

