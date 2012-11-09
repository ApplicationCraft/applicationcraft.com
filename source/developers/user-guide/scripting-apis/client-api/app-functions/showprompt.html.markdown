---
title: "showPrompt()"
active_menu_item: developers
class_name: developers
full_width: true
---


## showPrompt (title, text, value, callback())

Parameters

<table>
<tr>
<td width="127">
{string} title

</td>
<td width="12">
</td>
<td width="741">
enter the title to the Message box you wish displayed

</td>
</tr>
<tr>
<td width="127">
{string} text

</td>
<td width="12">
</td>
<td width="741">
enter the Message you wish displayed

</td>
</tr>
<tr>
<td width="127">
{string} value

</td>
<td width="12">
</td>
<td width="741">
enter the value to check against

</td>
</tr>
<tr>
<td width="127">
{function} callback

</td>
<td width="12">
</td>
<td width="741">
the callback function is used to receive and handle the response (true/false)

</td>
</tr>
</table>

Description

A Show Prompt is often used if you want the user to input a value before proceeding

When a prompt box pops up, the user will have to click either "OK" or "Cancel" to proceed after entering an input value.

 - If the user clicks "OK" the box returns the input value, and if this matches the "Value" further actions can be run using the callback function - true.

 - If the user clicks "Cancel" the box returns null or if an incorrect value is entered, further actions can be run using the callback function - false.

Rich Text is supported.

See Also:

 - [showMessage()](showmessage)

 - [showConfirm()](showconfirm)

 - [showPagePopup()](../page-functions/showpagepopup)

 - [closePagePopup()](../page-functions/closepagepopup)

