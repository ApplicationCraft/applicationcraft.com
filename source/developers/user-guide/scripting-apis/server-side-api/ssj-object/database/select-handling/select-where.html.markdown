---
title: "select().where()"
active_menu_item: developers
class_name: developers
full_width: true
---


## connectionObject.select().from().where( strExpression, optional tokenValue)

Parameters

<table>
<tr>
<td width="181">
{string} strExpression

</td>
<td width="18">
</td>
<td width="681">
either a regular WHERE expression or a WHERE expression with a single token insert

</td>
</tr>
<tr>
<td width="181">
{variable} tokenInsert

</td>
<td width="18">
</td>
<td width="681">
if strExpression contains a token, then for each token inserted you require a corresponding token value

</td>
</tr>
</table>

Description

Allows you to specify a WHERE expression for your select. You can include multiple where() functions which are then ANDed together by AC.

If you were to build a regular SQL statement (which you still can if you use the [exec()](../exec.htm) method) then you may want to have a WHERE string with variable values forming a part of the clause (WHERE id=1234).

With the where() functions, you can use a '?' token and a token value (see examples below), which makes it easier and more readable.

If you want to build a more complex expression using boolean operators and parentheses then you can do this is a variety of ways.

 - build the entire string and pass into a single where() function

 - use multiple where()'s in a single statement, whereby each where() is then ANDed together

 - use the orWhere() function to achieve an OR'ing of expressions

Simple Examples

    cObj = ssj.getConnection("abcdef12-efb9-431a-b137-87b4749f2473");
    selectObj = cObj.select().from('customers').where("country='USA'");
    result = cObj.exec(selectObj);
    return(result);
    cObj = ssj.getConnection("abcdef12-efb9-431a-b137-87b4749f2473");
    selectObj = cObj.select().from('customers').where("country="+cObj.quote('USA')+"");
    result = cObj.exec(selectObj);
    return(result);
    cObj = ssj.getConnection("abcdef12-efb9-431a-b137-87b4749f2473");
    selectObj = cObj.select().from('customers').where(cObj.quoteInto("country=?", 'USA'));
    result = cObj.exec(selectObj);
    return(result);
   

Example with a Token

    cObj = ssj.getConnection("abcdef12-efb9-431a-b137-87b4749f2473");
    selectObj = cObj.select().from('customers').where('country=?', strCountry);
    result = cObj.exec(selectObj);
    return(result);
   

Compound Example 1

This example shows two where() functions which will be ANDed together

    selectObj = cObj.select().from('customers').where('age>?', minAge).where('age<?', maxAge);
   

Compound Example 2

This example shows two where() functions which will be ORed together

    selectObj = cObj.select().from('customers').where('color="blue"').orWhere('color="green"');
   

Compound Example 3

You can also create a compound expression in a single where()

    selectObj = cObj.select().from('customers').where('age>'+minAge+' AND age<'+maxAge+' AND (color="blue" or color="green")');
   

