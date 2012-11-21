---
old_url: executesql.htm
title: "executeSQL"
active_menu_item: developers
class_name: developers
full_width: true
---


**executeSql**(sql, success, error)
   

## Parameters

<table>
<tr>
<td width="193">
sql

</td>
<td width="17">

</td>
<td width="670">
sql query

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
## Description

This function runs the provided SQL. If it is a SELECT statement an object is returned in the format of 

    res = { rows : [ {key: value}, {key: value1}, {key: value1} ] }, // where key is field name
## Example     
    db.executeSql("CREATE TABLE IF NOT EXISTS test (testID TEXT NOT NULL PRIMARY KEY, fio TEXT NOT NULL, adress TEXT)", function(){
        console.log( "table test was created" );
    }, function(err){
        console.log("error creating table test::" + err);
    });
   





