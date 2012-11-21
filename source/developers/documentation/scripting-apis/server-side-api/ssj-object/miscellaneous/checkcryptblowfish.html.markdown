---
old_url: checkcryptblowfish.htm
title: "checkHash()"
active_menu_item: developers
class_name: developers
full_width: true
---


{bool} **checkHash** (strHashString, strCompareString)

## Parameters

<table>
<tr>
<td width="181">
{string} strHashString

</td>
<td width="18">
</td>
<td width="681">
the hash string (probably a password that is stored as a hash in a database)

</td>
</tr>
<tr>
<td width="181">
{string} strCompareString

</td>
<td width="18">
</td>
<td width="681">
a string value that you want to compare check for a match against the hash

</td>
</tr>
</table>

## Return Value

True if there is a match.

## Description

Checks an unhashed string, probably a password, and compares it with the hash value supplied, which was probably stored in a database field. If the function returns true then password (if it is a password you are checking) is matched.

## Example

    if(ssj.checkHash(strHash, strUserPassword) {
        // User password is ok
    }
   

## See Also

 - [hash()](/developers/documentation/scripting-apis/server-side-api/ssj-object/miscellaneous/cryptblowfish)
 - [md5()](/developers/documentation/scripting-apis/server-side-api/ssj-object/miscellaneous/md5)

