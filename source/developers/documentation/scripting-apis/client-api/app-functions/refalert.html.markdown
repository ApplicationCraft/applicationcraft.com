---
old_url: refalert.htm
title: "alert()"
active_menu_item: developers
class_name: developers
full_width: true
---


result **alert** (txtMessage, callback, txtTitle, txtButton)

## Parameters

<table>
<tr>
<td width="193">
{string} txtMessage

</td>
<td width="17">
</td>
<td width="670">
Message to display in alert window

</td>
</tr>
<tr>
<td width="193">
{function} callback

</td>
<td width="17">
</td>
<td width="670">
Callback function when after OK button is pressed

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
{string} txtButton

</td>
<td width="17">
</td>
<td width="670">
Text to display on the OK button

</td>
</tr>
</table>
## Description

This function should be used instead of the regular alert() function. The main reason is that if the App is running as a native app, it allows you to control more text data (title and button) than the regular alert() function which only allows access to the message text.

If your App is running in desktop mode, it will ignore the extra parameters.

Please be aware that iOS handles alert in a different manner and it can it to trigger twice.

## Example

    app.alert('Your data was successfully saved', undefined, 'My App Name', 'Done');
     
   

## See Also

 - [confirm()](/developers/documentation/scripting-apis/client-api/app-functions/confirm)

