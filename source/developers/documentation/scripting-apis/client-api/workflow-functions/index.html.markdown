---
title: "Workflow Functions"
active_menu_item: developers
class_name: developers
full_width: true
---


**Important** : refer to the [Workflow](/developers/documentation/product-guide/advanced-features/workflow/) section, which gives you a general overview.

These functions allow you to assign data instances to Roles, Persons and Groups. It also handles Notifications, Reminders and cancellations of these.

<table>
<tr>
<td width="230">
  <a href="/developers/documentation/scripting-apis/client-api/workflow-functions/assigntorole">assignToRole()</a>

</td>
<td width="13">
</td>
<td width="637">
  Assigns a Person or Group to a Role for a specified App (can also be <a href="/developers/documentation/product-guide/advanced-features/workflow/roles-stages) ">done manually in the Console</a>

</td>
</tr>
<tr>
<td width="230">
  <a href="/developers/documentation/scripting-apis/client-api/workflow-functions/unassignfromrole">unassignFromRole()</a>

</td>
<td width="13">
</td>
<td width="637">
Removes a Person or Group from a Role  for a specified App

</td>
</tr>
<tr>
<td width="230">
  <a href="/developers/documentation/scripting-apis/client-api/workflow-functions/currentuserrole">currentUserRole()</a>

</td>
<td width="13">
</td>
<td width="637">
Returns the Role (if there is one) of the currently logged in User / Person

</td>
</tr>
<tr>
<td width="230">
  <a href="/developers/documentation/scripting-apis/client-api/workflow-functions/getassignedroles">getAssignedRoles()</a>

</td>
<td width="13">
</td>
<td width="637">
Returns a list of all Roles that are currently assigned to a specified instance

</td>
</tr>
<tr>
<td width="230">
  <a href="/developers/documentation/scripting-apis/client-api/workflow-functions/setstage">setStage()</a>

</td>
<td width="13">
</td>
<td width="637">
Changes the Stage for the currently loaded Instance

</td>
</tr>
<tr>
<td width="230">
  <a href="/developers/documentation/scripting-apis/client-api/workflow-functions/getstage">getStage()</a>

</td>
<td width="13">
</td>
<td width="637">
Enables you to get the current stage of the currently loaded instance

</td>
</tr>
<tr>
<td width="230">
  <a href="/developers/documentation/scripting-apis/client-api/workflow-functions/assigninstance">assignInstance()</a>

</td>
<td width="13">
</td>
<td width="637">
  Assigns the specified instance id to a Role, Person or Group and assigns it an <a href="/developers/documentation/product-guide/advanced-features/workflow/attention-levels">Attention Level</a> value.

</td>
</tr>
<tr>
<td width="230">
  <a href="/developers/documentation/scripting-apis/client-api/workflow-functions/cancelassignments">cancelAssignments()</a>

</td>
<td width="13">
</td>
<td width="637">
Cancels an existing assignment for a specified instance for a Role, Group or Person

</td>
</tr>
<tr>
<td width="230">
  <a href="/developers/documentation/scripting-apis/client-api/workflow-functions/notify">notify()</a>

</td>
<td width="13">
</td>
<td width="637">
Sends a notification (typically email) to one or more Role, Group or Person and allows you to specify reminders notifications

</td>
</tr>
<tr>
<td width="230">
  <a href="/developers/documentation/scripting-apis/client-api/workflow-functions/cancelnotificationsforinstance">cancelNotifications()</a>

</td>
<td width="13">
</td>
<td width="637">
Cancels any outstanding repeat notifications queued (reminders, typically)

</td>
</tr>


</table>
