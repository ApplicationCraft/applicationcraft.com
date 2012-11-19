---
title: "Configuring your app"
active_menu_item: developers
class_name: developers
full_width: true
---


Having set up your push notification keys there are 3 final steps to take:

## 1: Register the Xtify callback within your app.

This is required for the push notifications sent by Xtify to register to your app. In most cases this would be handled on the On App Started Event.

If your App is not running, it will be automatically started if the user requests it. At this point, you should handle things within the On App Started event as shown below. From there you can inspect the notification data and process it as you require.

## Example

    function handler_application_onAppStarted(){
        window.plugins.XtifySDK.start(
        function(data){
    if (WiziCore_Helper.isAndroid()){
     addToLog( '<h2> Notification Received. Title: ' + data["com.xtify.sdk.NOTIFICATION_TITLE"] + ' <br /> ' + ' Content: ' + data["com.xtify.sdk.NOTIFICATION_CONTENT"] + "</h2>"); 
    }
    else if (WiziCore_Helper.isIOS()){
     addToLog( '<h2> Notification Received. "action-loc-key": ' + data.aps.alert["action-loc-key"] + ' <br /> ' + ' Badge: ' + data.aps.badge+ ' <br /> ' + ' Content: ' + data.aps.alert["body"] + "</h2>"); 
    }
        }, function (error) {
    addToLog( '<h2> Error occurred while starting Xtify SDK. </h2>' );
        });
    }
     
    function addToLog(text){
        var txt = app.getData("logLabel");
        app.setData("logLabel", text + "<br/>" + txt); // Append the notification information to a label widget
    }
   

## 2: Set up the Xtify Push Notification plugin properties.

![XtifyPlugin](/img/docs/xtifyplugin.zoom74.png)

Enable the plugin - Set Enabled property to 'True'.

If you are building for Android:

 - enter in the Android App key - created from Xtify.

 - enter in the Android Sender ID - created from Google Cloud Messaging.

If you are building for iOS

 - enter in the iOS App Key - created from Xtify.

## 3: Set the Application ID of your app to the same as the Application Name used in creating the Application Keys in Xtify.

Go to App Properties: PhoneGap Options.

![XtifyAppProps](/img/docs/xtifyappprops.zoom75.png)

Enter in the Application Name defined in Xtify to the Application ID property.

You are now ready to build your app using [AC Mobile Build](/developers/documentation/ac-mobile-build-phonegap/ac-mobile-build/) .
