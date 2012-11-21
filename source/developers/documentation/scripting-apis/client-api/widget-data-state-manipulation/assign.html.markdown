---
old_url: assign.htm
title: "assign()"
active_menu_item: developers
class_name: developers
full_width: true
---


**assign** (widget, acExpression)

## Parameters

<table>
<tr>
<td width="199">
  { <a href="/developers/documentation/scripting-apis/client-api/objects-titbits/widget-list-parameters">wlist</a> } widgetName

</td>
<td width="17">
</td>
<td width="664">
Widget identifier - string, string array, object or object array

</td>
</tr>
<tr>
<td width="199">
{string} acExpression

</td>
<td width="17">
</td>
<td width="664">
An Application Craft expression as described below

</td>
</tr>
</table>
## Description

This takes an Application Expression and assigns it to the Widget specified in targetWidgetID. The expression can contain a mixture of literal text, User Data, and Widget Data.  Note, this is not a Javascript expression. We simply replace anything in square brackets with App related data. Everything else stays the same.

You should also note that spaces and other characters are combined literally, meaning that you do not need to concatenate strings to make one larger string.

## Example

The following example will assign something like "ACME Widgets Inc. (Michael Caine)"

    app.assign("lblSummary", "[Form.Widgets.txtCompany] ([Form.Widgets.txtFirstName] [Form.Widgets.txtLastName])");
   

## Expression Tokens

You can also use Expression tokens to pull in data from other Objects. Below are some examples of valid tokens.

<table>
<tr>
<td width="136">
[Instance.Id]

</td>
<td width="22">
</td>
<td width="722">
The GUID of the current Instance (App data record)

</td>
</tr>
<tr>
<td width="136">
[Session.Id]

</td>
<td width="22">
</td>
<td width="722">
The current Session ID

</td>
</tr>
<tr>
<td width="136">
[User.Id]

</td>
<td width="22">
</td>
<td width="722">
The internal UID of the User accessing the running App instance

</td>
</tr>
<tr>
<td width="136">
[User.Login]

</td>
<td width="22">
</td>
<td width="722">
The Login Name of the User accessing the running App instance

</td>
</tr>
<tr>
<td width="136">
[User.Name]

</td>
<td width="22">
</td>
<td width="722">
The full user name of the User accessing the running App instance

</td>
</tr>
<tr>
<td width="136">
[User.Type]

</td>
<td width="22">
</td>
<td width="722">
</td>
</tr>
<tr>
<td width="136">
[User.Parameters.parameter group.parameter name]

</td>
<td width="22">
</td>
<td width="722">
AC allows Parameter Groups and within them Parameters to be defined. For example, you might want to store some profile information about Employee Details. These can be configured within the Admin section of the Console by an Administrator. You can then access these within the Assign Expression. You can also read these and change them using the userParameterSet() and userParameterGet() functions.

</td>
</tr>
</table>
## See Also

 - [Reading & Writing Simple Widgets](/developers/documentation/scripting-apis/client-scripting-overview/scripting-with-javascript/widget-reading-writing/widget-values-reading-writing-user-entered-data/widgetsimple-widgets)

## Related Videos

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/VTypeamWf5E?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Setting and Getting Widget Data  [3:08]
