---
title: "deleteSessionObject()"
active_menu_item: developers
class_name: developers
full_width: true
---


**deleteSessionObject** (key)

## Parameters

<table>
<tr>
<td width="165">
{string} key

</td>
<td width="27">
</td>
<td width="688">
a key string that identifies the session object created previously with setSessionObject().

</td>
</tr>
</table>
## Description

See the [setSessionObject()](/developers/user-guide/scripting-apis/server-side-api/ssj-object/security/setsessionobject) description.

## Example

    ssj.deleteSessionObject("userID");
    ssj.deleteSessionObject("userObject");
   

## See Also

 - [Security and Server Side Javascript](/developers/user-guide/scripting-apis/server-side-scripting-overview/writing-secure-code)
 - [setSessionObject()](/developers/user-guide/scripting-apis/server-side-api/ssj-object/security/setsessionobject)
 - [getSessionObject()](/developers/user-guide/scripting-apis/server-side-api/ssj-object/security/getsessionobject)

