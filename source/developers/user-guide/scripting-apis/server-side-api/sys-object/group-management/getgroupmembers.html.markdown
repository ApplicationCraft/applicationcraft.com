---
title: "getGroupMembers()"
active_menu_item: developers
class_name: developers
full_width: true
---


**getGroupMembers** (groupId, optional memberType)

## Parameters

<table>
<tr>
<td width="183">
{string} groupId

</td>
<td width="15">
</td>
<td width="682">
the ID of the Group

</td>
</tr>
<tr>
<td width="183">
{string} memberType

</td>
<td width="15">
</td>
<td width="682">
Leave empty to get all members of the group or supply 'u' for users only or 'g' for groups only

</td>
</tr>
</table>
## Description

Gets all Users of a Group for the specified ID. If there is an error due to permissions, then an exception is thrown.

     
   

## See Also:

 - [getLatestError()](../../ssj-object/miscellaneous/getlatesterror)

