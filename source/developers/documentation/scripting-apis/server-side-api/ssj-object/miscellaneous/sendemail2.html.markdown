---
title: "sendEmail()"
active_menu_item: developers
class_name: developers
full_width: true
---


**sendEmail** (message,optional smtpPar)

## Parameters

<table>
<tr>
<td width="165">
{object} message

</td>
<td width="12">
</td>
<td width="703">
The mail message to send

</td>
</tr>
<tr>
<td width="165">
{object} smtpPar

</td>
<td width="12">
</td>
<td width="703">
Where you can define the SMTP parameters to send the email. If not specified the current Smtp Parameters as set specified via the Console will be used

</td>
</tr>
</table>
## Returns

Nothing.

## Description

This sends email specified as a message object.

 - To send HTML email, set isHTML to true.

 - Attachments that have been uploaded to the app using the [Upload Button](/developers/documentation/product-guide/widget-properties-events/mobile/upload-button) or [File Upload](/developers/documentation/product-guide/widget-properties-events/advanced/file-upload) can also be attached to the email referencing the URL of the uploaded file.

 - If there is an error of any sort, an exception will be thrown.

The system will send emails out using the [SMTP settings](/developers/documentation/product-guide/the-console/console-tabs/more/account-variables/smtp-parameters/) as defined in the AC Console.

The message object has the following structure.

    var message = {
      from: { address: 'john@johnson.com', name: 'John Johnson'},
      to: { address: 'frank@johnson.com', name: 'Frank Johnson'},
      cc: [{ address: 'frankx@jones.com', name: 'Frankx Jones '},{ address: 'joe@jones.com', name: 'Joe Jones'}],
      bcc: ['steve@mail.com','eric@mail.com'],
      replyTo: 'mail@mail.com',
      subject: 'Some subject',
      body : 'Mail \n body \n multiline \n text!',
      isHtml : (optional)false,
      attachments : [upload]  // URL of the uploaded file referenced in Client side script
    };
     
    smtpPar = {
    "host": 'smtp.mail.yahoo.com:465',
    "user": 'your_email',
    "password": 'your_password',
    "security": 'ssl'
    };
     
   

The smtpPar object has the following structure.

## Example

Client Side Script:

    var upload;
     
    function handler_actionBtn_onClick(mouseev){
        app.callSSJ("send", function(error, res){
            if(!error){
                alert('Email Sent');
            } else {
                alert('Error unable to send email');
                    }
        }, [upload]);
    }
     
    function handler_fileUpload_onUploaded(error, url){
        if(!error){
            // Collect the URL of the uploaded file
            upload = url;  
                }
        else{
            alert("Unable to Upload File");
        }
    }
     
    function send(upload){
        var message = {
          from: { address: 'john@johnson.com', name: 'John Johnson'},
          to: { address: 'frank@johnson.com', name: 'Frank Johnson'} || [],
          cc: { address: 'steve@johnson.com', name: 'Steve Johnson '} || [],
          bcc: ['james@johnson.com'],
          replyTo: ['james@johnson.com'],
          subject: 'Some subject',
          body : 'Mail \n body \n multiline \n text!',
          isHtml : false,
          attachments : [upload]
        };
        smtpPar = {
        "host": 'smtp.mail.yahoo.com:465',
        "user": 'your_email',
        "password": 'your_password',
        "security": 'ssl'
        };
        ssj.sendEmail(message,smtpPar);
    }
   

Server Side Script:

## See Also

 - [SMTP Parameters](/developers/documentation/product-guide/the-console/console-tabs/more/account-variables/smtp-parameters/)
 - [callSSJ()](/developers/documentation/scripting-apis/client-api/app-functions/callservice)

