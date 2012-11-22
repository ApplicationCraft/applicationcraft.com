---
old_url: assigninstance.htm
title: "assignInstance()"
active_menu_item: developers
class_name: developers
full_width: true
---


**assignInstance** (instanceId, optional roleName, optional users, optional groups, attentionLevel, cancelCondition, cancelAction, callback)

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
{string array} users

</td>
<td width="9">
</td>
<td width="643">
Array of Persons (email address of a Person in Users in the Console) . Will create a Person if it does not already exist.

</td>
</tr>
<tr>
<td width="228">
{string array} groups

</td>
<td width="9">
</td>
<td width="643">
Array of Group names or IDs (IDs can be found in the Console)

</td>
</tr>
<tr>
<td width="228">
{integer} attentionLevel

</td>
<td width="9">
</td>
<td width="643">
0 = no attention needed, 1 or higher indicates higher level of urgency

</td>
</tr>
<tr>
<td width="228">
{string} cancelCondition

</td>
<td width="9">
</td>
<td width="643">
reserved for future version (a condition, which if satisfied, will automatically cancel the assignment

</td>
</tr>
<tr>
<td width="228">
{string} cancelAction

</td>
<td width="9">
</td>
<td width="643">
reserved fro future version

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

This is the main workflow function that is used to assign an App instance to one or more Roles, Persons or Groups. If the instanceId is not specified, then the current instance is assumed.

The attentionLevel indicates the level of urgency, whereby 0 is least urgent. You do not have to use this parameter, but it can be useful in dashboards, where you want to display assignments according to urgency. You can choose any maximum value you like for your Apps. You can even use different scales of urgency for each App.

cancelCondition and cancelAction should be left undefined. We will introduce support for automated cancellation of assignments and notifications based on specific App instance conditions being met.

The callback function should be used to inspect the error status.

