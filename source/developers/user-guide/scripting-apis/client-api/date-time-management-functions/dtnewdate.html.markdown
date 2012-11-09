---
title: "dtNewDate()"
active_menu_item: developers
class_name: developers
full_width: true
---


{object} dtNewDate ([locale|rtz|utc],arg)

Parameters

<table>
<tr>
<td width="133">
[locale|rtz|utc]

</td>
<td width="20">
</td>
<td width="750">
enter to create the new date object in this format. If no parameters are supplied, then the current date/time is set to current locale

</td>
</tr>
<tr>
<td width="133">
arg

</td>
<td width="20">
</td>
<td width="750">
Allows you to enter standard date arguments

</td>
</tr>
</table>

Description

Creates a new date object in the specified format. If no parameters are supplied, then the current date/time is set to current locale. If only 1 parameter is specified, then the current date/time is selected and based on that parameter.

Example

    dObj=app.dtNewDate('locale', 2015, 7, 14, 8, 2,30);  // to set the Date Object to Fri Aug 14 2015 08:02:30
    dObj=app.dtNewDate('locale');  // to set the Date Object to the current locale date/time
    dObj=app.dtNewDate('locale', new Date(2012,8,12));  // to set the Date Object to Wed Sep 12 2012 00:00:00
   

See Also:

 - [dtadd()](dtadd)

 - [dtDifference()](dtdifference)

 - [dtAdjust()](dtadjust)

 - [dtDateToString()](dtdatetostring)

