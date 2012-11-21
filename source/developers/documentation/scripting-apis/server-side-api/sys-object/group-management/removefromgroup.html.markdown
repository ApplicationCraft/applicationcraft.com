---
old_url: removefromgroup.htm
title: "removeFromGroup()"
active_menu_item: developers
class_name: developers
full_width: true
---


**removeFromGroup** (groupId, userId, optional checkOwnerRights)

## Parameters

<table>
<tr>
<td width="183">
{string} groupId

</td>
<td width="15">
</td>
<td width="682">
the ID of the Group from which the User will be removed

</td>
</tr>
<tr>
<td width="183">
{string} userId

</td>
<td width="15">
</td>
<td width="682">
the ID of the user to remove from the Group

</td>
</tr>
<tr>
<td width="183">
{bool} checkOwnerRights

</td>
<td width="15">
</td>
<td width="682">
  <a href="/developers/documentation/scripting-apis/server-side-api/sys-object/user-management/checkowneruserrights-parameter">click here</a> to see the checkOwnerRights description

</td>
</tr>
</table>
## Description

Removes a User from a Group. If there is an error due to permissions, then an exception is thrown.

     
   

## See Also

 - [getLatestError()](/developers/documentation/scripting-apis/server-side-api/ssj-object/miscellaneous/getlatesterror)

