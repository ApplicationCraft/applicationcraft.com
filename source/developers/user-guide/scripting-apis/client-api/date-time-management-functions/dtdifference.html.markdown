---
title: "dtDifference()"
active_menu_item: developers
class_name: developers
full_width: true
---


dtDifference (dObj1, dObj2,DateUnit);

Parameters

<table>
<tr>
<td width="133">
dObj1/dObj2

</td>
<td width="20">
</td>
<td width="750">
The Date Objects you wish to work with

</td>
</tr>
<tr>
<td width="133">
DateUnit

</td>
<td width="20">
</td>
<td width="750">
Define the Date unit: (Y=Year, M=Month, W=Week, D=Day, X=WorkingDays, H=Hour, S=Second)

</td>
</tr>
</table>

Description

Returns the difference between the specified date objects in the specified time units. X=working days.

Example

    dObj1=app.dtNewDate('locale', 2015, 7, 14, 8, 2,30);   // set Date Object(1) to Fri Aug 14 2015 08:02:30
    dObj2=app.dtNewDate('locale', new Date(2012,8,12,8,2,30));  // set Date Object(2) to Wed Sep 12 2012 08:02:30
    dDiff=app.dtDifference(dObj1,dObj2,'D'); // Return the number of days difference (1066 days) between the 2 date objects)
   

See Also:

 - [dtNewDate()](dtnewdate)

 - [dtadd()](dtadd)

 - [dtAdjust()](dtadjust)

 - [dtDateToString()](dtdatetostring)

