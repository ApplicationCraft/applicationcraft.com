---
title: "search()"
active_menu_item: developers
class_name: developers
full_width: true
---


res **search** (searchString, optional where, optional start, optional caseSensitive)

## Parameters

<table>
<tr>
<td width="199">
{string} searchString

</td>
<td width="9">
</td>
<td width="672">
The string to search for

</td>
</tr>
<tr>
<td width="199">
{wlist}{int array} where

</td>
<td width="9">
</td>
<td width="672">
Repeater expects an array of Widget names or objects. Grid expects an array of column Ids. If no parameter is supplied, then it will search in all Widgets or columns.

</td>
</tr>
<tr>
<td width="199">
{boolean} start

</td>
<td width="9">
</td>
<td width="672">
The string offset within the 'where' field where the search should start. Defaults to 0.

</td>
</tr>
<tr>
<td width="199">
{boolean} caseSensitive

</td>
<td width="9">
</td>
<td width="672">
Defaults to false

</td>
</tr>
<tr>
<td width="199">
{boolean} exactMatch

</td>
<td width="9">
</td>
<td width="672">
Indicates whether there should be an exact match of the string. Defaults to false.

</td>
</tr>
</table>
## Description

This function looks for a text string within a Grid or Repeater container and returns the result as an array of the objects found. You can specify which column or Repeater Container Widget to search in and arrays can also be passed in if you want to search in more than one location.Omitting the 'where' parameter will results in all Widgets / columns being searched.

In some cases you may want to search within a widget or column starting at a specific offsets within it. The 'start' parameter allows you to specify this. Case sensitivity and exact matches can also be specified.

## **Example**

    function handler_actionBtn_onClick(mouseev){
    var res = app.w("grdtable").search("text");
    }
     
   

