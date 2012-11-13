---
title: "deleteUser()"
active_menu_item: developers
class_name: developers
full_width: true
---


**deleteUser** (userId, optional checkOwnerRights)

## Parameters

<table>
<tr>
<td width="183">
{string} userID

</td>
<td width="15">
</td>
<td width="682">
The ID of the User to delete

</td>
</tr>
<tr>
<td width="183">
{bool} checkOwnerRights

</td>
<td width="15">
</td>
<td width="682">
  <a href="/developers/user-guide/scripting-apis/server-side-api/sys-object/user-management/checkowneruserrights-parameter">click here</a> to see the checkOwnerRights description

</td>
</tr>
</table>
## Description

Deletes the user with the specified User ID. If there is an error due to permissions, then an exception is thrown.

     
   

## See Also

 - [getLatestError()](/developers/user-guide/scripting-apis/server-side-api/ssj-object/miscellaneous/getlatesterror)

