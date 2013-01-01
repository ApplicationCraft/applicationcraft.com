---
old_url: objectquery.htm
title: "parse.objects.query()"
active_menu_item: developers
class_name: developers
full_width: true
---


**parse.objects.query()(** (className, query) **)**

## Parameters

<table>
<tr>
<td width="181">
{string} className

</td>
<td width="18">
</td>
<td width="681">
The Parse.com Class you have created

</td>
</tr>
<tr>
<td width="181">
{object} query
</td>
<td width="18">
</td>
<td width="681">
query is a JSON object (all fields are optional):
{
    where:   // object
    order:   // string
    limit:   // number
    skip:    // number
    include: // string
    count:   // 1 to set
}
</td>
</tr>
</table>


##See Also
- [Parse Queries](developers/documentation/product-guide/advanced-features/parse/objects/parse-queries)