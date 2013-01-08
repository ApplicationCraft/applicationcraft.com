---
title: "Add Registration Code to your app"
active_menu_item: developers
class_name: developers
full_width: true
---

You are now one step away from success. Before you can send a notification the device needs to be registered with Xtify.

To do this include the following code in the "On App Started" event. This simple snippet of code is just for testing purposes and we will change the onAppStarted event later on.


	function handler_application_onAppStarted() {
  
    // Special Xtify callback registration
    	window.plugins.XtifySDK.start();
    }

##Build your App
Now you are ready to build the final App, ready for testing. Do this from the AC Mobile Build screen in the AC Console and install to your device. This will then register the device with Xtify and you are ready to send a push notification.

##Put your App into Debug Mode
Although this is not strictly necessary, you will probably want to enable debug mode in your Phonegap options.

This will allow you to make changes to your App as you go without having to rebuild it each time. [Click here](/developers/documentation/ac-mobile-build-phonegap/apps-developed-with-application-craft/acmb-debugging/) to see how to do this.
