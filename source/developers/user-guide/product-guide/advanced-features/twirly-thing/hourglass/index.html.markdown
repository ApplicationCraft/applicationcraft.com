---
title: "Twirly Thing/Hourglass"
active_menu_item: developers
class_name: developers
full_width: true
---


The "twirly thing" hourglass can be applied to any Widget object, including the entire app object. Whenever data is being loaded from a View the twirly thing will automatically be shown but you can also display this programmatically using [app.twirlyThing()](../../../../scripting-apis/client-api/app-functions/twirlything) for any widget and also for page transitions.

Please note that the Twirly Thing will have no visible effect if used on the On Page Prepare event as this is called before the page content is drawn

The [Display Hourglass Over](display-hourglass-over) property allows you to control how the [Twirly Thing](twirly-thing) is shown within your app. You can have it show over a Page in one part of your form, and over specific Widgets in other parts of the form.

## Example

We have set the App [Twirly Thing](twirly-thing) properties and you can see in the preview area how it will look.

![twirlythingexample](/img/docs/twirlythingexample.zoom84.png)

We have set the App display hourglass property to 'Widget' so it will show over individual widgets and where we are going to show the [Twirly Thing](twirly-thing) we have set the property to 'Inherit'.

1: As a button is pressed to 'jump' to another page, to show the twirly thing:

    function handler_btnCollect_onClick(mouseev){
    app.twirlyThing(app, true);
    setTimeout(function(){   // to show the twirly thing for 100ms before going to the next page
    // other actions
    app.pageJump("page2");
    }, 100);
    }
    function handler_SummaryPage_onPageShow(){
    app.twirlyThing(app, false);
    }
    function handler_btnUpload_onClick(mouseev){
    // Prepare an object to pass to the SSJ function
    p = {action:"AddRecord", data:_allData};
    app.twirlyThing(app, true, "Uploading Data"); // Note the new 'text' to show
    // Call the SSJ script
    try {
    app.callSSJ("acUploadData", function(error, data) {
    if(error) {
    // Error from SSJ, so display and do nothing
    app.twirlyThing(app, false);
    app.showMessage("SSJ Error", "Error (" + data.code + ") " + data.message);
    }
    else {
    app.twirlyThing(app, false);
    app.showMessage("Success", "Data has been stored successfully on the server.");
    }
    }, [p]);
    }
    catch(e) {
    app.showMessage("Connectivity Warning", "Unable to upload data. You are not connected to the Internet.");
    }
    }
   

and on the target page 'On Page Show' event, to hide the twirly thing:

2: As we upload data to an external database we want to show the twirly thing over the with a different text message as the process commences and then hide it when the upload is successfully completed. Please note that this is being handled in the Client Side functions and not the Server Side functions

## In This Section:

 - [Twirly Thing](twirly-thing)

 - [Display Hourglass Over](display-hourglass-over)

