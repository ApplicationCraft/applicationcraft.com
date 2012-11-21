---
old_url: using_the_same_query_multiple_.htm
title: "Using the same Query Multiple Times in an App"
active_menu_item: developers
class_name: developers
full_width: true
---


There are two very good reasons why you will sometimes define several Views for your App that all reference the exact same Query.

## Filtering

As described in the previous section, each View maintains its own Drill Down and Global Filters. If you want different Widgets to operate different drill downs then you should have more than one View pointing to the same Query.

## Grid Data

Another reason that you will need to take this approach is to take into account the way that Application Craft processes the Grid Widget's data. Take the example of an App that has two text input fields First Name, Last Name and a Data Grid with one text field column called Beers. People filling in data will enter their name and then which Beers they drink, one new row for each Beer they drink.

Let's assume you have entered the following data

<table>
<tr>
<td width="97">
  <strong>First Name</strong>

</td>
<td width="17">
</td>
<td width="94">
  <strong>Last Name</strong>

</td>
<td width="24">
</td>
<td width="928">
  <strong>Beer</strong>

</td>
</tr>
<tr>
<td width="97">
Julian

</td>
<td width="17">
</td>
<td width="94">
Stewart

</td>
<td width="24">
</td>
<td width="928">
Becks

</td>
</tr>
<tr>
<td width="97">
</td>
<td width="17">
</td>
<td width="94">
</td>
<td width="24">
</td>
<td width="928">
Heineken

</td>
</tr>
<tr>
<td width="97">
</td>
<td width="17">
</td>
<td width="94">
</td>
<td width="24">
</td>
<td width="928">
Coors

</td>
</tr>
<tr>
<td width="97">
Mark

</td>
<td width="17">
</td>
<td width="94">
Smith

</td>
<td width="24">
</td>
<td width="928">
Grolsch

</td>
</tr>
<tr>
<td width="97">
</td>
<td width="17">
</td>
<td width="94">
</td>
<td width="24">
</td>
<td width="928">
Miller Lite

</td>
</tr>
</table>

If you include all 3 fields in my View, you will get the output you see above. But you wanted to see a report that only showed First name and Last Name, then you would only expect to get two rows of data in your report, not five.

The way to deal with this is to have one View where you Data grid column fields and another View only using the First Name and Last Name in the selected View fields.

![View\_example](/img/docs/view_example.zoom60.png)

The screenshot above shows how you select the Output Fields that you want to use in your Data View. If you include Data Grid fields, you will get duplicate records for your non Grid Data.

