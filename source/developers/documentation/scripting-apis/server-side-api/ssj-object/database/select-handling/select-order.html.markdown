---
title: "select().order()"
active_menu_item: developers
class_name: developers
full_width: true
---


**connectionObject.select().from().order** ([orderByFields])

## Parameters

<table>
<tr>
<td width="213">
{string|[string]} orderByFields

</td>
<td width="17">
</td>
<td width="650">
specify the field or fields; use an array for more than one field

</td>
</tr>
</table>
## Description

You are able to supply the ORDER BY clause by specifying one of more fields (use an array of strings for multiple fields) in the orderByFields parameter. You can also specify more than one ORDER BY field by using .order() multiple times as shown in an example below.

Note you can include ASC or DESC directives by appending ASC or DESC to the field name.

## Simple Example

    cObj = ssj.getConnection("abcdef12-efb9-431a-b137-87b4749f2473");
    selectObj = cObj.select().from("customers").order('country');
    result = cObj.exec(selectObj);
    return(result);


## 2 Fields Example
    selectObj = cObj.select().from("customers").order(['country', 'state DESC']);
## Alternative 2 Fields Example
    selectObj = cObj.select().from("customers").order('country').order('state DESC');
   



