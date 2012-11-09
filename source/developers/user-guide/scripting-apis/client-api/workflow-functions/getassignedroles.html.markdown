---
title: "getAssignedRoles()"
active_menu_item: developers
class_name: developers
full_width: true
---


## getAssignedRoles ()

Parameters

<table>
<tr>
<td width="228">
{string} instanceId

</td>
<td width="9">
</td>
<td width="643">
The instanceID for which the roles should be retrieved. If empty, assumes the currently loaded instance.

</td>
</tr>
<tr>
<td width="228">
{function} callback(error, data)

</td>
<td width="9">
</td>
<td width="643">
Callback function when system has completed execution

</td>
</tr>
</table>

Description

This retrieves a list of all Roles assigned to the current instance. If you do not specify and instance id then it will assume the currently loaded instance. If there is none (brand new instance) then it will return an error in the callback.

Callback Function

The callback function should be provided in order to check for errors. The error parameter indicates success (false) or failure (true).

If execution was successful, data will contain an array of objects with elements

 - id\_role - the Role GUID

 - name - the name of the Role

 - title - the title

