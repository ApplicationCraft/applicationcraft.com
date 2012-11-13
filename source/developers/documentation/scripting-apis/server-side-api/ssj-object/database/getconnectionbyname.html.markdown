---
title: "getConnectionByName()"
active_menu_item: developers
class_name: developers
full_width: true
---


objArray objConnection **getConnectionByName** (strConnectionName)

## Parameters

<table>
<tr>
<td width="207">
{string} strConnectionName

</td>
<td width="18">
</td>
<td width="655">
the Connection Name of the Connection as found in the AC Console

</td>
</tr>
</table>
## Returns

<table>
<tr>
<td width="182">
{array} objArray

</td>
<td width="16">
</td>
<td width="682">
returns an array of Connection Objects that match the suppled name.

</td>
</tr>
</table>
## Description

This is provided as an alternative way of opening a Connection. It is very much advised that you do not use this function but use [getConnection()](/developers/documentation/scripting-apis/server-side-api/ssj-object/database/getconnection) instead.

The only advantage of using getConnectionByName() over getConnection() is that you can pass in a Connection Name rather than a Connection ID. This may make it more appealing superficially, but you should be aware that Connection Names are not guaranteed to be unique, which can result in problems if you are not careful with your naming.

You should note that this function returns an array of Connection objects for this same reason. Any matching Connection Names will be returned within the array. If there is only one matching name, then you will still get an array returned.

## Example

    objArray = ssj.getConnectionByName("Classic Cars");
    cObj = objArray[0];   // This assumes that there is only a single Connection called "Classic Cars".
    selectObj = cObj.select().from('customers').order('companyName');
    result = cObj.exec(selectObj);
    return(result);
     
   

Related Video:

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/vOOSCRbH6_Y?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Setting up Databases for Server Side Javascripting [3:08]
