---
title: "insert"
active_menu_item: developers
class_name: developers
full_width: true
---


insert (

    table, values, success, error)
   

Parameters

<table>
<tr>
<td width="193">
table

</td>
<td width="17">

</td>
<td width="670">
the table to insert the row into

</td>
</tr>
<tr>
<td width="193">
values

</td>
<td width="17">

</td>
<td width="670">
A mapping array of the data to insert to the database.

</td>
</tr>
<tr>
<td width="193">
success

</td>
<td width="17">

</td>
<td width="670">
success callback function.

</td>
</tr>
<tr>
<td width="193">
error

</td>
<td width="17">

</td>
<td width="670">
error callback function.

</td>
</tr>
</table>

Description

This function inserts a row into the database.

## Example

    db.insert("test", { id_user : 100, name : "Username" }, function(id){
    console.log("id="+id);
    }, function(er){
    console.log("error="+er);
    });
   

.
