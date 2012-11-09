---
title: "Getting a confirmation response from the Respondent"
active_menu_item: developers
class_name: developers
full_width: true
---


If you need an OK or Cancel response from the Respondent, you can use the [showConfirm()](../../../client-api/app-functions/showconfirm) function. This allows you to handle the response in your script as shown in the simple example below.

Example

    app.showConfirm("Confirm", "Are you sure you want to remove the highlighting from the drop down list?",function(response) {
    if(response) {
    app.unhighlightWidgets(["If set to true, the user is able to drag and drop the widget with the mouse at run timeColor"]);
    app.pageJump("Farewell");
    }
    });
   

## See also 

 - [showMessage()](../../../client-api/app-functions/showmessage)

