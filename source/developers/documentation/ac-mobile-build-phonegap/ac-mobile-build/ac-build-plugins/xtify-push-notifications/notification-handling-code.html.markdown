---
title: "Notification handling code"
active_menu_item: developers
class_name: developers
full_width: true
---

When a Push Notification is received by the device, it can start up your App. Once the App starts, it can access all of the information associated with the notification. 

Your App should include the following code in the "On App Started" event. This passes a success and a fail callback function that is executed each time a notication is received. Your function will get called whether the App is already running or not.

    function handler_application_onAppStarted() {

      // Special Xtify callback registration
      window.plugins.XtifySDK.start(
        // Success Function
        function(data){
          // Android and iOS differ, so deal with each case
          if (WiziCore_Helper.isAndroid()){
            var title = data["com.xtify.sdk.NOTIFICATION_TITLE"];
            var content = data["com.xtify.sdk.NOTIFICATION_CONTENT"];
          } else {
            var locKey = data.aps.alert["action-loc-key"];
            var badge = data.aps.badge;
            var body = data.aps.alert["body"]; 
          }
          // And there are functions for both
        },
        // Error handling function
        function (error) {
          // Handle error here
        }
      );

    }

##The data object for an iOS device
You will notice that the success function gets data as the only parameter. This contains the following structure for iOS:

    data = {
      "aps" : { 
        "alert" : {
          "action-loc-key" : "Open",
          "body" : "Notification message text"
        },
        "badge" : badgeCount,
        "sound" : "Default"
      }, 
      "myData1" : someCustomData, 
      "myData2" : someMoreCustomData,
      "myDataN" : evenMoreCustomData
    };

As you will see in Xtify, the data size (values, not keys + values) cannot exceed 256 characters.

A Badge is the the number you see in the top left corner of your App. The Badge Count can be incremented when the Notification is sent. Badges need to be cleared by your App Code, as described in [Xtify API Methods](/developers/documentation/ac-mobile-build-phonegap/ac-mobile-build/ac-build-plugins/xtify-push-notifications/xtify-methods/)

##The data object for an Android device
The data structure for Android is different

    data = {
      "com.xtify.sdk.NOTIFICATION_TITLE" :  notificationTitle,
      "com.xtify.sdk.NOTIFICATION_CONTENT" : notificationContent,
      "com.xtify.sdk.NOTIFICATION_TYPE" : actionType,
      "com.xtify.sdk.NOTIFICATION_DATA" : actionData,    
      "myData1" : someCustomData, 
      "myData2" : someMoreCustomData,
      "myDataN" : evenMoreCustomData
    };

Where `actionType` is the action to undertake (for example 'com.xtify.sdk.OPEN_URL' ), and `actionData` is the data associated with the action type, so could be the URL to open.
