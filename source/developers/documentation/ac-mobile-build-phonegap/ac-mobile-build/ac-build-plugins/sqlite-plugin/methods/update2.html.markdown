---
old_url: update2.htm
title: "update"
active_menu_item: developers
class_name: developers
full_width: true
---


**update**(table, values, where, whereArgs, success, error)
     
   

## Parameters

<table>
<tr>
<td width="193">
table

</td>
<td width="17">

</td>
<td width="670">
the table to update the row of data

</td>
</tr>
<tr>
<td width="193">
values

</td>
<td width="17">

</td>
<td width="670">
A mapping array of the data to update.

</td>
</tr>
<tr>
<td width="193">
where

</td>
<td width="17">

</td>
<td width="670">
the optional WHERE clause to apply when updating. Passing null will update all rows.

</td>
</tr>
<tr>
<td width="193">
whereArgs

</td>
<td width="17">

</td>
<td width="670">
You may include ?s in where, which will be replaced by the values from whereArgs, in order that they appear in the where. The values will be bound as Strings.

</td>
</tr>
<tr>
<td width="193">
success

</td>
<td width="17">

</td>
<td width="670">
success callback function. The first parameter returns the number of rows affected

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
## Description

This function is used to update rows in the database

## Example     
    db.update("test", {name : "New Username" }, "id = ?", [1], function(count){ 
        console.log("count="+count); 
    }, function(er){
        console.log("error="+er);
    });
     
   



