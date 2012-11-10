---
title: "select().limit()"
active_menu_item: developers
class_name: developers
full_width: true
---


**connectionObject.select().from().limit** (nCount, nOffset)

## Parameters

<table>
<tr>
<td width="181">
{number} nCount

</td>
<td width="18">
</td>
<td width="681">
the maximum number of records to return

</td>
</tr>
<tr>
<td width="181">
{number} nOffset

</td>
<td width="18">
</td>
<td width="681">
the number of records to skip

</td>
</tr>
</table>
## Description

This lets you restrict the amount of data returned as well as handling data paging. Not all RDBMS handle support paging in which case it is ignored.

## Examples

If you want to retrieve the first 100 records

    cObj = ssj.getConnection("abcdef12-efb9-431a-b137-87b4749f2473");
    selectObj = cObj.select().from("customers").limit(100);
    result = cObj.exec(selectObj);
    return(result);
    cObj = ssj.getConnection("abcdef12-efb9-431a-b137-87b4749f2473");
    selectObj = cObj.select().from("customers").limit(50,100);
    result = cObj.exec(selectObj);
    return(result);
   

If you then wanted to get the next 50 records

