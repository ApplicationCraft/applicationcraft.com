---
title: "updateGroup()"
active_menu_item: developers
class_name: developers
full_width: true
---


**updateGroup** (groupObject, optional checkOwnerRights)

## Parameters

<table>
<tr>
<td width="183">
{string} groupObject

</td>
<td width="15">
</td>
<td width="682">
The ID of the group to update

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

Updates the group with the details of the group passed in the groupObject parameter (shown below). If there is an error due to permissions, then an exception is thrown.

    {
        id: string, 
        name: string
    }
     
   

## See Also

 - [getLatestError()](/developers/user-guide/scripting-apis/server-side-api/ssj-object/miscellaneous/getlatesterror)

