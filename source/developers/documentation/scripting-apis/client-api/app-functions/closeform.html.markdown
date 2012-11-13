---
title: "closeForm()"
active_menu_item: developers
class_name: developers
full_width: true
---


**closeForm** (message, url, quiet)

## Parameters

<table>
<tr>
<td width="142">
{string} message

</td>
<td width="15">
</td>
<td width="723">
The message to show users when Quiet - 'false' is selected

</td>
</tr>
<tr>
<td width="142">
{string} url

</td>
<td width="15">
</td>
<td width="723">
The URL of webpage if you want to redirect users if they close

</td>
</tr>
<tr>
<td width="142">
{boolean} quiet

</td>
<td width="15">
</td>
<td width="723">
true/false.

</td>
</tr>
</table>
## Description

This enables you to control the closing of the App, defining your message and redirecting them if required.  Quiet - 'true' will try to close the browser without prompting user involvement (browser dependant), Quiet - 'false' will prompt user to confirm if they wish to exit or not.

## Example

     
    app.closeForm("", 'http://www.yourwebsite.com', true); // will close app and redirect the user
     
    app.closeForm("Are you sure you want to Quit ?", 'http://www.yourwebsite.com', false); // will present message to users to confirm and then redirect the user
     
    app.closeForm(); // will close the app
     
   

