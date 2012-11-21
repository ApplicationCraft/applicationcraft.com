---
old_url: delete.htm
title: "delete()"
active_menu_item: developers
class_name: developers
full_width: true
---


**connectionObject.delete** (tableName, whereString)

## Parameters

<table>
<tr>
<td width="181">
{string} tableName

</td>
<td width="18">
</td>
<td width="681">
the Connection ID of the Connection as found in the AC Console

</td>
</tr>
<tr>
<td width="181">
{object} whereString

</td>
<td width="18">
</td>
<td width="681">
a regular WHERE string. Please see below for recommendations on how to best construct this string. It can be the complete WHERE clause, but you should make use of quote() and quoteInto().

</td>
</tr>
</table>
## Return Value

This function returns the number of rows deleted.

## Description

Deletes a record or records that match the whereString criteria. .

Even though the whereString parameter can be a regular string containing the entire WHERE clause, we highly recommend that you use [quote()](/developers/documentation/scripting-apis/server-side-api/ssj-object/database/quote) or [quoteInto()](/developers/documentation/scripting-apis/server-side-api/ssj-object/database/quoteinto) for the whereString parameter (see example below) to make your code more secure and avoid potential problems with special sql characters. So, please embrace these functions and get used to using them.

If you have complex conditions then simply build your strings using quote() or quoteInto() for the individual field components of the overall expression.

## Example

    cObj = ssj.getConnection("abcdef12-efb9-431a-b137-87b4749f2473");
    cObj.delete('customers', cObj.quoteInto('id=?', p.id));
     
   

## See Also

 - [dataGetValues()](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/datagetvalues)
 - [dataGetStates()](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/datagetstates)
 - [Server Side Data Storage](/developers/documentation/product-guide/data-storage/server-side-data-storage/)

