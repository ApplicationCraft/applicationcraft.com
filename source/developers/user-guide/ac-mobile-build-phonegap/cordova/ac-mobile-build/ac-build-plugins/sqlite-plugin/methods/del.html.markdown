---
title: "del"
active_menu_item: developers
class_name: developers
full_width: true
---


**del**

    (table, where, whereArgs, success, error)
   

## Parameters

<table>
<tr>
<td width="193">
table

</td>
<td width="17">

</td>
<td width="670">
the table to delete the row of data

</td>
</tr>
<tr>
<td width="193">
where

</td>
<td width="17">

</td>
<td width="670">
the optional WHERE clause to apply when deleting. Passing null will delete all rows.

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

This function is used to delete rows from  the database

     
    db.del("test", "id = ?", ["1"], function(count){ 
        console.log("count="+count); 
    }, function(er){
        console.log("error="+er);
    });
     
   

## **Example**

