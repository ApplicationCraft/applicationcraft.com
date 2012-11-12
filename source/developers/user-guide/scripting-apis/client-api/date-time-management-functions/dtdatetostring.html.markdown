---
title: "dtDateToString()"
active_menu_item: developers
class_name: developers
full_width: true
---


## dtDateToString (dObj, formatBasic, formatMask);

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
formatBasic

</td>
<td width="20">
</td>
<td width="750">
The basic format of the resultant string. See below

</td>
</tr>
<tr>
<td width="133">
formatMask

</td>
<td width="20">
</td>
<td width="750">
The mask to apply to the resultant string. See below

</td>
</tr>
</table>
## Description

Converts a date object to a string in the specified time zone as indicated by formatBasic and formats the actual string as specified by formatMask.

where formatBasic can be:

<table>
<tr>
<td width="133">
**Locale Based**

</td>
<td width="20">

</td>
<td width="127">
**RTZ Based**

</td>
<td width="14">

</td>
<td width="130">
**UTC Based**

</td>
</tr>
<tr>
<td width="133">
localeDate

</td>
<td width="20">

</td>
<td width="127">
RTZDate

</td>
<td width="14">

</td>
<td width="130">
UTCDate

</td>
</tr>
<tr>
<td width="133">
localeTime

</td>
<td width="20">

</td>
<td width="127">
RTZTime

</td>
<td width="14">

</td>
<td width="130">
UTCTime

</td>
</tr>
<tr>
<td width="133">
localeDateTime

</td>
<td width="20">

</td>
<td width="127">
RTZDateTime

</td>
<td width="14">

</td>
<td width="130">
UTCDateTime

</td>
</tr>
</table>

and where formatMask is any combination of the following string parameters

 - LOCALE - toLocaleString()

 - DOW - Day of Week

 - D - Day as an integer

 - M/Month - Month

 - Y - Year

 - HH - hours

 - MM - Minutes

 - SS - Seconds

 - TZ - Time Zone String

 - TX - Time Zone relative to GMT

for example 'DOW, Month D Y TZ'

## Example

             dstr1=app.dtNewDate('locale');
                fMask = "DOW Y-M-D HH:MM:SS";
                locale = app.dtDateToString(dstr1, 'localeDateTime', fMask);
                app.setValue('text1',locale);  // returns: Thu 2011-07-14 13:09:02
        
        dstr2=app.dtNewDate('utc');
                fMask1 = "DOW D - Month M - Y";
                utc = app.dtDateToString(dstr2, 'UTCDateTime', fMask1);
                app.setValue('text2',utc);  // returns: Thu 14 - Jul 07 - 2011
     
        dstr3=app.dtNewDate('rtz');
                fMask2 = "HH-MM-SS";
                rtz = app.dtDateToString(dstr3, 'RTZDateTime', fMask2);
                app.setValue('text3',rtz);  // returns: 13-09-02
   

## See Also

 - [dtNewDate()](/developers/user-guide/scripting-apis/client-api/date-time-management-functions/dtnewdate)

 - [dtadd()](/developers/user-guide/scripting-apis/client-api/date-time-management-functions/dtadd)

 - [dtDifference()](/developers/user-guide/scripting-apis/client-api/date-time-management-functions/dtdifference)

 - [dtAdjust()](/developers/user-guide/scripting-apis/client-api/date-time-management-functions/dtadjust)

