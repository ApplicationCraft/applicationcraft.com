---
title: "hash()"
active_menu_item: developers
class_name: developers
full_width: true
---


## {string} hash (strSourceString)

Parameters

<table>
<tr>
<td width="181">
{string} strSourceString

</td>
<td width="18">
</td>
<td width="681">
the parameter group name

</td>
</tr>
</table>

Return Value

String value which is the hash of strSourceString.

Description

This takes a string and produces a Hash from that string. A hash is an encrypted value than cannot be decrypted again. The most common use case is for password handling, where take a password and pass it to the hash() function to get a value back that you then store in a database.

Example

    strHashValue = ssj.hash(strUserPassword);
   

See Also:

 - [checkHash()](checkcryptblowfish.htm)

 - [md5()](md5.htm)

