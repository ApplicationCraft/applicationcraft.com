---
title: "select().orWhere()"
active_menu_item: developers
class_name: developers
full_width: true
---


## connectionObject.select().from().orWhere (strExpression, optional tokenValue)

Parameters

<table>
<tr>
<td width="181">
{string} strExpression

</td>
<td width="18">
</td>
<td width="681">
either a regular WHERE expression or a WHERE expression with a single token insert

</td>
</tr>
<tr>
<td width="181">
{variable} tokenInsert

</td>
<td width="18">
</td>
<td width="681">
if strExpression contains a token, then this contains the corresponding value

</td>
</tr>
</table>

Description

Allows you to specify a WHERE expression for your select that is ORed with the previous where() or orWhere() functions.

Refer to the [where()](select-where) section for an example.

