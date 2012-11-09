---
title: "showConfirm()"
active_menu_item: developers
class_name: developers
full_width: true
---


## {boolean} showConfirm (title, text, callback())

Parameters

<table>
<tr>
<td width="138">
{string} title

</td>
<td width="11">
</td>
<td width="731">
the title to the Message box you wish displayed

</td>
</tr>
<tr>
<td width="138">
{string} text

</td>
<td width="11">
</td>
<td width="731">
the Message you wish displayed

</td>
</tr>
<tr>
<td width="138">
{function} callback

</td>
<td width="11">
</td>
<td width="731">
the callback function is used to receive and handle the response (true/false)

</td>
</tr>
</table>

Description

You use this when you want to get a Yes/No or OK/Cancel response (browser dependent) from the Respondent using the standard browser message box. You pass in the message to display to the Respondent and you get back a true or false value.

Rich Text is supported

The example below shows how the response to the question is handled by the callback function.

Example

    app.showConfirm(undefined, "Are you <b>sure</b> you want to remove the highlighting from the drop down list?",function(response) {
    if(response) {
    app.unhighlightWidgets(["timeColor"]);
    app.pageJump("Farewell");
    }
    });
   

See Also:

 - [showMessage()](showmessage.htm)

 - [showPrompt()](showprompt.htm)

 - [showPagePopup()](../page-functions/showpagepopup.htm)

 - [closePagePopup()](../page-functions/closepagepopup.htm)

Related Videos:

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/VTypeamWf5E?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Setting and Getting Widget Data  [3:08]

