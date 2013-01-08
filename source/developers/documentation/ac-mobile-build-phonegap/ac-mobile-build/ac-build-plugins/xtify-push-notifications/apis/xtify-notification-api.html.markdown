---
title: "Notification API"
active_menu_item: developers
class_name: developers
full_width: true
---

Xtify provides an API that lets you send out notifications from your App. This API is rather sensitive to providing the data in the correct format, so we have provided an API that makes things a lot easier.

There are two main methods we provide

- **xtify.push.testNotification()** - this lets you send out a simple test Notification with a single call. You cannot control all details, but it covers most things.

- **xtify.push.sendNotification()** - this gives you full control over all details

##Xtify Push API
It is useful to look at the Xtify Push API documentation, which [can be found here](http://developer.xtify.com/display/APIs/Push+API+2.0). This shows the full details of the object that is send to the API call.

##Secure Server Side Call
In order to not risk your Xtify API being discovered, you should execute the actual API call itself from an Application Craft SSJ call. Simply copy and paste the following code block into your App.

	/////////////////// ATTENTION CAMPERS : YOU MUST SET YOUR XTIFY API KEY BELOW
	const _apiKey = "123456-c1be-47b3-ab57-5dc8b34878b5";

	// This is all you need to make it secure
	function xtifySend(objXtify) {
	    debugger;
	    objXtify.apiKey = _apiKey;
	    return  ssj.httpRequestAdv("http://api.xtify.com/2.0/push", "POST", JSON.stringify(objXtify), "JSON", {"Content-Type":"application/json"});   
	}

Note that you need to set your API key. This can be found in the Xtify Console in the App Manager -> API Keys Manager menu item.

##xtify.push.testNotification(sendAudience, sendAudienceData, txtMessage, txtButton, customData, action, callback)

You should use 'undefined' for any optional parameters that you do not want to pass.

- sendAudience (required) - one of the following string values
 - XIDS (requires sendAudienceData to be an array of XIDS) sends the notification to any XIDS specified
 - TAGS (requires sendAudienceData to be an object of format {hasTags:["tags"], notTags: ["tags"]}, where hasTags is an array of tags that must be present for notifications to be sent, and notTags are tags that may not be present. Either key can be empty.
 - ALL (requires sendAudienceData to be empty) and sends the notification to all users
- sendAudienceData (required for XIDS and TAGS)- see above
- txtMessage (required) - the message content
- txtButton (optional) - the text to appear on the button shown in the notification popup.
- customData (optional) - a JSON object that gets passed with the notification. We always add a custom data record for testing purposes even if it is not required.
- action (optional) - please refer to the [Xtify Push API documentation](http://developer.xtify.com/display/APIs/Push+API+2.0) if you want to set this. 
- callback (optional) - your own callback to receive return data from the call.

##xtify.push.prepare(sendAudience, sendAudienceData, txtMessage, txtButton, customData, action, callback)
If you want to control the notification fully, you will need to use xtify.push.fullNotification(). However, before you call this, you should call xtify.push.prepare(). This prepares and returns the Xtify Push object which you can then modify (you will need to refer to the [Xtify Push API documentation](http://developer.xtify.com/display/APIs/Push+API+2.0)).

The parameters are the same as for xtify.push.testNotification().

##xtify.push.fullNotification(xtifyObject, callback)
Call this with the object returned from tify.push.prepare().

##Examples
	function handler_btnPushMessage_onClick(mouseev) {
	    xtify.push.quickNotification("XIDS", xtify.testXid, "Message text", "Click Me", undefined, undefined, genericCallback);   
	}

	function handler_btnPrepare_onClick(mouseev){
	    var x = xtify.push.prepare("XIDS", xtify.testXid, "Message text", "Click Me", undefined, undefined, genericCallback);   
	}

	function handler_btnSend_onClick(mouseev){
	    var x = xtify.push.prepare("XIDS", xtify.testXid, "Message text", "Click Me", undefined, undefined, genericCallback);     
	    xtify.push.fullNotification(x, genericCallback);   
	}

	function handler_btnSendAll_onClick(mouseev){
	    xtify.push.quickNotification("ALL", undefined, "Sent to all", "Click Me", {"color": "green"}, undefined, genericCallback);   
	}

	function handler_btnSendTagged_onClick(mouseev){
	    xtify.push.quickNotification("TAGS", {withTags:["MALE"], withoutTags:[""]}, "Sent to Males", "Click Me", undefined, undefined, genericCallback);   
	}
