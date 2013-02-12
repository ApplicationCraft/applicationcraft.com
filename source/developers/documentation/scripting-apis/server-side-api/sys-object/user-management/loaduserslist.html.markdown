---
old_url: loaduserslist.htm
title: "getUsersList()"
active_menu_item: developers
class_name: developers
full_width: true
---


{objArray} **getUsersList** (optional [ids])

## Parameters

<table>
<tr>
<td width="183">
{string array} ids

</td>
<td width="15">
</td>
<td width="682">
An optional array of User IDs

</td>
</tr>
</table>
## Description

This returns an object array of the below structure. If no parameter is supplied then all Users are returned.

    {
        "id": userId,
        "username": friendly user name,
        "confirmed": true | false,
        "removed": null | remove date,
        "created_at": created date,
        "role": if assigned to Roles,
        "login": login email,
        "group": if assigned to Groups,
        "type": developer or app,
    }
   
## Example
Client side code:

    function handler_abGetUsers_onClick(mouseev){
        app.callSSJ("getUsers", function(error, res) {
                if(error===false) {
                    app.setValue('txtArea',app.OBJ2JSON(res));
                }
            }
        );
    }
    
Server side code:

    function getUsers(){
        allUsers = sys.getUsersList();
        return allUsers;
    }

## See Also

 - [getLatestError()](/developers/documentation/scripting-apis/server-side-api/ssj-object/miscellaneous/getlatesterror)

