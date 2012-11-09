---
title: "transaction"
active_menu_item: developers
class_name: developers
full_width: true
---


transaction

    (fn, success, error)
   

Parameters

<table>
<tr>
<td width="193">
fn

</td>
<td width="17">

</td>
<td width="670">
transaction function

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
error callback function

</td>
</tr>
</table>

Description

    db.transaction(function(tr){
    tr.executeSql("SELECT * FROM test");
    tr.update("test_table", {data_num : 999}, "id = ?", [1]);
    tr.insert("test_table", {data_num : 333});
    tr.executeSql("SELECT * FROM test_table WHERE id=1'");
    }, function(){
    console.log("transaction completed");
    }, function(){
    console.log("error transaction");
    });
   

This function executes SQL transactions

## Example

