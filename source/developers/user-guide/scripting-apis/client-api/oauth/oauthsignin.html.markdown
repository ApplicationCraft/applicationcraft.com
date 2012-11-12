---
title: "oAuthSignin()"
active_menu_item: developers
class_name: developers
full_width: true
---


**oAuthSignin** (serviceName, callbackFunction)

## Parameters

<table>
<tr>
<td width="202">
{string} serviceName

</td>
<td width="11">

</td>
<td width="667">
Can be 'twitter', 'facebook' or 'dropbox'

</td>
</tr>
<tr>
<td width="202">
{function} callbackFunction

</td>
<td width="11">

</td>
<td width="667">
Callback function to execute once authentication is completed

</td>
</tr>
</table>
## Description

This calls the Application Craft server to handle oAuth authentication to the requested service. The actual authentication is handled on the server to ensure security and that

Please refer to the User Guide [oAuth chapter](../../../product-guide/advanced-features/oauth/) for a general overview and examples.

## See Also

[oAuth Overview](../../../product-guide/advanced-features/oauth/)

[ssj.oAuthRequest()](../../server-side-api/ssj-object/oauth/oauthrequest)

