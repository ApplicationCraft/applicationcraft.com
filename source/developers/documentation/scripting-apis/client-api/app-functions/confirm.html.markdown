---
title: "confirm()"
active_menu_item: developers
class_name: developers
full_width: true
---


result **confirm** (txtMessage, optional callback, optional txtTitle, optional txtButtonTexts)

## Parameters

<table>
<tr>
<td width="193">
{boolean} result

</td>
<td width="17">
</td>
<td width="670">
If not running as Native Mobile App then returns true if OK pressed or false if cancel.

</td>
</tr>
<tr>
<td width="193">
{string} txtMessage

</td>
<td width="17">
</td>
<td width="670">
Message to display in the window

</td>
</tr>
<tr>
<td width="193">
{function} callback(btnIndex)

</td>
<td width="17">
</td>
<td width="670">
Callback function invoked when a button is pressed, with index of button as parameter

</td>
</tr>
<tr>
<td width="193">
{string} txtTitle

</td>
<td width="17">
</td>
<td width="670">
Text to display in title bar

</td>
</tr>
<tr>
<td width="193">
{string} txtButtonTexts

</td>
<td width="17">
</td>
<td width="670">
Comma separated string with button labels (Default: "OK,Cancel")

</td>
</tr>
</table>
## Description

This function should be used instead of the regular confirm() function. The main reason is that if the App is running as a native app, it allows you to control more text data (title and button) than the regular confirm() function which only allows access to the message text.

If your App is running in desktop mode, it will ignore the extra parameters and simply return a true or false

Please be aware that iOS handles confirm() in a different manner and it can cause it to trigger twice.

If running as a Native App, then this is passed through to [this PhoneGap function](http://docs.phonegap.com/phonegap_notification_notification.md.html#notification.confirm) .

     
   

## See Also

 - [alert()](/developers/documentation/scripting-apis/client-api/app-functions/refalert)

