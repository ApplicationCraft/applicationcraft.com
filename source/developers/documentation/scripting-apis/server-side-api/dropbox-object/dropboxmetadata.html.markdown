---

title: "dropbox.metaData()"
active_menu_item: developers
class_name: developers
full_width: true
---

**`dropbox.metaData(id, root, path, rev, limit, hash, list, deleted)`**

## Parameters

<table>
<tr>
<td width="181">
{string} id

</td>
<td width="18">
</td>
<td width="681">
clarify ID.
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
The path to the file/folder, relative to root.

</td>
</tr>
<tr>
<td width="181">
{string} rev

</td>
<td width="18">
</td>
<td width="681">
Return metadata for a specific revision (Default: latest rev).

</td>
</tr>
<tr>
<td width="181">
{int} limit

</td>
<td width="18">
</td>
<td width="681">
Maximum number of listings to return. (Default: 10000)

</td>
</tr>
<tr>
<td width="181">
{string} hash

</td>
<td width="18">
</td>
<td width="681">
Metadata hash to compare against. (Default: false)

</td>
</tr>
<tr>
<td width="181">
{boolean} list

</td>
<td width="18">
</td>
<td width="681">
Return contents field with response. (Default: true)

</td>
</tr>
<tr>
<td width="181">
{boolean} deleted

</td>
<td width="18">
</td>
<td width="681">
Include files/folders that have been deleted. (Default: false)

</td>
</tr>
</table>

## Description
This function retrieves file and folder metadata.

## Example



## See Also

- [dropbox.accountInfo()](/developers/documentation/scripting-apis/server-side-api/dropbox-object/dropboxacinfo)

- [dropbox.upload()](/developers/documentation/scripting-apis/server-side-api/dropbox-object/dropboxupload)

- [dropbox.media()](/developers/documentation/scripting-apis/server-side-api/dropbox-object/dropboxmedia)

- [dropbox.search()](/developers/documentation/scripting-apis/server-side-api/dropbox-object/dropboxsearch)

- [dropbox.create()](/developers/documentation/scripting-apis/server-side-api/dropbox-object/dropboxcreate)

- [dropbox.delete()](/developers/documentation/scripting-apis/server-side-api/dropbox-object/dropboxdelete)

- [dropbox.move()](/developers/documentation/scripting-apis/server-side-api/dropbox-object/dropboxmove)
