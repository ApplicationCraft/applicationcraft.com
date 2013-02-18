---
old_url: isnativeapponline.htm
title: "isNativeAppOnline()"
active_menu_item: developers
class_name: developers
full_width: true
---


result **isNativeAppOnline** ()

## Parameters

<table>
<tr>
<td width="193">
{boolean} result

</td>
<td width="17">
</td>
<td width="670">
True if App is running in Native Mode.

</td>
</tr>
</table>
## Description

Returns the status of internet / network connectivity. If the App is not running as a Native App then this will always return true.

## Example

    function handler_application_onAppStarted(){
        if(app.isNativeAppOnline()){
            // ok to access the internet
        }
        else {
            // NOT ok to access the internet
        }
    }

## See Also

 - [Network Availability Handling](/developers/documentation/scripting-apis/client-scripting-overview/network-availability-handling)
 - [httpRequest()](/developers/documentation/scripting-apis/client-api/soap-restful-ajax-calls/httprequest)
 - [Error Handling](/developers/documentation/scripting-apis/client-scripting-overview/error-handling/)

