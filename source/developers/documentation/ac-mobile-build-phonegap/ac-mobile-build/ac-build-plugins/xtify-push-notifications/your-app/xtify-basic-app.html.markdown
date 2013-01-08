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
This object is important as it contains all important information. xtify.notification is populated by xtify.init() whenever a notification is received by your App. 

    // Defines the xtify object
    var xtify = {
        // The notification object is populated by xtify.init()
        // after a notfication is received
        notification: {
            content: "",
            action: "",
            ios: {
                badgeCount: "",
                sound: ""
            },
            android: {
                title: "",
                data: ""
            },
            custom: {}
        },    
        isReady: false, // true once xtify.init() has completed
        xid: undefined, // Unique App Instance ID
        startedCallback: undefined, // user callback fn once init() completed
        badgeCount: undefined, // iOS only
        isRegistered: undefined, // Android Only
        applicationKeyAndroid: "", // Android Xtify Application Key
        applicationKeyiOS: "", // Android Xtify Application Key
        applicationKey:"", // Do not use, set by AC
        applicationTestPlatform: "", //can be 'ios' or 'android'
        // tag object, gets populated with Tag functions
        tag: {
            // tag data, populated by certain tag api methods
            data:""
        },
        // location object, populated by locatioo.update()
        location: {}
    };

