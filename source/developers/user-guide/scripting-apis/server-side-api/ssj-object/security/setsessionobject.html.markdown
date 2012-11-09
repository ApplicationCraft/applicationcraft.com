---
title: "setSessionObject()"
active_menu_item: developers
class_name: developers
full_width: true
---


## setSessionObject (key, value)

Parameters

<table>
<tr>
<td width="165">
{string} key

</td>
<td width="27">
</td>
<td width="688">
a key string to use to identify the value

</td>
</tr>
<tr>
<td width="165">
{object|value} value

</td>
<td width="27">
</td>
<td width="688">
the object or value to store

</td>
</tr>
</table>

Description

A Session Variable is an object or value that persists across the client session. A Session Variable is created using setSessionObject(). Any subsequent function may request this value at a later stage using getSessionObject(). A Session Variable may be deleted manually during a session using deleteSessionVariable() One the session has expired, the Session Variable will be automatically deleted.

This is a useful method when you need to handle security properly. For example, if you authenticate a user in some way, you can store user credentials to a Session Object. Let's say you have written an SSJ function called 'deleteEverything'. You might want to perform special checks that the user calling this function has the appropriate Security Level. Using getSessionObjectr, you can query any details you stored in the Session Object variable first.

Example

    ssj.setSessionObject("userID", varUserID);
    ssj.setSessionObject("userObject", {userID:varUserID, userName:strUserName});
   

See Also:

 - [Security and Server Side Javascript](../../../server-side-scripting-overview/writing-secure-code.htm)

 - [getSessionObject()](getsessionobject.htm)

 - [deleteSessionObject()](deletesessionobject.htm)

