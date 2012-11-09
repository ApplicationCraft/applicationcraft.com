---
title: "dtAdjust()"
active_menu_item: developers
class_name: developers
full_width: true
---


dtAdjust (dObj, [locale|rtz|utc|n]);

Parameters

<table>
<tr>
<td width="133">
dObj

</td>
<td width="20">
</td>
<td width="750">
The Date Object you wish to work with

</td>
</tr>
<tr>
<td width="133">
[locale|rtz|utc|n]

</td>
<td width="20">
</td>
<td width="750">
Enter the relative time zone to adjust to.  n indicates a relative offset to UTC time

</td>
</tr>
</table>

Description

Adjusts a Date Object to the specified time zone. The absolute time remains the same.

Example

    dnew=app.dtNewDate('locale');
    adj=app.dtAdjust(dnew, 'utc');  // adjust date object 'dnew' from local time to UTC time
   

See Also:

 - [dtNewDate()](dtnewdate.htm)

 - [dtadd()](dtadd.htm)

 - [dtDifference()](dtdifference.htm)

 - [dtDateToString()](dtdatetostring.htm)

