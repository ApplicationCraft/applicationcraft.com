---
title: "notify()"
active_menu_item: developers
class_name: developers
full_width: true
---


## notify (notifierId, optional users, optional groups, notificationDetails, optional time, timeType , optional numRepeats, optional repeatInterval, callback)

Parameters

<table>
<tr>
<td width="228">
{string} notifierId

</td>
<td width="9">
</td>
<td width="643">
ID of the [Notifier](../../../product-guide/advanced-features/workflow/notification-server.htm) as defined in the Console

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
{object} notificationDetails

</td>
<td width="9">
</td>
<td width="643">
The notification object containing a subject and message etc.

</td>
</tr>
<tr>
<td width="228">
{time | integer} time

</td>
<td width="9">
</td>
<td width="643">
If a time object, this indicates the absolute date and time that the notification should be sent. If an integer, then indicates the time (in seconds) relative to 'now' that the notification should be sent. If left empty, then the notification is sent immediately.

</td>
</tr>
<tr>
<td width="228">
{string} timeType

</td>
<td width="9">
</td>
<td width="643">
REMOVE ROW ONCE UPDATED

</td>
</tr>
<tr>
<td width="228">
{integer} numRepeats(error, data)

</td>
<td width="9">
</td>
<td width="643">
The number of times to repeat this notification (enables you to schedule reminders); see cancelNotifications For Instance()

</td>
</tr>
<tr>
<td width="228">
{integer} repeatInterval

</td>
<td width="9">
</td>
<td width="643">
If numRepeats\>0., then this is the delay, in seconds, between notification repeats.

</td>
</tr>
<tr>
<td width="228">
{function} callback

</td>
<td width="9">
</td>
<td width="643">
Called when the function has succeeded or failed.

</td>
</tr>
</table>

Description

This is a key workflow function and instructs the system to send notifications to Roles, Persons or Groups. You can also schedule reminders using the numRepeats and repeatInterval parameters.

If no time parameter is specified, then the notification will be sent immediately.

A 'Notifier' is defined in the Console in the Notifiers tab. Notifiers are explained in the Notification Server section. You can copy and paste the ID of this Server and use it in the notifierId parameter.

