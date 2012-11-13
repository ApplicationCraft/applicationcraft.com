---
title: "networkTimeout()"
active_menu_item: developers
class_name: developers
full_width: true
---


**networkTimeout** (milliseconds)

milliseconds **networkTimeout** ()

## Parameters

<table>
<tr>
<td width="193">
{integer} milliseconds

</td>
<td width="17">
</td>
<td width="670">
Time, in milliseconds, before a Timeout error is generated

</td>
</tr>
</table>
## Description

Gets or sets the network timeout period. In all cases except for httpRequest() calls, a Timeout error will be generated after 30 seconds and the onError() event will be fired, if you have specified one. Otherwise Application Craft will display a Timeout message.

Error handling for httpRequest() calls must be done within the [httpRequest()](/developers/documentation/scripting-apis/client-api/soap-restful-ajax-calls/httprequest) callback function.

If you want to change the Timeout value for a single [httpRequest()](/developers/documentation/scripting-apis/client-api/soap-restful-ajax-calls/httprequest) call, then you can override the timeout value using special parameters.

## Example

    app.networkTimeout(20000); // set timeout to 20 seconds
   

## See Also

 - [httpRequest()](/developers/documentation/scripting-apis/client-api/soap-restful-ajax-calls/httprequest)
 - [Error Handling](/developers/documentation/scripting-apis/client-scripting-overview/error-handling/)

## Related Videos

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/Ly5KbmvHk7E?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) AJAX functions, timeouts and data population [3:13]

