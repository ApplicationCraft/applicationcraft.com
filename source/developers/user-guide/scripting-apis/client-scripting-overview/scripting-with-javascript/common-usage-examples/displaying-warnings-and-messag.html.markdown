---
title: "Displaying warnings and messages"
active_menu_item: developers
class_name: developers
full_width: true
---


There are two ways to manage this.

 - the AC [app.showMessage()](/developers/user-guide/scripting-apis/client-api/app-functions/showmessage) function is usually the best one to use

 - javascript alert() function - this is a blocking function but the drawback is that it belongs to the browser and not the App; this means you have no control over the appearance

The function [showConfirm()](/developers/user-guide/scripting-apis/client-api/app-functions/showconfirm) is also useful if you want the Respondent to confirm with a Yes or No answer.

## Example

    app.showMessage("Validation Error", "Please complete all required fields.", function() {
        // code here will execute once the OK button has been pressed.
        // If there is no code to execute, then leave out the entire callback function
    });
     
     
   

## See Also

 - [showConfirm()](/developers/user-guide/scripting-apis/client-api/app-functions/showconfirm)
 - [showMessage()](/developers/user-guide/scripting-apis/client-api/app-functions/showmessage)

