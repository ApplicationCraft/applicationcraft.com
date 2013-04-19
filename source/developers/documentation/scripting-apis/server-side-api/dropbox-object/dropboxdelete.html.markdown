---

title: "dropbox.delete()"
active_menu_item: developers
class_name: developers
full_width: true
---

**`dropbox.delete(id, root, path)`**

## Parameters

<table>
<tr>
<td width="181">
{string} id

</td>
<td width="18">
</td>
<td width="681">
The id returned from oAuth sign in. See <a href="/developers/documentation/scripting-apis/client-api/oauth/oauthsignin/">oAuthSignin</a>.
</td>
</tr>
<tr>
<td width="181">
{string} root
</td>
<td width="18">
</td>
<td width="681">
sandbox(default)/dropbox. Using 'dropbox' is available after approval of dropbox service for full access. See <a href="https://www.dropbox.com/developers/start/core">https://www.dropbox.com/developers/start/core</a>.
</td>
</tr>
<tr>

<td width="181">
{string} path

</td>
<td width="18">
</td>
<td width="681">
 The path to the media file you want to delete.

</td>
</tr>

</table>

## Description
This function allows you to delete a file from Dropbox.

## Example

Client Side

    function handler_actionBtn9_onClick(mouseev){
   	    app.callSSJ("deleteDropbox", function(error, res){
           	if(!error){
               	console.log("res:"); // optional for testing to review response
          			console.dir(res);    // optional for testing to review response
                 } else {
                   console.log(res);    // optional for testing to review response
                 }
       	    }, [signInId, root, pathDelete]); // To pass parameters to serverside
        }

Server Side

    	function deleteDropbox(id, root, path){
        	var response = ssj.dropbox.delete(id, root, path);
            console.dir(response);   // optional for testing to review response
        	return response;
    }

## See Also

- [dropbox.accountInfo()](/developers/documentation/scripting-apis/server-side-api/dropbox-object/dropboxacinfo)

- [dropbox.upload()](/developers/documentation/scripting-apis/server-side-api/dropbox-object/dropboxupload)

- [dropbox.media()](/developers/documentation/scripting-apis/server-side-api/dropbox-object/dropboxmedia)

- [dropbox.metadata()](/developers/documentation/scripting-apis/server-side-api/dropbox-object/dropboxmetadata)

- [dropbox.search()](/developers/documentation/scripting-apis/server-side-api/dropbox-object/dropboxsearch)

- [dropbox.create()](/developers/documentation/scripting-apis/server-side-api/dropbox-object/dropboxcreate)

- [dropbox.move()](/developers/documentation/scripting-apis/server-side-api/dropbox-object/dropboxmove)
