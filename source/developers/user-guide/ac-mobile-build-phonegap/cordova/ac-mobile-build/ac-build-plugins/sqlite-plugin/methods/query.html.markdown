---
title: "query"
active_menu_item: developers
class_name: developers
full_width: true
---


**query**

    (table, columns, where, whereArgs, groupBy, having, orderBy, limit, success, error)
   

## Parameters

<table>
<tr>
<td width="193">
table

</td>
<td width="17">

</td>
<td width="670">
the table to query

</td>
</tr>
<tr>
<td width="193">
columns

</td>
<td width="17">

</td>
<td width="670">
A list of which columns to return. Passing null will return all columns

</td>
</tr>
<tr>
<td width="193">
where

</td>
<td width="17">

</td>
<td width="670">
the optional WHERE clause to apply when querying. Passing null will query all rows.

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
groupBy

</td>
<td width="17">

</td>
<td width="670">
A filter declaring how to group rows, formatted as an SQL GROUP BY clause (excluding the GROUP BY it\_\_self\_\_). Passing null will cause the rows to not be grouped.

</td>
</tr>
<tr>
<td width="193">
having

</td>
<td width="17">

</td>
<td width="670">
A filter to declare which row groups to include in the cursor, if row grouping is being used, formatted as an SQL HAVING clause (excluding the HAVING it\_\_self\_\_).

</td>
</tr>
<tr>
<td width="193">
orderBy

</td>
<td width="17">

</td>
<td width="670">
How to order the rows, formatted as an SQL ORDER BY clause (excluding the ORDER BY it\_\_self\_\_). Passing null will use the default sort order, which may be unordered

</td>
</tr>
<tr>
<td width="193">
limit

</td>
<td width="17">

</td>
<td width="670">
Limits the number of rows returned by the query, formatted as LIMIT clause. Passing null denotes no LIMIT clause

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

     
    res@=@{@rows@:@[@{key:@value},@{key:@value1},@{key:@value1}@]@},@//@where@key@is@field@name
     
    db.query("test",@["id",@"name"],@"count@>@?",@[100],@null,@null,@"name",@null,@function(res){@
        for (var i in res.rows){ 
            for (var key in res.rows[i]){ 
                console.log(key + "=" + res.rows[i][key] ); 
            } 
        } 
    },@function(er){
        console.log("error="+er);
    });
   

This function is used to query a given table. The success callback function returns an object in the format of

**Example**

