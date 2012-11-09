---
title: "exec()"
active_menu_item: developers
class_name: developers
full_width: true
---


## connectionObject.exec (strSqlString)

Parameters

<table>
<tr>
<td width="181">
{string} strSqlString

</td>
<td width="18">
</td>
<td width="681">
the Connection ID of the Connection as found in the AC Console

</td>
</tr>
</table>

Returns

The result set from the SQL execution as an array, where each array element corresponds to a single item in the result set.

Description

This is used in the following common scenarios

 - executing SELECT statements that were prepared with the cObj.select() method (refer to the [Select Handling](select_handling.htm) section for an overview of how AC handles SELECT statements)

 - creating your own SQL Statement that you want to pass directly through to the database for execution

 - calling stored procedures

Example Select Statement Execution

    cObj = ssj.getConnection("abcdef12-efb9-431a-b137-87b4749f2473");
    selectObj = cObj.select().from("customers").where("id=?", p.id);
    cObj.exec(selectObj);
    selectObj = cObj.select().from("customers").order("companyName");
    cObj.exec(selectObj);
   

Example Stored Procedure Call

Below is a very simple MySQL stored procedure definition that returns the total number of customers.

    CREATE PROCEDURE sp_numCustomers()
    BEGIN
    SELECT count(*) from customers;
    END
    cObj = ssj.getConnection("abcdef12-efb9-431a-b137-87b4749f2473");
    return(cObj.exec("CALL sp_numCustomers()"));
   

The following code would call this stored procedure from an SSJ script

See Also:

 - [dataGetValues()](../../../client-api/widget-data-state-manipulation/datagetvalues.htm)

 - [dataGetStates()](../../../client-api/widget-data-state-manipulation/datagetstates.htm)

 - [Server Side Data Storage](../../../../data-storage/server-side-data-storage/index.htm)

Related Video:

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/qY9M8bP9b70?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Coding up client/server side javascript calls [7:24]
