---
title: "userParameterSet()"
active_menu_item: developers
class_name: developers
full_width: true
---


string **userParameterSet** (parameterGroup, paramName, value, callback)

## Parameters

<table>
<tr>
<td width="175">
{string} userParamGroup

</td>
<td width="20">
</td>
<td width="685">
the parameter group name

</td>
</tr>
<tr>
<td width="175">
{string} paramName

</td>
<td width="20">
</td>
<td width="685">
the parameter name

</td>
</tr>
<tr>
<td width="175">
{string} value

</td>
<td width="20">
</td>
<td width="685">
the value to set

</td>
</tr>
<tr>
<td width="175">
{function} callback

</td>
<td width="20">
</td>
<td width="685">
true/false

</td>
</tr>
</table>
## Description

Sets the value of a User Parameter Group to the value specified, for the currently logged on user. If the App Instance does not have a logged in user, then the call will have no effect.

## Callback

The Callback function has the format callback(error), where error is true or false.

## See Also:

 - [User Parameters](../../../product-guide/the-console/console-tabs/more/account-variables/user-parameters/)

 - [userParameterGet()](userparameterget.htm)

