---
title: "update()"
active_menu_item: developers
class_name: developers
full_width: true
---


**connectionObject.update** (tableName, fieldsObject, whereString)

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
{object} fieldsObject

</td>
<td width="18">
</td>
<td width="681">
a key:value object where key is the field name in the database and value is the value that the field should be set to.

</td>
</tr>
<tr>
<td width="181">
{object} whereString

</td>
<td width="18">
</td>
<td width="681">
a regular WHERE string. Please see below for recommendations on how to best construct this string. It can be the complete WHERE clause, but you should make use of [quote()](quote.htm) and [quoteInto()](quoteinto.htm) .

</td>
</tr>
</table>
## Return Value

## This function returns the number of rows updated.

## Description

Updates any record or records that match the whereString criteria. The dataObject passed in the parameter must be a simple key:value object as shown in the example below. The key (field name) should match a table field name exactly.

The fieldsObject value will automatically be escaped for you, so you don't need to prepare the contents of this object by using [quote()](quote.htm) manually in advance.

Even though the whereString parameter can be a regular string containing the entire WHERE clause, we highly recommend that you use [quote()](quote.htm) or [quoteInto()](quoteinto.htm) for the whereString parameter (see example below) to make your code more secure and avoid potential problems with special sql characters. So, please embrace these functions and get used to using them.

If you have complex conditions then simply build your strings using quote() or quoteInto() for the individual field components of the overall expression.

You may want to use the [client side api functions to extract data](../../../client-api/widget-data-state-manipulation/) from your widgets. [app.dataGetValues()](../../../client-api/widget-data-state-manipulation/datagetvalues) , for example, can be used to extract widget names and values into an object. If you choose widget names to match your database field names, then you can use the object returned by app.dataGetValues() and use it as your fieldsObject data without any further manipulation.

## Field Expressions

If any of your fields in the fieldsObject() contain a SQL function or arithmetic expression, then you must use new DbExpr() as [described here](../../../../data-storage/server-side-data-storage/handling-sql-expressions) .

## Example

    cObj = ssj.getConnection("abcdef12-efb9-431a-b137-87b4749f2473");
    cObj.update('customers', 
    {companyName:"Application Craft", country:"USA"}, 
    cObj.quoteInto('id=?', p.id));
     
     
   

## See Also

 - [dataGetValues()](../../../client-api/widget-data-state-manipulation/datagetvalues)

 - [dataGetStates()](../../../client-api/widget-data-state-manipulation/datagetstates)

 - [Server Side Data Storage](../../../../data-storage/server-side-data-storage/)

