---
title: "setUserParameter()"
active_menu_item: developers
class_name: developers
full_width: true
---


**setUserParameter** (strParmGroup, strParm, value, strUserID)

## Parameters

<table>
<tr>
<td width="181">
{string} strParmGroup

</td>
<td width="18">
</td>
<td width="681">
the parameter group name

</td>
</tr>
<tr>
<td width="181">
{string} strParm

</td>
<td width="18">
</td>
<td width="681">
the parameter name

</td>
</tr>
<tr>
<td width="181">
{object|value} value

</td>
<td width="18">
</td>
<td width="681">
the object or value to store to the parameter strParm

</td>
</tr>
<tr>
<td width="181">
{string} strUserId

</td>
<td width="18">
</td>
<td width="681">
the ID of the user for whom the parameter should be retrieved

</td>
</tr>
</table>

## Return Value

Nothing.

## Description

This function is used as a part of User and [Authentication support](../../../../product-guide/advanced-features/authentication-for-your-apps/) . It allows you to set a parameter/value that is specific to the logged in user. If you are not using AC User Management as an integrated part of your App then you should not use this function.

## Example

    ssj.getUserParameter('TwitterSettings', 'TwitterID', strUserHandle, strUserID);
   

## See Also

 - [getUserParameter()](getuserparameter)

 - [Authentication for your Apps](../../../../product-guide/advanced-features/authentication-for-your-apps/)

 - [User Management](../../sys-object/user-management/)

