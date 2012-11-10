---
title: "userParameterGet()"
active_menu_item: developers
class_name: developers
full_width: true
---


string **userParameterGet** (userParamGroup, paramName)

## Parameters

<table>
<tr>
<td width="168">
{string} userParamGroup

</td>
<td width="15">
</td>
<td width="697">
the parameter group name

</td>
</tr>
<tr>
<td width="168">
{string} paramname

</td>
<td width="15">
</td>
<td width="697">
the parameter name

</td>
</tr>
</table>
## Description

Gets the value of a User Parameter for the currently logged on user. You need to specify the Parameter Group and a valid Parameter Item within that Group. If the App Instance does not have a logged in user, then the call will have no effect.

## See A l so

 - [User Parameters](../../../product-guide/the-console/console-tabs/more/account-variables/user-parameters/)

 - [userParameterSet()](userparameterset.htm)

