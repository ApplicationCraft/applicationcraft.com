---
title: "MailTo Plugin"
active_menu_item: developers
class_name: developers
full_width: true
---


The MailTo plugin allows you to send email from a native app using the settings of the default email account on the users device.

## HTML5+CSS+JS Apps not developed in Application Craft

If you have developed your App outside Application Craft then please do the following

<table>
<tr>
<td width="13">
 - 

</td>
In your index.html include

      mailto.js
      <gap:plugin name="MailToPlugin" version="1.0.0" />
     

</tr>
</table>
 - In your config.xml add

You should replace x.y.z in version='x.y.z' depending on which version of Cordova you are using for your App. Please refer to the list below

 - Cordova 1.6.0-1.8.0 use "1.0.0"

 - Cordova 2.0.0 or later use "2.0.0"

## Apps Developed with Application Craft

<table>
<tr>
<td width="170">
Plugin Name

</td>
<td width="17">
</td>
<td width="755">
The name of the plugin - MailTo Plugin

</td>
</tr>
<tr>
<td width="170">
Enabled

</td>
<td width="17">
</td>
<td width="755">
True/False(default). Select True to use a plugin in your app

</td>
</tr>
<tr>
<td width="170">
Show 'not native' warning

</td>
<td width="17">
</td>
<td width="755">
True(default)/False. If True will present a message to users if the app is not being run as a Native App.

</td>
</tr>
</table>
.

## Parameters

<table>
<tr>
<td width="168">
subject

</td>
<td width="21">

</td>
<td width="691">
The mail subject

</td>
</tr>
<tr>
<td width="168">
message

</td>
<td width="21">

</td>
<td width="691">
The text of the mail message.

</td>
</tr>
<tr>
<td width="168">
isHtml

</td>
<td width="21">

</td>
<td width="691">
True/false. If True – the mail message is Html

</td>
</tr>
<tr>
<td width="168">
emails

</td>
<td width="21">

</td>
<td width="691">
The recipient of the email

</td>
</tr>
<tr>
<td width="168">
ccemails

</td>
<td width="21">

</td>
<td width="691">
multiple cc recipients are allowed

</td>
</tr>
<tr>
<td width="168">
bccemails

</td>
<td width="21">

</td>
<td width="691">
multiple bcc recipients are allowed

</td>
</tr>
<tr>
<td width="168">
attachments

</td>
<td width="21">

</td>
<td width="691">
[optional] attachments

</td>
</tr>
<tr>
<td width="168">
chtitle

</td>
<td width="21">

</td>
<td width="691">
[optional for Android]

</td>
</tr>
</table>

## **Example**

    function handler_actionBtn_onClick(mouseev){
        
        window.plugins.MailTo.mailTo({
        subject: app.getData("subject"), // You can get the subject of the email from a widget
        message: '<b>message</b>', // You can also directly compose your message/subject (HTML allowed)
        isHtml : true,
        emails : ["mail@gmail.com"],  // recipient of the email
        ccemails : [{"frankx@jones.com"},{"joe@jones.com"}], // multiple cc recipients
        chtitle : "Mail To:" //Android spec
        },
        function() {alert('Mailto success');}, // Success function
        function() {alert('Mailto failed');} // Failure function
    );        
    }
     
   

## **See Also**

 - [sendEmail()](../../../../scripting-apis/server-side-api/ssj-object/miscellaneous/sendemail2)

 - [mobileEmail()](../../../../scripting-apis/client-api/app-functions/mobileemail)

'Link' property available with:

 - [Action Button (Mobile)](../../../../product-guide/widget-properties-events/mobile/mobaction-button)

 - [Action Button (Common)](../../../../product-guide/widget-properties-events/mobile/mobaction-button)

 - [Image](../../../../product-guide/widget-properties-events/common/image)

 - [Label (Common)](../../../../product-guide/widget-properties-events/common/label)

 - [Label (Mobile)](../../../../product-guide/widget-properties-events/mobile/moblabel)

