---
title: "Complete Example App"
active_menu_item: developers
class_name: developers
full_width: true
---

There is a sample App ready to download and install that uses most of Application Craft's API methods.

To download the App, [click here](/apps/app_Push.acft) and then be sure to follow the following instructions to tailor it for your own use.

##Instructions

1. Import the App into your AC account
1. In the onAppStarted event, you will need to modify the following lines
  - xtify.testXid - install and run your App on a mobile device. This will generate an XID, which you should use in the line xtify.testXid = "<yourXid>" line. More on this [here](/developers/documentation/ac-mobile-build-phonegap/ac-mobile-build/ac-build-plugins/xtify-push-notifications/your-app/xtify-app-testing/).
  - set the xtify.applicationKeyiOS ([read this](/developers/documentation/ac-mobile-build-phonegap/ac-mobile-build/ac-build-plugins/xtify-push-notifications/configuration/iOS/xtify-ios-application-key-ac/))and xtify.applicationKeyAndroid [read this](/developers/documentation/ac-mobile-build-phonegap/ac-mobile-build/ac-build-plugins/xtify-push-notifications/configuration/android/xtify-android-application-key-ac/) properties. More on this here.
  - depending on whether you are testing with an iOS or Android device, set the xtify.applicationTestPlatform property to 'ios' or 'android'.

			function handler_application_onAppStarted(){
			    
			    // This code block is not required at all. Is used if you want to test via the desktop
			    // Set Up our Test XID so we can play with Location and Tags on the desktop
			    xtify.testXid = "50e4256e87242167c695e34d";
			    xtify.applicationKeyiOS = "54dec04a-9754-4ffc-be65-ecd00a482269";
			    xtify.applicationKeyAndroid = "";
			    xtify.applicationTestPlatform = "ios";

			    // This function gets called once the Xtify push data has been fully processed and received
			    xtify.startedCallback = notificationReceived;
			    
			    // This must be called to get things going
			    xtify.init();
			    
			    // So we can see things in the Weinre debugger
			    window["objNotify"] = xtify;
			}

3. In your Server Side Javascript code, modify the following code so you are using your API. You will have needed to generate an Advanced key to use the Push Notification API.

		 /////////////////// ATTENTION CAMPERS : YOU MUST SET YOUR XTIFY API KEY BELOW
		const _apiKey = "1234567-c1be-47b3-ab57-5dc8b34878b5";

		// This is all you need to make it secure
		function xtifySend(objXtify) {
		    objXtify.apiKey = _apiKey;
		    return  ssj.httpRequestAdv("http://api.xtify.com/2.0/push", "POST", JSON.stringify(objXtify), "JSON", {"Content-Type":"application/json"});   
		}




