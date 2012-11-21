---
old_url: select_from.htm
title: "select().from()"
active_menu_item: developers
class_name: developers
full_width: true
---


**connectionObject.select().from(** strTable, optional [columns]|objColumns **)**

## Parameters

<table>
<tr>
<td width="181">
{string} strTable

</td>
<td width="18">
</td>
<td width="681">
the table name to JOIN to the from() or join()s

</td>
</tr>
<tr>
<td width="181">
{string} [columns]

</td>
<td width="18">
</td>
<td width="681">
this optional parameter can contain an array of fields to be included; if you do not specify the third parameter, then all fields will be included.

</td>
</tr>
<tr>
<td width="181">
{object} objColumns

</td>
<td width="18">
</td>
<td width="681">
if you specify an object, you can replace the field names

       {cCust:"customerName", cName:"contactlastName", cNum:"customerNumber"}
      

;if you do not specify the third parameter, then all fields will be included

</td>
</tr>
</table>

## Returns

See select().

## Description

This function allows you to specify the table and, optionally, the fields. If you want to select fields from multiple tables you will use select().from() for your first table and then use [select().join()](/developers/documentation/scripting-apis/server-side-api/ssj-object/database/select-handling/select-join) for subsequent tables.

## Escaping Expressions

If your expression includes characters that are likely to cause problems for the SQL interpreter, then refer to the [quote()](/developers/documentation/scripting-apis/server-side-api/ssj-object/database/quote) and [quoteInto()](/developers/documentation/scripting-apis/server-side-api/ssj-object/database/quoteinto) methods. These handle the escaping for you in a way that lets you write more readable code.

For example the following statement would be invalid due to the ' appearing mid word.

    SELECT * FROM bugs WHERE reported_by = 'O'Reilly'
     
## Field Expressions

If any of your fields in the fieldsObject() contain a SQL function or arithmetic expression, then you must use new DbExpr() as [described here](/developers/documentation/product-guide/data-storage/server-side-data-storage/handling-sql-expressions) .

## Examples

The following examples show various SQL statements and the equivalent SSJ statement. All examples assume that cObj has been created and that  cObj.exec() and return() statements will run afterwards, so
     
    cObj = ssj.getConnection("abcdef12-efb9-431a-b137-87b4749f2473");
    selectObj = cObj.select().from("customers")
    result = cObj.exec(selectObj);
    return(result);

##Simple : SELECT \* FROM customers     
    selectObj = cObj.select().from("customers");

## Specify Field Name : SELECT companyName, country FROM customers     
    selectObj = cObj.select().from("customers", ['companyName', 'country']);

## Correlation Names : SELECT p."companyName", p."country" FROM "customers" AS p
    cObj.select().from({p: 'customers'},['companyName', 'country'])

## Alias : SELECT p."companyName" as name, p."country" FROM "customers" AS p
    cObj.select().from({p: 'customers'},{name: 'companyName', country: 'country'})

## Expression 1 : SELECT p."companyName" as name, LOWER(country) FROM "customers" AS p
    cObj.select().from({p: 'customers'},{name: 'companyName', country: new DbExpr('LOWER(p.country)')})

## Expression 2 : SELECT p."product\_id", p.cost \* 1.08 AS cost\_plus\_tax  FROM "products" AS p
    cObj.select().from({p: 'products'},{product_id: 'product_id', cost_plus_tax: new DbExpr('p.cost * 1.08')})
