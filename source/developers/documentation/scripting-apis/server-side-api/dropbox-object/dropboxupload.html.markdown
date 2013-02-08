---

title: "dropbox.upload()"
active_menu_item: developers
class_name: developers
full_width: true
---

**`dropbox.upload(authToken, fileUrl, filename, path, overwrite)`**

## Parameters

<table>
<tr>
<td width="181">
{string} authToken

</td>
<td width="18">
</td>
<td width="681">
Your Authentication key. See <a href="/developers/documentation/scripting-apis/client-api/oauth/oauthsignin/">oAuthSignin()</a>.
</td>
</tr>
<tr>
<td width="181">
{string} fileUrl
</td>
<td width="18">
</td>
<td width="681">
The URL of your file uploaded to your app with <a href="/developers/documentation/product-guide/widget-properties-events/mobile/upload-button">Mobile Upload</a> or <a href="/developers/documentation/product-guide/widget-properties-events/common/upload-button2">Upload</a> button.
</td>
<tr>
<td width="181">
{string} filename

</td>
<td width="18">
</td>
<td width="681">
The name of the uploaded file. If blank or undefined a name will be defined by Dropbox.

</td>
</tr>
<tr>
<td width="181">
{string} path
</td>
<td width="18">
</td>
<td width="681">
The path to the file on Dropbox. If blank or undefined, the file will be uploaded to the root of the Dropbox account
</td>
<tr>
<td width="181">
{boolean} overwrite

</td>
<td width="18">
</td>
<td width="681">
true(default)/false. If file exists, it will be overwritten.

</td>
</table>

## Description
This function allows you to upload files from your app to Dropbox. Used in conjunction with Dropbox [oAuth](/developers/documentation/product-guide/advanced-features/oauth/app-key-and-app-secret/dropbox/) and [Mobile Upload](/developers/documentation/product-guide/widget-properties-events/mobile/upload-button) or [Upload](/developers/documentation/product-guide/widget-properties-events/common/upload-button2) button.

## Example

Client Side:

1: Upload your file to your app and get the URL from the *OnUploaded* event

	function handler_fileUpload_onUploaded(error, url){
	
		if(!error){
	        upload = url;  
	        console.log(upload); // optional for testing to review uploaded file
	    }
	    else{
	     app.showMessage('Error','Error in uploading');
	    }
	}

2: Authenticate using *oAuthSignin()*

	function handler_actionBtn3_onClick(mouseev){
	    app.oAuthSignIn('dropbox', function(res, id){
	        if (res){
	            console.log("logged in"); // optional for testing to review sucessful authentication result
	            signInId = id;
	        } else {
	            console.dir(res); // optional for testing to review authentication error.
	        }
		})
	}

3: Call the Server Side function

	function handler_actionBtn2_onClick(mouseev){
		app.callSSJ("dropbox", function(error, res){
	        if(!error){
	            console.dir(res); // optional for testing to review successful call.
	          } else {
	            console.log(res); // optional for testing to review errors
	                 }
	    }, [signInId, upload]); // passing in the authentication token and URL of uploaded file.
	}

Server Side:

	function dropbox(id, upload){
	    var response = ssj.dropbox.upload(signInId, upload); // note filename/path/overwrite parameters not used in this example
	    console.dir(response); // optional for testing to review successful upload
	    return response;
	}


## See Also

- [dropbox.accountInfo()](/developers/documentation/scripting-apis/server-side-api/dropbox-object/dropboxacinfo)