---
title: "Sending Push Notifications to your apps"
active_menu_item: developers
class_name: developers
full_width: true
---


This is all handled from your Xtify Console through your browser.

[https://console.xtify.com/new-push](https://console.xtify.com/new-push)

![XtifyConsole](/img/docs/xtifyconsole.zoom59.png)

[https://console.xtify.com/notification-summary](https://console.xtify.com/notification-summary)

![XtifyConsole1](/img/docs/xtifyconsole1.zoom59.png)

## Testing your Notifications

Xtify also allow you to test your notifications to your development devices [https://console.xtify.com/testing](https://console.xtify.com/testing)

![XtifyTesting](/img/docs/xtifytesting.zoom62.png)

Create your Xtify application keys using the Development/Testing option and when the app is opened, it will register the device in Xtify devices list and assign it an ID.

Go to the Xtify testing console ( [https://console.xtify.com/testing)](https://console.xtify.com/testing))

Check your device ID and click "Deliver Test Notification", fill in the notification content.

![XtifyTest](/img/docs/xtifytest.zoom64.png)

Select the appropriate Notification Action and if required, additional fields to complete will be presented.

When completed, press 'Send' and the notification will be received on your device.

If you are working with multiple devices for testing you can check the id being used on your specific device by using:

    window.plugins.XtifySDK.getXid(function(xid){}, function(error){});
   

This is useful if you want to quickly get the Device ID so you can put use it within Xtify.

