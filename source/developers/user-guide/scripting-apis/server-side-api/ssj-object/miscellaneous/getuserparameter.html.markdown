---
title: "getUserParameter()"
active_menu_item: developers
class_name: developers
full_width: true
---


{object} **getUserParameter** (strParmGroup, strParm, strUserID)

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

This returns an object or variable as stored using setUserParameter.

## Description

This function is used as a part of User and [Authentication support](/developers/user-guide/product-guide/advanced-features/authentication-for-your-apps/) . It allows you to retrieve a parameter/value that is specific to the logged in user. If you are not using  AC User Management as an integrated part of your App then you should not use this function.

## Example

    twitterHandle = ssj.getUserParameter('TwitterSettings', 'TwitterID', strUserID);
   

## See Also

 - [setUserParameter()](/developers/user-guide/scripting-apis/server-side-api/ssj-object/miscellaneous/setuserparameter)

 - [Authentication for your Apps](/developers/user-guide/product-guide/advanced-features/authentication-for-your-apps/)

 - [User Management](/developers/user-guide/scripting-apis/server-side-api/sys-object/user-management/)

