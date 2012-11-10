---
title: "Lists, Dropdowns, Context Menu & Mobiscroll List"
active_menu_item: developers
class_name: developers
full_width: true
---


Your scripts can read and write selections to single and multi-response Listboxes as well as Dropdown lists. For the examples shown below, let's assume we have the following data.

<table>
<tr>
<td width="58">
**Value**

</td>
<td width="24">
</td>
<td width="798">
**Label**

</td>
</tr>
<tr>
<td width="58">
UK

</td>
<td width="24">
</td>
<td width="798">
United Kingdom

</td>
</tr>
<tr>
<td width="58">
US

</td>
<td width="24">
</td>
<td width="798">
United States of America

</td>
</tr>
<tr>
<td width="58">
RU

</td>
<td width="24">
</td>
<td width="798">
Russia

</td>
</tr>
</table>

## Selection Object

All selection data from the app.getValue(ListBoxName) is returned in the following Javascript object

    {@"value":"UK",
      "label":"United Kingdom",
      "index":"1" }
    app.getValue(@WidgetName).index@//@returns@the@0-based@row@number@of@the@selected@row
     
    app.getValue(@WidgetName).value@//@returns@the@'select@value'
     
    app.getValue(@WidgetName).label@@//@returns@the@displayed@text
    app.getValue(WidgetName).length@
    //@get@the@number@of@selected@items@in@the@list@(returns@an@object@array)
    app.getValue(WidgetName)@//@returns@the@full@object@array@of@selected@row@items
    app.getValue(WidgetName)[n].index,@app.setValue(@WidgetName)[n].value,@app.setValue(@WidgetName)[n].label@
    //(where@n@is@the@index@into@the@array@of@selected@items)@gets@the@index/select@value/row@text@of@the@nth@selected@row@item.
    app.setValue(WidgetName,@{index:1})@//@sets@the@2nd@row@item,@'US'
    app.setValue(WidgetName,@{value:'US'})@//@also@sets@'US'
    app.setValue(WidgetName,@{label:'United@States@of@America'})@//@and@this@also@sets@'US'
    app.setValue(WidgetName, [{index:0},{label:'Russia'}]) // sets United Kingdom (Index 0) and Russia (by label)
    app.setValue('mobiscrollList',['Value1']);@@
    //will@set@a@single@column@mobiscroll@list@to@that@value@
     
     
    app.setValue('mobiscrollList',['Value1','AnotherValue']);@
    //if@your@list@contains@multiple@columns
   

Multi response selections are returned as an array of this object.

**Reading Selections**

For single response Listboxes, Dropdowns and Context Menu, the following are ways of getting data back for the selected row

And for multi-response lists (including Mobile CheckboxGroup)

**Writing Selections**

For single response Listboxes and Dropdowns, the following are ways of selecting a row

For multi-response Listboxes

For Mobiscroll List widget,

## See Also

 - [setValue()](../../../../client-api/widget-data-state-manipulation/refsetvalue)

 - [getValue()](../../../../client-api/widget-data-state-manipulation/refgetvalue)

