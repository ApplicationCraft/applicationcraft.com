---
title: "Rich Notifications"
active_menu_item: developers
class_name: developers
full_width: true
---

Rich Notifications allow you to send HTML content from the Xtify Console so images, videos and other content can be displayed when the App starts up.

In order to process these within your App, you should check the xtify.richId value in your callback function. xtify.richId contains the value of the richId received by your App.

	function getRichInfo() {
	    xtify.rich.getId(xtify.richId, function (error, data) {
	        if(error) 
	            addToLog("Error:" + error + "D: " + JSON.stringify(data));
	        else {
	        	// The following access the available fields
	            addToRichLog("Version: " + data.ver);
	            addToRichLog("mid: " + data.messages[0].mid);            
	            addToRichLog("Date: " + data.messages[0].date);
	            addToRichLog("ActionType: " + data.messages[0].actionType);            
	            addToRichLog("ActionData: " + data.messages[0].actionData);            
	            addToRichLog("ActionLabel: " + data.messages[0].actionLabel;
	            addToRichLog("Subject: " + data.messages[0].subject);
	            // And this is the actual HTML content
	            // It is up to you what do do with it.
	            app.setValue("htmlRich", data.messages[0].content);

	        }
	    });
	}

	// Your callback function
	function notificationReceived() {
	    if(xtify.richId!=="") {
	    	getRichInfo();
	    }
	}

	// Your onAppStarted event
	function handler_application_onAppStarted(){
	    
	    // This function gets called once the Xtify push data has been fully processed and received
	    xtify.startedCallback = notificationReceived;
	    
	    // This must be called to get things going
	    xtify.init();
	    
	}

##Sending Rich Notifications via the API
If you want to send notifications from your own App, then look for xtify.push.quickRichNotification() in the [Location API](/developers/documentation/ac-mobile-build-phonegap/ac-mobile-build/ac-build-plugins/xtify-push-notifications/apis/xtify-notification-api/) page.




