---
title: "showMessage()"
active_menu_item: developers
class_name: developers
full_width: true
---


**showMessage** (titleText, messageText, optional callback())

## Parameters

<table>
<tr>
<td width="193">
{string} titleText

</td>
<td width="17">
</td>
<td width="670">
enter the Message you wish to display

</td>
</tr>
<tr>
<td width="193">
{string} messageText

</td>
<td width="17">
</td>
<td width="670">
enter the title to the Message box the message appears in

</td>
</tr>
<tr>
<td width="193">
{function} callback

</td>
<td width="17">
</td>
<td width="670">
the callback function is called when the OK button is pressed. You wouldn't normally need to use this.

</td>
</tr>
</table>
## Description

This displays a simple message to the Respondent. Execution of the App is paused until the Respondent presses the OK button. You would use the callback function for any code that should execute once the OK button has been pressed.

Rich Text is supported.

Any user interaction is blocked by AC until the OK button has been pressed.

## Example

    // valid is an array containing any widgets that failed the test
    if(valid.length>0) {
        app.showMessage("Validation Error", "<b>Please</b> complete all required fields.", function() {
            // code here will execute once the OK button has been pressed.
            // If there is no code to execute, then leave out the entire callback function
        });
    }
     
   

## See Also

 - [showConfirm()](/developers/user-guide/scripting-apis/client-api/app-functions/showconfirm)

 - [showPrompt()](/developers/user-guide/scripting-apis/client-api/app-functions/showprompt)

 - [showPagePopup()](/developers/user-guide/scripting-apis/client-api/page-functions/showpagepopup)

 - [closePagePopup()](/developers/user-guide/scripting-apis/client-api/page-functions/closepagepopup)

