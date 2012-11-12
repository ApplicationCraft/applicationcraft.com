---
title: "Workflow Functions"
active_menu_item: developers
class_name: developers
full_width: true
---


**Important** : refer to the [Workflow](/developers/user-guide/product-guide/advanced-features/workflow/) section, which gives you a general overview.

These functions allow you to assign data instances to Roles, Persons and Groups. It also handles Notifications, Reminders and cancellations of these.

<table>
<tr>
<td width="230">
[assignToRole()](/developers/user-guide/scripting-apis/client-api/workflow-functions/assigntorole)

</td>
<td width="13">
</td>
<td width="637">
Assigns a Person or Group to a Role for a specified App (can also be [done manually in the Console](/developers/user-guide/product-guide/advanced-features/workflow/roles-stages) )

</td>
</tr>
<tr>
<td width="230">
[unassignFromRole()](/developers/user-guide/scripting-apis/client-api/workflow-functions/unassignfromrole)

</td>
<td width="13">
</td>
<td width="637">
Removes a Person or Group from a Role  for a specified App

</td>
</tr>
<tr>
<td width="230">
[currentUserRole()](/developers/user-guide/scripting-apis/client-api/workflow-functions/currentuserrole)

</td>
<td width="13">
</td>
<td width="637">
Returns the Role (if there is one) of the currently logged in User / Person

</td>
</tr>
<tr>
<td width="230">
[getAssignedRoles()](/developers/user-guide/scripting-apis/client-api/workflow-functions/getassignedroles)

</td>
<td width="13">
</td>
<td width="637">
Returns a list of all Roles that are currently assigned to a specified instance

</td>
</tr>
<tr>
<td width="230">
[setStage()](/developers/user-guide/scripting-apis/client-api/workflow-functions/setstage)

</td>
<td width="13">
</td>
<td width="637">
Changes the Stage for the currently loaded Instance

</td>
</tr>
<tr>
<td width="230">
[getStage()](/developers/user-guide/scripting-apis/client-api/workflow-functions/getstage)

</td>
<td width="13">
</td>
<td width="637">
Enables you to get the current stage of the currently loaded instance

</td>
</tr>
<tr>
<td width="230">
[assignInstance()](/developers/user-guide/scripting-apis/client-api/workflow-functions/assigninstance)

</td>
<td width="13">
</td>
<td width="637">
Assigns the specified instance id to a Role, Person or Group and assigns it an [Attention Level](/developers/user-guide/product-guide/advanced-features/workflow/attention-levels) value.

</td>
</tr>
<tr>
<td width="230">
[cancelAssignments()](/developers/user-guide/scripting-apis/client-api/workflow-functions/cancelassignments)

</td>
<td width="13">
</td>
<td width="637">
Cancels an existing assignment for a specified instance for a Role, Group or Person

</td>
</tr>
<tr>
<td width="230">
[notify()](/developers/user-guide/scripting-apis/client-api/workflow-functions/notify)

</td>
<td width="13">
</td>
<td width="637">
Sends a notification (typically email) to one or more Role, Group or Person and allows you to specify reminders notifications

</td>
</tr>
<tr>
<td width="230">
[cancelNotifications()](/developers/user-guide/scripting-apis/client-api/workflow-functions/cancelnotificationsforinstance)

</td>
<td width="13">
</td>
<td width="637">
Cancels any outstanding repeat notifications queued (reminders, typically)

</td>
</tr>
<tr>
<td width="230">
</td>
<td width="13">
</td>
<td width="637">
</td>
</tr>
<tr>
<td width="230">
</td>
<td width="13">
</td>
<td width="637">
</td>
</tr>
</table>
