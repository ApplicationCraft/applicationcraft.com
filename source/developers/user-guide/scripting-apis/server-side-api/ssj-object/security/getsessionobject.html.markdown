---
title: "getSessionObject()"
active_menu_item: developers
class_name: developers
full_width: true
---


{value|object} **getSessionObject** (key)

## Parameters

<table>
<tr>
<td width="165">
{string} key

</td>
<td width="27">
</td>
<td width="688">
a key string that identifies the variable created previously with setSessionObject().

</td>
</tr>
</table>
## Returns

Either a simple variable value or an object, whichever was written using setSessionObject().

## Description

See the [setSessionObject()](setsessionobject.htm) description.

## Example

    strUserID = ssj.getSessionObject("userID");
    objUserDetails = ssj.getSessionObject("userObject");
   

## See Also

 - [Security and Server Side Javascript](../../../server-side-scripting-overview/writing-secure-code)

 - [setSessionObject()](setsessionobject.htm)

 - [deleteSessionObject()](deletesessionobject.htm)

