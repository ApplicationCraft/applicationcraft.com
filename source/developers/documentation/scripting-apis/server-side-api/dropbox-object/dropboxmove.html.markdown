---

title: "dropbox.move()"
active_menu_item: developers
class_name: developers
full_width: true
---

**`dropbox.move(id, root, from, to)`**

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
{string} from

</td>
<td width="18">
</td>
<td width="681">
 The path to the media file you want to move from.

</td>
</tr>
<tr>

<td width="181">
{string} to

</td>
<td width="18">
</td>
<td width="681">
 The path you want to move the media file to.

</td>
</tr>
</table>

## Description
This function allows you to move files in Dropbox.

## Example

Client Side

    function handler_actionBtn10_onClick(mouseev){
    		app.callSSJ("moveDropbox", function(error, res){
    	        if(!error){
    	            console.log("res:"); // optional for testing to review response
    	            console.dir(res);    // optional for testing to review response
    	        } else {
    	            console.log(res);    // optional for testing to review if error
    	        }
    	    }, [signInId, root, from, to]);
    }

Server Side

    	function moveDropbox(id, root, from, to){
    	    var response = ssj.dropbox.move(id, root, from, to);
    	    console.dir(response); // optional for testing to review response
    	    return response;
    	}

## See Also

- [dropbox.accountInfo()](/developers/documentation/scripting-apis/server-side-api/dropbox-object/dropboxacinfo)

- [dropbox.upload()](/developers/documentation/scripting-apis/server-side-api/dropbox-object/dropboxupload)

- [dropbox.media()](/developers/documentation/scripting-apis/server-side-api/dropbox-object/dropboxmedia)

- [dropbox.metadata()](/developers/documentation/scripting-apis/server-side-api/dropbox-object/dropboxmetadata)

- [dropbox.search()](/developers/documentation/scripting-apis/server-side-api/dropbox-object/dropboxsearch)

- [dropbox.create()](/developers/documentation/scripting-apis/server-side-api/dropbox-object/dropboxcreate)

- [dropbox.delete()](/developers/documentation/scripting-apis/server-side-api/dropbox-object/dropboxdelete)

