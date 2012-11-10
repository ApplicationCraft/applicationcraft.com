---
title: "md5()"
active_menu_item: developers
class_name: developers
full_width: true
---


{string} **md5** (text)

## Parameters

<table>
<tr>
<td width="121">
{string} text

</td>
<td width="26">
</td>
<td width="733">
the value of a password field on your app

</td>
</tr>
</table>

## Description

This takes a string and produces an md5 hash from that string. The most common use case is for password handling, where you take a password entered in your app and pass it to the md5() function to get a value back that you then compare to the data returned from your database where the password is encrypted with md5

## **Example**

Client Side Script:

    function handler_actionBtn_onClick(mouseev){
    app.callSSJ("getMd5",function(error, res){
            if(!error){
                alert('No Error');
            } else {
                alert('Error');
            }
        }, [app.getValue("text")]);  // Text field on app where users are entering their password
    }
     
    function getMd5(text){
        var md5 = ssj.md5(text)
    }
     
   

Server Side Script:

## **See Also**

 - [hash()](cryptblowfish.htm)

 - [checkHash()](checkcryptblowfish.htm)

