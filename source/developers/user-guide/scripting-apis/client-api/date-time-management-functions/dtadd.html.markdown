---
title: "dtAdd()"
active_menu_item: developers
class_name: developers
full_width: true
---


## {object} dtAdd (dObj,DateUnit, value)

## Parameters

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
DateUnit

</td>
<td width="20">
</td>
<td width="750">
Define the Date unit: (Y=Year, M=Month, W=Week, D=Day, X=WorkingDays, H=Hour, S=Second)

</td>
</tr>
<tr>
<td width="133">
value

</td>
<td width="20">
</td>
<td width="750">
the value to add/subtract

</td>
</tr>
</table>
## Description

Adds or subtracts from the defined date object.

## Example

        dObj=app.dtNewDate('locale', new Date(2012,8,12)); //// to set the Date Object to Wed Sep 12 2012 00:00:00
        myDate=app.dtAdd(dObj,'Y',-1);         // Subtracts one Year from the Date Obj to give Mon Sep 12 2011 00:00:00
   

## See Also

 - [dtNewDate()](/developers/user-guide/scripting-apis/client-api/date-time-management-functions/dtnewdate)

 - [dtDifference()](/developers/user-guide/scripting-apis/client-api/date-time-management-functions/dtdifference)

 - [dtAdjust()](/developers/user-guide/scripting-apis/client-api/date-time-management-functions/dtadjust)

 - [dtDateToString()](/developers/user-guide/scripting-apis/client-api/date-time-management-functions/dtdatetostring)

