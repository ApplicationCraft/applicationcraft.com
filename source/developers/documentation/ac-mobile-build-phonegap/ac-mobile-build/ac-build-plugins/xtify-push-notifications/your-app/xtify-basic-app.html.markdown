---
title: "A Basic Push App"
active_menu_item: developers
class_name: developers
full_width: true
---

A typical App will have the following code. Note that the important calls must be placed within the onAppStarted() event.

	function notificationReceived() {
	    // This function gets called when a Notification is received
	    // You would typically read and process some of the data  
	    // from the xtify object which is shown below
	}

	function handler_application_onAppStarted(){
	    
	    // This code block is not required at all. Is used if you want to test via the desktop
	    // Set Up our Test XID so we can play with Location and Tags on the desktop
	    xtify.testXid = "50e4256e87242167c695e34d";
	    xtify.applicationKeyiOS = "54dec04a-9754-4ffc-be65-ecd00a482269";
	    xtify.applicationKeyAndroid = "59abcde-9754-4ffc-be65-ecd00a482269";
	    xtify.applicationTestPlatform = "ios";

	    // If you want to handle things when a notification is received, then
	    // specify your own callback function
	    xtify.startedCallback = notificationReceived;
	    
	    // This must be called to get things going
	    xtify.init();
	    
	    // If you want to inspect the xtify object in the Weinre debugger
	    window["objNotify"] = xtify;
	    
	}

##The xtify object
You may want to refer to your notification data when a notification is received by your App. It is populated when you call xtify.init() as shown above. You would normally access the xtify object from your xtify.startedCallback function as shown above.

    var xtify = {
        // The notification object is populated by xtify.init()
        // after a notfication is received
        notification: {
            content: "", // Main Message
            action: "", // Action Code
            ios: {
                // Only populated if iOS
                badgeCount: "", // Amount to increment badge count by
                sound: ""
            },
            android: {
                / Only populated if Android
                title: "",
                data: ""
            },
            // Any custom JSON data send as special payload will appear here
            custom: {}
        },    
    };

