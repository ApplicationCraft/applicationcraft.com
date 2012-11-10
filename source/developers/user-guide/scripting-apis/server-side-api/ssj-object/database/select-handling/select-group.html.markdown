---
title: "select().group()"
active_menu_item: developers
class_name: developers
full_width: true
---


**connectionObject.select().from().group** ([groupByFields])

## Parameters

<table>
<tr>
<td width="213">
{string|[string]} groupByFields

</td>
<td width="17">
</td>
<td width="650">
specify the field or fields; use an array for more than one field

</td>
</tr>
</table>
## Description

You are able to supply the GROUP BY clause by specifying one of more fields (use an array of strings for multiple fields) in the groupByFields parameter. You can also specify more than one GROUP BY field by using .group() multiple times.

## Simple Example

    cObj@=@ssj.getConnection("abcdef12-efb9-431a-b137-87b4749f2473");
    selectObj@=@cObj.select().from("customers").group('country');
    result@=@cObj.exec(selectObj);
    return(result);
    selectObj@=@cObj.select().from("customers").group(['country',@'state']);
    selectObj@=@cObj.select().from("customers").group('country').group('state');
   

## 2 Fields Example

## Alternative 2 Fields Example

