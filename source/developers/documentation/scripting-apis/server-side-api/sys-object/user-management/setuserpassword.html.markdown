---
old_url: setuserpassword.htm
title: "setUserPassword()"
active_menu_item: developers
class_name: developers
full_width: true
---


**setUserPassword** (userId, userPassword, optional checkOwnerRights)

## Parameters

<table>
<tr>
<td width="183">
{string} userId

</td>
<td width="15">
</td>
<td width="682">
The ID of the User

</td>
</tr>
<tr>
<td width="183">
{string} userPassword

</td>
<td width="15">
</td>
<td width="682">
The new password

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

Changes the password of the specified user. If there is an error due to permissions, then an exception is thrown.

     
   

## See Also

 - [getLatestError()](/developers/documentation/scripting-apis/server-side-api/ssj-object/miscellaneous/getlatesterror)

