---
old_url: configuring_your_app.htm
title: "Event handling in your App"
active_menu_item: developers
class_name: developers
full_width: true
---

To add some notification handling within your App, you need to add some code to your AC App.

## 1: Register the Xtify callback within your app.

This is required for the push notifications sent by Xtify to be handled correctly by your app. In most cases this would be handled on the On App Started Event. Take a look at this code

## Example

    function handler_application_onAppStarted(){
        window.plugins.XtifySDK.start(function(data){
            if (WiziCore_Helper.isAndroid()){
                var title = data["com.xtify.sdk.NOTIFICATION_TITLE"];
                var content = data["com.xtify.sdk.NOTIFICATION_CONTENT"];
            }
            else if (WiziCore_Helper.isIOS()){
                var locKey = data.aps.alert["action-loc-key"];
                var badge = data.aps.badge;
                var body = data.aps.alert["body"]; 
            }
        }, function (error) {
            // Handle error here
        });
    }

##Available Methods
You will see from the above example code that there are differences between the data that comes in for Android and iOS. This is because the Push mechanisms offer different features from one another.

The following sections explain the ways to access

- iOS specific methods
- Android specific methods
- common methods



