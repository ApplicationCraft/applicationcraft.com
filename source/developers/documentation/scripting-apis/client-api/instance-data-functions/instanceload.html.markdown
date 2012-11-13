---
title: "instanceLoad()"
active_menu_item: developers
class_name: developers
full_width: true
---


**instanceLoad** (instanceId, optional openInSamePage, optional callback, optional roleId)

IMPORTANT

**WE ARE DISCONTINUING FUTURE ENHANCEMENTS  FOR NATIVE DATA STORAGE. INSTEAD, WE HAVE INTRODUCED FAR SUPERIOR DATA STORAGE USING ANY CONNECTED DATABASE. See: [Server Side Data Storage](/developers/documentation/product-guide/data-storage/server-side-data-storage/)**

**WE STRONGLY RECOMMEND THAT YOU DO NOT USE THESE FUNCTIONS. FUNCTIONALITY IS BEING RETAINED FOR A WHILE IN ORDER NOT TO DISRUPT EXISTING APPLICATIONS.**

## Parameters

<table>
<tr>
<td width="198">
{string} instanceId

</td>
<td width="8">
</td>
<td width="674">
an id of the instance

</td>
</tr>
<tr>
<td width="198">
{boolean} openInSamePage

</td>
<td width="8">
</td>
<td width="674">
Should the instance be loaded into the same page

</td>
</tr>
<tr>
<td width="198">
{function} callback

</td>
<td width="8">
</td>
<td width="674">
callback function that is called after instance is loaded

</td>
</tr>
<tr>
<td width="198">
{string} roleId

</td>
<td width="8">
</td>
<td width="674">
Workflow Role ID to indicate the role of the person who will be accessing this instance

</td>
</tr>
</table>
## Description

This loads the specified Instance ID into its App. Once loaded, the callback function will be called. For this, use the [switchApp()](/developers/documentation/scripting-apis/client-api/app-functions/switchapp) function.

## Callback Function

The callback function is optional and has the following format

callback(error, instanceId)

{error} is an error object, which is null if there was no error

{instanceId} is the ID of the Instance loaded

## See Also

 - [switchApp()](/developers/documentation/scripting-apis/client-api/app-functions/switchapp)
 - [instanceNew()](/developers/documentation/scripting-apis/client-api/instance-data-functions/instancenew)
 - [instanceCreate()](/developers/documentation/scripting-apis/client-api/instance-data-functions/instancecreate)
 - [instanceUpdate()](/developers/documentation/scripting-apis/client-api/instance-data-functions/instancesave)
 - [instanceDelete()](/developers/documentation/scripting-apis/client-api/instance-data-functions/instancedelete)
 - [instanceSync()](/developers/documentation/scripting-apis/client-api/instance-data-functions/instancesync)
 - [dataGetValues()](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/datagetvalues)
 - [dataGetStates()](/developers/documentation/scripting-apis/client-api/widget-data-state-manipulation/datagetstates)

