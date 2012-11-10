---
title: "logout()"
active_menu_item: developers
class_name: developers
full_width: true
---


**logout** (optional callback)

## Description

This logs the user out from the App. It does not do anything with the screen, this is up to you to handle by sending the user to a specific page or by closing the browser window.

It is recommended you use the callback function so you perform subsequent operations only once the logout is successfully completed.

## Example

This example shows an Embedded App that calls its parent App to handle the logout. Once the logout is completed, the callback switches the main App to another App and jumps to the 'Signin' page.

    function handler_lblSignOut_onClick(mouseev){
        app.parentApp().logout(function() {
            app.parentApp().switchApp("6ec70b3b-4cdb-468d-b0bc-0e6230aa771c", "Signin"); 
        });       
    }
   

