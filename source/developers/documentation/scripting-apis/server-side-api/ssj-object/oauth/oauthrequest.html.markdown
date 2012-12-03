---
old_url: oauthrequest.htm
title: "oAuthRequest()"
active_menu_item: developers
class_name: developers
full_width: true
---


**oAuthRequest** (userAuthKey, serviceEndPoint, type, params)

## Parameters

<table>
<tr>
<td width="202">
{string} userAuthKey

</td>
<td width="11">

</td>
<td width="667">
Can be 'twitter', 'facebook' or 'dropbox'

</td>
</tr>
<tr>
<td width="202">
{string} serviceEndPoint

</td>
<td width="11">

</td>
<td width="667">
Callback function to execute once authentication is completed

</td>
</tr>
<tr>
<td width="202">
{string} type

</td>
<td width="11">

</td>
<td width="667">
GET, POST, PUT, DELETE

</td>
</tr>
<tr>
<td width="202">
{string} params

</td>
<td width="11">

</td>
<td width="667">
An object containing key:value pairs to pass to the destination

</td>
</tr>
</table>
## Description

This calls the Application Craft server to handle OAuth authentication to the requested service. The actual authentication is handled on the server to ensure security and that

Please refer to the User Guide [OAuth chapter](/developers/documentation/product-guide/advanced-features/oauth/) for a general overview and examples.

    function mySSJFunction(userAuthKey, myTwitterId) {
        return ssj.oAuthRequest(userAuthKey, 'https://api.twitter.com/1.1/statuses/user_timeline.json', 
			'GET',{user_id: myTwitterId, count: 1});
    }
   

## See Also

[OAuth Overview](/developers/documentation/product-guide/advanced-features/oauth/)

[app.oAuthSignin()](/developers/documentation/scripting-apis/client-api/oauth/oauthsignin)
