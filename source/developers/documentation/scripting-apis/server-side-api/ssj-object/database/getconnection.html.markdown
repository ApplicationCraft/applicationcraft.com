---
title: "getConnection()"
active_menu_item: developers
class_name: developers
full_width: true
---


objConnection **getConnection** (strConnectionID)

## Parameters

<table>
<tr>
<td width="181">
{string} strConnectionID

</td>
<td width="18">
</td>
<td width="681">
the Connection ID of the Connection as found in the AC Console

</td>
</tr>
</table>
## Returns

<table>
<tr>
<td width="182">
{object} objConnection

</td>
<td width="16">
</td>
<td width="682">
the Connection object that is used in subsequent database operations

</td>
</tr>
</table>
## Description

Before you can use any database methods, you first need to get a valid Connection object. To find the Connection ID, locate the Connection in the AC Console and then copy and paste the ID from the right hand pane.

## Example

    cObj = ssj.getConnection("abcdef12-efb9-431a-b137-87b4749f2473");
    selectObj = cObj.select().from('customers').order('companyName');
    result = cObj.exec(selectObj);
    return(result);
     
   

## Related Videos

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/vOOSCRbH6_Y?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Setting up Databases for Server Side Javascripting [3:08]

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/88rEQc8Itvk?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Overview on coding up your server side javascript calls [2:53]

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/qY9M8bP9b70?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Coding up client/server side javascript calls [7:24]

     
   
