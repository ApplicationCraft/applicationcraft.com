---
title: "OBJ2JSON()"
active_menu_item: developers
class_name: developers
full_width: true
---


## string OBJ2JSON (object, optional 'format')

Parameters

<table>
<tr>
<td width="165">
{json string} object

</td>
<td width="12">
</td>
<td width="703">
the object to be converted into a JSON string

</td>
</tr>
<tr>
<td width="165">
{boolean} format

</td>
<td width="12">
</td>
<td width="703">
If true, then the returned JSON string will be indented and formatted for human readability

</td>
</tr>
</table>

Description

Converts a Javascript object into a JSON string. This is a useful if you want to send a Web Service a JSON object as well as viewing an object in a human readable format. If you set the optional second parameter to true, then AC will format the JSON string so it is nicely formatted and indented.

See Also:

 - [Data Conversion](index) Functions

