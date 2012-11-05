---
title: showConfirm
active_submenu: 
active_submenu_item:
---

##{boolean} showConfirm(title, text, callback())

##Parameters

<!-- Parameter Table -->
<table width="100%">
  <tr>
    <td width="30%">{string} title</td>
    <td>the title to the Message box you wish displayed</td>
  </tr>
  <tr>
    <td>{string} text</td>
    <td>the Message you wish displayed</td>
  </tr>  
  <tr>
    <td>{function} callback</td>
    <td>the callback function is used to receive and handle the response (true/false)</td>
  </tr>  
</table>

##Description
You use this when you want to get a Yes/No or OK/Cancel response (browser dependent) from the Respondent using the standard browser message box. You pass in the message to display to the Respondent and you get back a true or false value.
Rich Text is supported
 
The example below shows how the response to the question is handled by the callback function.

##Example

    app.showConfirm(undefined, "Are you <b>sure</b> you want to remove the highlighting from the drop down list?",function(response) {
        if(response) {
             app.unhighlightWidgets(["timeColor"]);
             app.pageJump("Farewell");
        }
        });


##Table

<table width="100%">
  <tr>
    <td>Header Row Cell 1</td>
    <td>Header Row Cell 2</td>
    <td>Header Row Cell 3</td>
  </tr>
  <tr>
    <td>Row 1 Cell 1</td>
    <td>Row 1 Cell 2</td>
    <td>Row 1 Cell 3</td>
  </tr>
  <tr>
    <td>Row 2 Cell 1</td>
    <td>Row 2 Cell 2</td>
    <td>Row 2 Cell 3</td>
  </tr>  
  <tr>
    <td>Row N Cell 1</td>
    <td>Row N Cell 2</td>
    <td>Row N Cell 3</td>
  </tr>  
</table>

##See Also
• [showMessage()](#)
• [showPrompt()](#)
• [showPagePopup()](#)
• [closePagePopup()](#)



