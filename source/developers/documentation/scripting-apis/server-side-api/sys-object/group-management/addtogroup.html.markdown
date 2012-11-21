---
old_url: addtogroup.htm
title: "addToGroup()"
active_menu_item: developers
class_name: developers
full_width: true
---


**addToGroup** (groupId, userId, optional checkOwnerRights)

## Parameters

<table>
<tr>
<td width="183">
{string} groupId

</td>
<td width="15">
</td>
<td width="682">
the ID of the Group to add a user to

</td>
</tr>
<tr>
<td width="183">
{string} userId

</td>
<td width="15">
</td>
<td width="682">
the ID of the user to add to the Group

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

Adds a User to a Group. If there is an error due to permissions, then an exception is thrown.

     
   

## See Also

 - [getLatestError()](/developers/documentation/scripting-apis/server-side-api/ssj-object/miscellaneous/getlatesterror)

