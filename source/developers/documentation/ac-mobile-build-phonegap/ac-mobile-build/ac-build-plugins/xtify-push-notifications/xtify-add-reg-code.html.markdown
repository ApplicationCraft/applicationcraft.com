---
title: "Add Registration Code to your app"
active_menu_item: developers
class_name: developers
full_width: true
---

You are now one step away from success. Before you can send a notification the device needs to be registered with Xtify.

To do this include the following code in the "On App Started" event. This simple snippet of code is just for testing purposes. We go into more detail of how you can also interact with notifications in your app are covered in the [Notification handling code](/developers/documentation/ac-mobile-build-phonegap/ac-mobile-build/ac-build-plugins/xtify-push-notifications/notification-handling-code) chapter later on.


	function handler_application_onAppStarted() {
  
    // Special Xtify callback registration
    	window.plugins.XtifySDK.start()
    }

##Build your App

Now you are ready to build the final App, ready for testing. Do this from the AC Moble Build screen in the AC Console and install to your device. This will then register the device with Xtify and you are ready to send a push notification.