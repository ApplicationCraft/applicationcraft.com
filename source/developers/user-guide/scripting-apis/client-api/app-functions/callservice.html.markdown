---
title: "callSSJ()"
active_menu_item: developers
class_name: developers
full_width: true
---


## callSSJ (serverFunctionName, callbackFunction, [arg1, arg2, .... , argN])

Parameters

<table>
<tr>
<td width="211">
{string} serverFunctionName

</td>
<td width="9">
</td>
<td width="660">
The name of the server side function to call. Do not try to call any function with a '\_' prepended as these cannot be called from a client app

</td>
</tr>
<tr>
<td width="211">
{function} callbackFunction

</td>
<td width="9">
</td>
<td width="660">
optional callback function called by the server side method

</td>
</tr>
<tr>
<td width="211">
{array} args

</td>
<td width="9">
</td>
<td width="660">
an optional array of arguments as may be required by the server side function

</td>
</tr>
</table>

Description

This function is used if you want to call a server side function from your client App. [Server Side Scripting](../../server-side-scripting-overview/index.htm) is covered in its own chapter, so please refer to it for more details.

Example

See [Calling SSJ Methods](../../server-side-scripting-overview/calling-ssj-methods.htm) for an example.

Related Video:

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/LGzP1Uxk5c4?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Overview of Server Side Javascript [3:55]

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/88rEQc8Itvk?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Overview on coding up your server side javascript calls [2:53]

