---
old_url: insert.htm
title: "insert()"
active_menu_item: developers
class_name: developers
full_width: true
---


**connectionObject.insert** (tableName, fieldsObject)

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
a key:value object where key is the field name in the database and value is the value that the fields should be set to.

</td>
</tr>
</table>
## Return Value

This function does not return a value.

## Description

Inserts a record of data into the specified database table. The dataObject passed in the parameter must be a simple key:value object as shown in the example below. The key should match a table field name exactly.

The fieldsObject value will automatically be escaped for you, so you don't need to prepare the contents of this object by using [quote()](/developers/documentation/scripting-apis/server-side-api/ssj-object/database/quote) manually in advance.

You may want to use the [client side api functions to extract data](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/) from your widgets. [app.dataGetValues()](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/datagetvalues) , for example, can be used to extract widget names and values into an object. If you choose widget names to match your database field names, then you can use the object returned by app.dataGetValues() and use it as your fieldsObject data without any further manipulation.

## Field Expressions

If any of your fields in the fieldsObject() contain a SQL function or arithmetic expression, then you must use new DbExpr() as [described here](/developers/documentation/product-guide/data-storage/server-side-data-storage/handling-sql-expressions) .

## Example

    cObj = ssj.getConnection("abcdef12-efb9-431a-b137-87b4749f2473");
    cObj.insert('customers', {companyName:"Application Craft", country:"USA"});
     
   

## See Also

 - [dataGetValues()](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/datagetvalues)
 - [dataGetStates()](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/datagetstates)
 - [Server Side Data Storage](/developers/documentation/product-guide/data-storage/server-side-data-storage/)

