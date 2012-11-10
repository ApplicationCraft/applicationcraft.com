---
title: "quote()"
active_menu_item: developers
class_name: developers
full_width: true
---


**connectionObject.quote** (strExpr)

## Parameters

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
</table>
## Return Value

Returns a string that is correctly escaped for the target database referenced by

    connectionObject
    SELECT * FROM bugs WHERE reported_by = 'O'Reilly'
    cObj = ssj.getConnection("abcdef12-efb9-431a-b137-87b4749f2473");
    sqlString = "SELECT * FROM bugs WHERE reported_by =" + cObj.quote("O'Reilly");
     
    or 
     
    strName = "O'Reilly";
    sqlString = "SELECT * FROM bugs WHERE reported_by =" + cObj.quote(strName);
    SELECT * FROM bugs WHERE reported_by = 'O\'Reilly'
    nId = 12345;
    cObj = cObj.update("customers", p.data, 'companyName=' + nId);
   

.

## Description

If your expression includes characters that are likely to cause problems for the SQL interpreter, then quote() handles the escaping for you in a way that lets you write more readable code.

Often, you will have variables that may contain such characters, so by using the quote() function, you can be sure to render these variables safe for your RDBMS's SQL engine.

For example the following statement would be invalid due to the ' appearing mid word.

You would write the following code to correctly escape any special characters

Both of the above examples would result in the following SQL for most RDBMS.

However, if you are inserting a numeric parameter value, then there is no need for escaping, so while you can still use quote() if you want, the following is also safe

By the way, when you use . [insert()](insert.htm) and . [update()](update.htm) , the second parameter is an object with key:value contents to be inserted into the fields. Each of the field values will automatically be escaped for you, so you don't need to prepare the contents of this object by using quote() manually in advance.

## See Also

 - [quoteInto()](quoteinto.htm)

