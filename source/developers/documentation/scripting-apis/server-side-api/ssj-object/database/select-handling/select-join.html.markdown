---
title: "select().join()"
active_menu_item: developers
class_name: developers
full_width: true
---


**connectionObject.select().from().join()**

**connectionObject.select().from().joinLeft()**

**connectionObject.select().from().joinRight()**

**connectionObject.select().from().joinFull()**

All functions, except joinCross(), which only takes two parameters, are used follows.

**connectionObject.select().from().join** (strTable, strCondition, optional [columns]|objColumns)

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
{string} strCondition

</td>
<td width="18">
</td>
<td width="681">
the JOIN condition

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

**connectionObject.select().from().joinCross(** strTable, strTable **)**

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
</table>

## Description

These methods may or may not work depending on the ability of the back end database to support them.

<table>
<tr>
<td width="119">
  <strong>SSJ Method</strong>

</td>
<td width="22">
</td>
<td width="117">
  <strong>SQL</strong>

</td>
<td width="27">
</td>
<td width="943">
  <strong>Description</strong>

</td>
</tr>
<tr>
<td width="119">
  <strong>join()</strong>

</td>
<td width="22">
</td>
<td width="117">
INNER JOIN

</td>
<td width="27">
</td>
<td width="943">
This may be the most common type of join. Rows from each table are compared using the join condition you specify. The result set includes only the rows that satisfy the join condition. The result set can be empty if no rows satisfy this condition.

All RDBMS brands support this join type.

</td>
</tr>
<tr>
<td width="119">
  <strong>joinLeft()</strong>

</td>
<td width="22">
</td>
<td width="117">
LEFT JOIN

</td>
<td width="27">
</td>
<td width="943">
All rows from the left operand table are included, matching rows from the right operand table included, and the columns from the right operand table are filled with NULL if no row exists matching the left table.

All RDBMS brands support this join type.

</td>
</tr>
<tr>
<td width="119">
  <strong>joinRight()</strong>

</td>
<td width="22">
</td>
<td width="117">
RIGHT JOIN

</td>
<td width="27">
</td>
<td width="943">
Right outer join is the complement of left outer join. All rows from the right operand table are included, matching rows from the left operand table included, and the columns from the left operand table are filled with NULL's if no row exists matching the right table.

Some RDBMS brands don't support this join type, but in general any right join can be represented as a left join by reversing the order of the tables.

</td>
</tr>
<tr>
<td width="119">
  <strong>joinFull()</strong>

</td>
<td width="22">
</td>
<td width="117">
FULL JOIN

</td>
<td width="27">
</td>
<td width="943">
A full outer join is like combining a left outer join and a right outer join. All rows from both tables are included, paired with each other on the same row of the result set if they satisfy the join condition, and otherwise paired with NULL's in place of columns from the other table.

Some RDBMS brands don't support this join type.

</td>
</tr>
<tr>
<td width="119">
  <strong>joinCross()</strong>

</td>
<td width="22">
</td>
<td width="117">
CROSS JOIN

</td>
<td width="27">
</td>
<td width="943">
A cross join is a Cartesian product. Every row in the first table is matched to every row in the second table. Therefore the number of rows in the result set is equal to the product of the number of rows in each table. You can filter the result set using conditions in a WHERE clause; in this way a cross join is similar to the old SQL-89 join syntax.

The joinCross() method has no parameter to specify the join condition. Some RDBMS brands don't support this join type.

</td>
</tr>
</table>

## Examples

The following examples cover a few typical scenarios joining tables. Note the last example shows how to JOIN 3 tables.

## SELECT customers.\*, orders.\* FROM customers INNER JOIN orders ON orders.customerNumber=customers.customerNumber

    cObj = ssj.getConnection("abcdef12-aacb-47da-b35d-0c88dbdcb228");
    selectObj = cObj.select().from("customers").join("orders", "customers.customerNumber=orders.customerNumber");    
    result = cObj.exec(selectObj);
    return result; 
     
## SELECT c.\*, o.\* FROM customers AS C INNER JOIN orders AS o ON o.customerNumber=c.customerNumber
     
    cObj = ssj.getConnection("abcdef12-aacb-47da-b35d-0c88dbdcb228");
    selectObj = cObj.select().from({c:"customers"}).join({o:"orders"}, "o.customerNumber=c.customerNumber");   
    result = cObj.exec(selectObj);
    return result; 
     
## SELECT c.customerName as cCust, c.contactLastName as cName, c.customerNumber as cNum, o.\* FROM customers AS c INNER JOIN orders AS o ON o.customerNumber=c.customerNumber    
     
    cObj = ssj.getConnection("abcdef12-aacb-47da-b35d-0c88dbdcb228");
    selectObj = cObj.select().from({c:"customers"}, {cCust:"customerName", cName:"contactlastName", cNum:"customerNumber"}).join({o:"orders"}, "c.customerNumber=o.customerNumber");   
    result = cObj.exec(selectObj);
    return result; 

## SELECT orderdetails.\*, orders.\*, customers.\* FROM orderdetails INNER JOIN orders ON orderdetails.orderNumber=orders.orderNumber INNER JOIN customers ON orders.customerNumber=customers.customerNumber

    cObj = ssj.getConnection("abcdef12-aacb-47da-b35d-0c88dbdcb228");
    selectObj = cObj.select().from("orderdetails").join("orders", "orderdetails.orderNumber=orders.orderNumber").join("customers", "orders.customerNumber=customers.customerNumber");
    result = cObj.exec(selectObj);
    return result; 
   






