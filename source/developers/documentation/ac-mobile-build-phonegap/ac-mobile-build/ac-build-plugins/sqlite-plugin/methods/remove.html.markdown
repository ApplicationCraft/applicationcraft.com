---
old_url: remove.htm
title: "remove"
active_menu_item: developers
class_name: developers
full_width: true
---


**remove**(dbName, success, error)
   

## Parameters

<table>
<tr>
<td width="193">
dbName

</td>
<td width="17">

</td>
<td width="670">
database name

</td>
</tr>
<tr>
<td width="193">
success

</td>
<td width="17">

</td>
<td width="670">
success callback function

</td>
</tr>
<tr>
<td width="193">
error

</td>
<td width="17">

</td>
<td width="670">
error callback function, first argument - object:

obj.status - 0 - database not exist, otherwise - other error

obj.message - error message

</td>
</tr>
</table>
## Description

This function is used to remove a database.

## Example   
     
    PGSQLitePlugin.remove("testdb.sqlite3", function(){
        console.log("database was removed");
    }, function(err){
        console.log("error remove database::err.message=" + err.message + "::err.status="+err.status);
    });
   


