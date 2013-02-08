---

title: "dropbox.accountInfo()"
active_menu_item: developers
class_name: developers
full_width: true
---


**`dropbox.accountInfo(authToken)`**

## Parameters

<table>
<tr>
<td width="181">
authToken

</td>
<td width="18">
</td>
<td width="681">
Your Authentication key. See <a href="/developers/documentation/scripting-apis/client-api/oauth/oauthsignin/">oAuthSignin()</a>.

</td>
</table>

## Description

Returns the Drop Box Account Information for the supplied Authentication Token

## Example

Client Side:

	function handler_actionBtn4_onClick(mouseev){
		app.callSSJ("dropbox_getaccountinfo", function(error, res){
	        if(!error){
	            console.dir(res); // optional for testing to review successful call.
	         } else {
	            console.log(res); // optional for testing to review unsuccessful call.
	         }
	    }, [signInId]);
	}

Server Side:

	function dropbox_getaccountinfo(id){
    	var response = ssj.dropbox.accountInfo(id);
	    console.dir(response);  // optional for testing to review successful call and review the data
	    return response;
	}

## See Also

- [dropbox.upload()](/developers/documentation/scripting-apis/server-side-api/dropbox-object/dropboxupload)