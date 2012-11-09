---
title: "quoteInto()"
active_menu_item: developers
class_name: developers
full_width: true
---


## connectionObject.quoteInto (strExpr, value)

Parameters

<table>
<tr>
<td width="181">
{string} strExpr

</td>
<td width="18">
</td>
<td width="681">
a string expression to process

</td>
</tr>
<tr>
<td width="181">
{variable} value

</td>
<td width="18">
</td>
<td width="681">
a value to insert into the '?' token within strExpr

</td>
</tr>
</table>

Return Value

Returns a string that is correctly escaped for the target database referenced by

    connectionObject
   

.

Description

Often, your code gets a value and then needs to insert it into a SQL statement at a specific location while at the same time escaping special characters (see the quote() method). For example, take the following SQL statement

    SELECT * FROM bugs WHERE reported_by = variableName
    SELECT * FROM bugs WHERE reported_by = 'O'Reilly'
    strName = "O'Reilly";
    cObj = ssj.getConnection("abcdef12-efb9-431a-b137-87b4749f2473");
    sqlString = cObj.quoteInto("SELECT * FROM bugs WHERE reported_by =?", strName);
    cObj.exec(sqlString);
    SELECT * FROM bugs WHERE reported_by = 'O\'Reilly'
    nId = 12345;
    cObj = cObj.update("customers", p.data, 'companyName=' + nId);
    strName = "O'Reilly";
    cObj = cObj.update("customers", p.data, cObj.quoteInto('companyName=?', strName));
    cObj.update("customers", p.data,
    [cObj.quoteInto('companyName=?', p.companyname),cObj.quoteInto('region=?'), p.region)]        ]
    );
   

And assume that the variableName could contain special characters such as the ' character. The following SQL is invalid as the ' in the O'Reilly confuses the SQL parser because it also has single quotes surrounding the name.

quoteInto() allows you to solve both the variableName issue and the escaping issue in one go.

In the above code, sqlString ends up being

which can then be safely passed to the cObj.exec() method.

However, if you are inserting a numeric parameter value, then there is no need for escaping, so while you can still use quote() if you want, the following is also safe

Any function that includes a WHERE type clause as a parameter (select(), update() and delete()) should really use quoteInto() for that parameter,

Multiple WHERE type clauses are handled as an array, and all elements will be joined with 'AND'

See Also:

 - [quote()](quote.htm)

