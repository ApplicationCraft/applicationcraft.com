---

title: "dropbox.search()"
active_menu_item: developers
class_name: developers
full_width: true
---

**`dropbox.search(id, root, query, path, limit, deleted)`**

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
{mixed} query

</td>
<td width="18">
</td>
<td width="681">
The search string. Must be at least 3 characters long.

</td>
</tr>

<tr>
<td width="181">
{string} path

</td>
<td width="18">
</td>
<td width="681">
The path to the folder you want to search in.

</td>
</tr>

<tr>
<td width="181">
{int} limit

</td>
<td width="18">
</td>
<td width="681">
Maximum number of listings to return (1 - 1000). (Default: 1000)

</td>
</tr>
<tr>
<td width="181">
{boolean} deleted

</td>
<td width="18">
</td>
<td width="681">
Include deleted files/folders in the search. (Default: false)

</td>
</tr>
</table>

## Description
This function returns metadata for all files and folders that match the search query.

## Example

Client Side

    function handler_actionBtn7_onClick(mouseev){
   	    app.callSSJ("searchDropbox", function(error, res){
   	        if(!error){
   	            console.log("res:"); // optional for testing to review response
   	            console.dir(res);    // optional for testing to review response
               } else {
                   console.log(res);    // optional for testing to review if error
               }
       	}, [signInId, root, query, pathSearch, limitSearch, deletedSearch]);
   	}


Server Side

    	function searchDropbox(id, root, query,  path, limit, deleted){
    	    var response = ssj.dropbox.search(id, root, query,  path, limit, deleted);
    	    console.dir(response); // optional for testing to review response
    	    return response;
    	}

## See Also

- [dropbox.accountInfo()](/developers/documentation/scripting-apis/server-side-api/dropbox-object/dropboxacinfo)

- [dropbox.upload()](/developers/documentation/scripting-apis/server-side-api/dropbox-object/dropboxupload)
 
- [dropbox.media()](/developers/documentation/scripting-apis/server-side-api/dropbox-object/dropboxmedia)

- [dropbox.metadata()](/developers/documentation/scripting-apis/server-side-api/dropbox-object/dropboxmetadata)

- [dropbox.create()](/developers/documentation/scripting-apis/server-side-api/dropbox-object/dropboxcreate)

- [dropbox.delete()](/developers/documentation/scripting-apis/server-side-api/dropbox-object/dropboxdelete)

- [dropbox.move()](/developers/documentation/scripting-apis/server-side-api/dropbox-object/dropboxmove)
