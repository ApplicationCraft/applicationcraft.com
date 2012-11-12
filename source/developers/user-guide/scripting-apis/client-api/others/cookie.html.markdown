---
title: "cookie()"
active_menu_item: developers
class_name: developers
full_width: true
---


setting : **cookie** (cookieName, value, optional options);

getting : {string} **cookie** (cookieName)

## Parameters

<table>
<tr>
<td width="186">
{string} cookieName

</td>
<td width="27">
</td>
<td width="668">
The name of the cookie

</td>
</tr>
<tr>
<td width="186">
{string} value

</td>
<td width="27">
</td>
<td width="668">
The value to store in the cookie

</td>
</tr>
<tr>
<td width="186">
{object} options

</td>
<td width="27">
</td>
<td width="668">
Optional parameter allows you to set additional parameters using an options object

options = {

expire: // date object or number of days to live

path: // a full url in association with which the cookie is saved

secure: // if you are using https you should set this flag to true

}

</td>
</tr>
</table>
## Description

You may need to set and get cookies for your Apps for all sorts of reasons. If you are using [oAuth](../../../product-guide/advanced-features/oauth/) to handle user authentication to 3rd party systems, cookies can be a useful way to ensure that users do not have to login each time they access your App.

Please note that if you do not set an 'expire' duration in setting, the cookie will expire as soon as the app is closed

## **Example**

     
    function handler_actionBtn1_onClick(mouseev){
         if(app.getCookie('cookieName')===null){
             alert('cookie not found');  // if the cookie does not exist, do this.
         } else {
             alert('cookie was found'); // if the cookied does exist, do this.
         }
    }
    function handler_actionBtn2_onClick(mouseev){
        var options = {
            expire:  5,// date object or number of days to live 
            path: "/",// a full url in association with which the cookie is saved
            secure:  false// if you are using https you should set this flag to true
        };
        app.setCookie("cookieName", "value", options);
    }
     
   

## See Also

 - [oAuth Overview](../../../product-guide/advanced-features/oauth/)

