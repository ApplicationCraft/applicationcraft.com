---
title: "DATE2DB()"
active_menu_item: developers
class_name: developers
full_width: true
---


object **DATE2DB** (dateObject)

## Parameters

<table>
<tr>
<td width="169">
{object} dateObject

</td>
<td width="11">
</td>
<td width="700">
a Javascript date object

</td>
</tr>
</table>
## Description

This function converts a Javascript date object into a string that is compatible with the AC database. The most common scenario for this is where you want to apply a filter based on a date or date range. In this case, you need to make sure that you supply the filter expression in the correct format for the database.

The database stores App Instance dates in the format 'YYYY-MM-DD hh:mm:ss' and DATE2DB() simply converts into this string format.

## See Also

 - [Data Conversion]() Functions

 - [Setting Filters](../data-view-functions/modifying-data-widgets-with-scripts/filters)

