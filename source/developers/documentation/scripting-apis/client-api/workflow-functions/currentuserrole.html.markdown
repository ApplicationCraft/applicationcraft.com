---
old_url: currentuserrole.htm
title: "currentUserRole()"
active_menu_item: developers
class_name: developers
full_width: true
---


objUser **currentUserRole** ()

## Parameters

<table>
<tr>
<td width="228">
{object} objUser

</td>
<td width="9">
</td>
<td width="643">
User object for the currently authenticated user

</td>
</tr>
</table>
## Description

When a user accesses an instance, if it is Workflow related, then it will almost always be as a system user. If, in an email, someone clicks on a link, then they will already have a system account, even if it is the basic account level indicating that they are only app instance users.

The only common situation where an instance will be opened without the user being authenticated is if you post an App in a web site or an email and clicking on that link creates a brand new instance. At that point, the user can be completely anonymous.

If there is no role, then all fields will be null.

## objUser Object

This object has the elements

 - id - the Person GUID as created by the system

 - name - the Person's name

 - role - the role of this person with respect to the currently loaded instance

