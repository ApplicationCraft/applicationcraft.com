---
title: "instanceSetRelationship()"
active_menu_item: developers
class_name: developers
full_width: true
---


**instanceSetRelationship** (forminstanceID, relationName, addLinks, removeLinks, cdbCallback, rdbCallback)

IMPORTANT

**WE ARE DISCONTINUING FUTURE ENHANCEMENTS  FOR NATIVE DATA STORAGE. INSTEAD, WE HAVE INTRODUCED FAR SUPERIOR DATA STORAGE USING ANY CONNECTED DATABASE. See: [Server Side Data Storage](/developers/user-guide/product-guide/data-storage/server-side-data-storage/)**

**WE STRONGLY RECOMMEND THAT YOU DO NOT USE THESE FUNCTIONS. FUNCTIONALITY IS BEING RETAINED FOR A WHILE IN ORDER NOT TO DISRUPT EXISTING APPLICATIONS.**

## Parameters

<table>
<tr>
<td width="216">
{string} instanceID

</td>
<td width="10">
</td>
<td width="700">
The Instance ID of the App in which the relationName parameter is defined

</td>
</tr>
<tr>
<td width="216">
{string} relationName

</td>
<td width="10">
</td>
<td width="700">
  Enter Relation Name as defined in App Properties - Application Relationship. See <a href="/developers/user-guide/product-guide/advanced-features/data-storage-management/dataapp-instances">App Instances</a>

</td>
</tr>
<tr>
<td width="216">
{String | String Array} addLinks

</td>
<td width="10">
</td>
<td width="700">
Used when you are seeking to add a relationship. Enter in an array of the instances to add

</td>
</tr>
<tr>
<td width="216">
{String | String Array} removeLinks

</td>
<td width="10">
</td>
<td width="700">
optional,Used when you are seeking to Remove a relationship. Enter in an array of the instances to remove

</td>
</tr>
<tr>
<td width="216">
{function} cdbCallback

</td>
<td width="10">
</td>
<td width="700">
optional, this is called once the relationship has been successfully received by the server

</td>
</tr>
<tr>
<td width="216">
{function} rdbCallback

</td>
<td width="10">
</td>
<td width="700">
optional, this is called once the relationship has been successfully stored in the Results database (RDB)

</td>
</tr>
</table>
## Description

This defines and/or removes a relationship between the Application Instance as specified in instanceID and a single other instance or an array of other Instance IDs as specified in addLinks (if adding) and/or removeLinks (if deleting).

You are free to define or break multiple relationships with a single call by the use of a string array rather than a single string. So "id1" or ["id1", "id2", "id3"].

If you want to only remove relationships, then you leave addLinks empty and just specify the removeLinks string or array.

**Important** : the instanceID specified in the first parameter must be an instance of the App that defines the Relationship that is referred to in the relationName parameter. This may not be the App where your code is running, so be sure to think about this.

## Callback Functions

There are two callback function you can use. cdbCallback returns first once the data has been successfully reflected in the CDB (Core Database). rdbCallback is called once the data is fully reflected in the results database for reporting and Data View access.

Please refer to the [instanceXxxx() callback functions](/developers/user-guide/scripting-apis/client-api/instance-data-functions/instancexxxx-callback-function) page for details on these callback functions.

## See Also

 - [instanceNew()](/developers/user-guide/scripting-apis/client-api/instance-data-functions/instancenew)
 - [instanceCreate()](/developers/user-guide/scripting-apis/client-api/instance-data-functions/instancecreate)
 - [instanceUpdate()](/developers/user-guide/scripting-apis/client-api/instance-data-functions/instancesave)
 - [instanceDelete()](/developers/user-guide/scripting-apis/client-api/instance-data-functions/instancedelete)

Related Video:

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/v-XJSu4VKD4?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Relational Apps -Manual Method [4:52]
