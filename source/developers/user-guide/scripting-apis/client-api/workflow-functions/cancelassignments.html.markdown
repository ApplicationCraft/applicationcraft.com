---
title: "cancelAssignments()"
active_menu_item: developers
class_name: developers
full_width: true
---


**cancelAssignments** (instanceId, optional roleName, optional users, optional groups, callback)

## Parameters

<table>
<tr>
<td width="228">
{string} instanceId

</td>
<td width="9">
</td>
<td width="643">
App ID as found in app properties or the Console

</td>
</tr>
<tr>
<td width="228">
{string} roleName

</td>
<td width="9">
</td>
<td width="643">
Name of the Role

</td>
</tr>
<tr>
<td width="228">
{string|array} users

</td>
<td width="9">
</td>
<td width="643">
String or array of Persons (email address of a Person in Users in the Console) . Will create a Person if it does not already exist.

</td>
</tr>
<tr>
<td width="228">
{string|array} groups

</td>
<td width="9">
</td>
<td width="643">
String or array of Group names or IDs (IDs can be found in the Console)

</td>
</tr>
<tr>
<td width="228">
{function} callback(error, data)

</td>
<td width="9">
</td>
<td width="643">
Called when AC has completed execution

</td>
</tr>
</table>
## Description

This function is used to remove Assignments to Persons, Groups or Roles.  If you leave the roleName, users and group parameters empty, then all Assignments for the specified Instance will be removed.

The callback function should be used to inspect the error status.

