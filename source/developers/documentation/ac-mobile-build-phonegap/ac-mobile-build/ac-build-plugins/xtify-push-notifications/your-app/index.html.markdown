---
title: "Your Push App"
active_menu_item: developers
class_name: developers
full_width: true
---

Once you have a basic App set up and you can send a notification to it, let's look at the more advanced things.

The first thing to do is to create a new file in your Code explorer (right click in the Code Explorer on the left and select Add File).

Next, copy and paste all of the following code into this new file. This code can be forgotten about in most cases. However, if you want to see what is going on, you can examine it and see how we have abstracted the Xtify APIs for you so things are really easy to use.


##Client Side Javascript


	// APPLICATION CRAFT XTIFY SUPPORT API
	// LAST UPDATED : 2013-01-04

	// Defines the xtify object
	var xtify = {
	    // The notification object is populated by xtify.init()
	    // after a notfication is received
	    notification: {
	        content: "",
	        action: "",
	        ios: {
	            badgeCount: "", // increment badge count, not total
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
	    testXid: undefined, // A test XID
	    startedCallback: undefined, // user callback fn once init() completed
	    badgeCount: undefined, // iOS only is the total badge count
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
	    location: {},
	    // Push object
	    push: {},
	    // Error handling
	    error: 0,
	    errorMessage: ""
	};


	/////////////// Top Level functions

	xtify.init = function () {

	    // Get the relevant Application Key
	    if(app.getPlatform()=="android") 
	        xtify.applicationKey = xtify.applicationKeyAndroid;
	    else if(app.getPlatform()=="ios") 
	        xtify.applicationKey = xtify.applicationKeyiOS;
	    else if(xtify.applicationTestPlatform=='ios')
	        xtify.applicationKey = xtify.applicationKeyiOS;
	    else if(xtify.applicationTestPlatform=='android')
	        xtify.applicationKey = xtify.applicationKeyAndroid;
	          
	    // Now do the bits that will only work if it is a Native app
	    if (app.getPlatform()=="android" || app.getPlatform()=="ios"){  
	        xtify.error=false;
	        xtify.errorMessage="";
	        
	        // Register the callback function when a notification is received
	        window.plugins.XtifySDK.start(
	            function (data) {
	                // Set Application Key and get standard values for iOS and Android discreetly
	                if (app.getPlatform()=="android"){
	                    xtify.notification.content = data["com.xtify.sdk.NOTIFICATION_CONTENT"];
	                    xtify.notification.action = data["com.xtify.sdk.NOTIFICATION_TYPE"];                
	                    xtify.notification.android.title = data["com.xtify.sdk.NOTIFICATION_TITLE"];
	                    xtify.notification.android.data = data["com.xtify.sdk.NOTIFICATION_DATA"]; 
	                }
	                else {
	                    xtify.notification.content = data.aps.alert.body;
	                    xtify.notification.action = data.aps.alert["action-loc-key"];
	                    xtify.notification.ios.badgeCount = data.aps.badge;
	                    xtify.notification.ios.sound = data.aps.sound; 
	                }   
	                // Now get any custom data passed in as a JSON object
	                var xtifyKeys = {"SN": 1, "aps" : 1, "com.xtify.sdk.NOTIFICATION_TITLE" : 1, "com.xtify.sdk.NOTIFICATION_CONTENT" : 1, "com.xtify.sdk.NOTIF_ACTION_TYPE" : 1, "com.xtify.sdk.NOTIF_ACTION_DATA" : 1};
	                xtify.notification.custom = {};
	                for (var key in data){
	                    if (xtifyKeys[key] === undefined)
	                        xtify.notification.custom[key] = data[key];
	                }
	                // Get XID
	                window.plugins.XtifySDK.getXid(function(xid) {
	                    xtify.xid = xid;
	                }, function(error) {
	                    xtify.xid = "Error";
	                    xtify.error = true
	                    xtify.errorMessage += "XID Error. "
	                });
	                // Get Badgecount
	                if(app.getPlatform=='ios') {
	                    window.plugins.XtifySDK.getSpringBoardBadgeCount(function(count) {
	                        xtify.badgeCount = count;
	                    }, function(error) {
	                        xtify.badgeCount = -1;
	                    });
	                }
	                else {
	                    xtify.badgeCount = 0;
	                }
	                // Get isRegistered
	                if(app.getPlatform=='android') {
	                    window.plugins.XtifySDK.isRegistered(
	                        function () {
	                            xtify.isRegistered = true;
	                        }, function (errorId) {
	                            xtify.isRegistered = false;
	                        }
	                    );
	                }    
	                else {
	                    xtify.isRegistered = false;
	                }            
	                
	                // Fire the User Function once all callbacks are executed 
	                var iCtr=0;
	                addToLog('Checking now...');
	                var readyInterval = window.setInterval(function(){
	                        addToLog('Count:' + iCtr);
	                        if(xtify.xid!==undefined && xtify.badgeCount!==undefined && xtify.isRegistered!==undefined) {
	                            xtify.isReady = true;
	                            window.clearInterval(readyInterval);
	                            if(xtify.startedCallback!==undefined) {
	                                xtify.startedCallback();   
	                                return;
	                            }
	                        }
	                        if(iCtr++>30) {
	                            xtify.isReady = false;
	                            window.clearInterval(readyInterval);
	                            if(xtify.startedCallback!==undefined) {
	                                xtify.startedCallback();   
	                                return;                 
	                            }
	                        }
	                    }, 100);               
	            }
	            , function (error) {
	                // Some sort of error from the Xtify start
	                xtify.error=true;
	                xtify.errorMessage=error;
	            });          
	    
	    }
	    else {
	        // Set the xtify XID to be the test xid as is desktop
	        xtify.xid = xtify.testXid;
	        // Fire the callback function
	        if(xtify.startedCallback!==undefined)
	            xtify.startedCallback(); 
	    }
	    
	};

	xtify.clearBadges = function (){
	    window.plugins.XtifySDK.clearNotifications();
	};

	////////////////// TAG FUNCTIONS /////////////////

	xtify.tag.read = function (callback) {
	    debugger;
	    var apiUrl = "http://api.xtify.com/2.0/tags/" + xtify.xid + "/tags?appKey=" + xtify.applicationKey;
	    xtify.tag.data = [];
	    app.httpRequest(apiUrl, "GET", function(data, error, httpResponse){
	        debugger;
	        if(error) {
	            if(callback!==undefined)
	                callback(true, httpResponse.responseText);
	        }
	        else {
	            xtify.tag.data = data.tags;
	            if(callback!==undefined)
	                callback(false, xtify.tag.data);
	        }
	    }, undefined, "JSON", {"Content-Type":"application/json"});     
	};

	xtify.tag.addNew = function(tag, callback) { 
	    var apiUrl = "http://api.xtify.com/2.0/tags/" + xtify.xid + "/addtag?appKey=" + xtify.applicationKey + "&tag=" + tag;
	    app.httpRequest(apiUrl, "POST", function(data, error, httpResponse){
	        if(error) {
	            if(callback!==undefined)
	                callback(true, httpResponse.responseText);
	        }
	        else {
	            if(callback!==undefined)
	                callback(false, ""); 
	        }
	    }, undefined, "JSON", {"Content-Type":"application/json"}); 
	};

	xtify.tag.set = function(tags, callback) { 
	    var apiUrl = "http://api.xtify.com/2.0/tags/" + xtify.xid + "/settag?appKey=" + xtify.applicationKey;
	    if(tags !== "") {
	        for(i=0; i<tags.length; i++) 
	            apiUrl += "&tag=" + tags[i];    
	    }
	    app.httpRequest(apiUrl, "POST", function(data, error, httpResponse){
	        if(error) {
	            if(callback!==undefined)
	                callback(true, httpResponse.responseText);
	        }
	        else {
	            if(callback!==undefined)
	                callback(false, ""); 
	        }
	    }, undefined, "JSON", {"Content-Type":"application/json"}); 
	};

	xtify.tag.remove = function (tags, callback) { 
	    var apiUrl = "http://api.xtify.com/2.0/tags/" + xtify.xid + "/untag?appKey=" + xtify.applicationKey;e;
	    if(tags !== "") {
	        for(i=0; i<tags.length; i++) 
	            apiUrl += "&tag=" + tags[i];    
	    }
	    app.httpRequest(apiUrl, "POST", function(data, error, httpResponse){
	        if(error) {
	            if(callback!==undefined)
	                callback(true, httpResponse.responseText);
	        }
	        else {
	            if(callback!==undefined)
	                callback(false, ""); 
	        }
	    }, undefined, "JSON", {"Content-Type":"application/json"}); 
	};

	xtify.tag.count = function (withTags, withoutTags, callback) { 
	    var apiUrl = "http://api.xtify.com/2.0/tags/count?appKey=" + xtify.applicationKey;
	    xtify.tag.data = [];
	    if(withTags !== "") {
	        for(i=0; i<withTags.length; i++) 
	            apiUrl += "&with=" + withTags[i];    
	    }
	    if(withoutTags !== "") {
	        for(i=0; i<withoutTags.length; i++) 
	            apiUrl += "&without=" + withoutTags[i];    
	    }    
	    app.httpRequest(apiUrl, "GET", function(data, error, httpResponse){
	        if(error) {
	            if(callback!==undefined)
	                callback(true, httpResponse.responseText);
	        }
	        else {
	            if(callback!==undefined)
	                callback(false, data.count);
	        }
	    }, undefined, "JSON", {"Content-Type":"application/json"}); 
	};


	xtify.tag.getActive = function (callback) { 
	    var apiUrl = "http://api.xtify.com/2.0/tags/active?appKey=" + xtify.applicationKey;
	    xtify.tag.data = [];
	    app.httpRequest(apiUrl, "GET", function(data, error, httpResponse){
	        if(error) {
	            if(callback!==undefined)
	                callback(true, httpResponse.responseText);
	        }
	        else {
	            xtify.tag.data = data.tags;
	            if(callback!==undefined)
	                callback(false, data.tags);
	        }
	    }, undefined, "JSON", {"Content-Type":"application/json"}); 
	};

	//////////////////////// LOCATTION API

	function _xtifySendLocation(gLoc, callback) {
	    var apiUrl = "http://api.xtify.com/2.0/location/" + xtify.xid + "/update";
	    app.httpRequest(apiUrl, "POST", function(data, error, httpResponse){
	        if(error) {
	            if(callback!==undefined)
	                callback(true, httpResponse.responseText);
	        }
	        else {
	            if(callback!==undefined)
	                callback(false, "");            
	        }
	    }, JSON.stringify(gLoc), "JSON", {"Content-Type":"application/json"});    
	}

	xtify.location.update = function(lat, lng, callback){
	    // Get Date in ISO format
	    var d=new Date();
	    var isoDate = d.toISOString();
	    isoDate = isoDate.substring(0,19) + "+0000";  
	    if(lat!==undefined && lng!==undefined) {
	        var gLoc = {
	            appKey : xtify.applicationKey, 
	            lat : lat , 
	            lng : lng,    
	            alt: "1",
	            accuracy: "1",
	            ts : isoDate            
	        }; 
	        _xtifySendLocation(gLoc, callback);
	    }
	    else {
	        // Get the current position from Phonegap
	        navigator.geolocation.getCurrentPosition(
	            function(pos) {
	                // Successful coordinates retrieved
	                var gLoc = {
	                    appKey : xtify.applicationKey, 
	                    lat : pos.coords.latitude , 
	                    lng : pos.coords.longitude,  
	                    accuracy : pos.coords.accuracy,
	                    alt : pos.coords.altitude,
	                    ts : isoDate            
	                };     
	                _xtifySendLocation(gLoc, callback); 
	            }, 
	            function(){
	                if(callback!==undefined)
	                    callback(true, "Unable to get GPS coordinates");
	            });
	    }                                
	};

	/////////////// PUSH FUNCTIONS
	/////////////// These functions require the standard SSJ function to be loaded

	function _preparePushObject(sendAudience, sendAudienceData, txtMessage, txtButton, customData, action, callback) {
	    // Basic parameter checking
	    if(sendAudience===undefined || sendAudience ==="") {
	        callback(true, "Invalid sendAudience parameter");
	        return false;
	    }
	    if(sendAudience!="XIDS" && sendAudience!="TAGS" && sendAudience!="ALL" ) {
	        callback(true, "Invalid sendAudience value (XIDS, TAGS or ALL)");
	        return false;        
	    }
	    if(sendAudience=="XIDS") {
	        if( typeof sendAudienceData === 'string' ) {
	            sendAudienceData = [ sendAudienceData ];
	        }          
	    }    
	    if(sendAudienceData===undefined && sendAudience !="ALL") {
	        callback(true, "Empty sendData parameter");
	        return false;
	    }    
	    if(sendAudience=="TAGS") {
	        debugger;
	        if(sendAudienceData.withTags===undefined || sendAudienceData.withoutTags===undefined) { 
	            callback(true, "TAGS requires both sendAudienceData.withTags and sendAudienceData.withoutTags");
	            return false;
	        }
	    }        
	    if(action===undefined || action==="")
	        action = "CUSTOM";
	    if(txtMessage===undefined || txtMessage==="")
	        txtMessage = "Some test content";
	    if(txtButton===undefined || txtButton==="")
	        txtButton = "Click Me";        
	    if(customData===undefined || customData==="" )
	        customData = {testKey1: "testData1", testKey2: "testData2"};
	        
	    // Base part of xtify object
	    // Note that custom data is sent differently for ios (data) and Android (payload)
	    // so we send in both formats
	    // Because of the odd way Xtify expects the data to be passed, we have to encode it
	    var tempStr = JSON.stringify(customData);
	    tempStr = tempStr.replace(/"/g, "'");
	    var x = {
	        appKey: xtify.applicationKey,
	        content: {
	            message: txtMessage,
	            payload: tempStr,
	            action: {
	                type: action,
	                data: tempStr,
	                label: txtButton
	            }
	        }
	    };
	    
	    // sendAudience specific parts
	    switch(sendAudience) {
	        case "XIDS":
	            x.xids = sendAudienceData;
	            break;
	        case "TAGS":
	            x.hasTags = sendAudienceData.withTags;
	            x.notTags = sendAudienceData.withoutTags;
	            break;
	        case "ALL":
	            x.sendAll = true;
	            break;
	    }
	    
	    // Return the obect
	    return x;

	}

	xtify.push.quickNotification = function(sendAudience, sendAudienceData, txtMessage, txtButton, customData, action, callback) {
	    
	    // Prepare the push object
	    var x = _preparePushObject(sendAudience, sendAudienceData, txtMessage, txtButton, customData, action, callback);
	    if(x===false)
	        return;
	 
	    // Call the Server Side Javascript function so the API key is kept secure
	    app.callSSJ('xtifySend', function(error, data, httpResponse) {
	        if(data.ResponseCode=="202")
	            callback(false, "");
	        else 
	            callback(true, data.ResponseCode + " " + data.Content);
	    }, [x]);    
	    
	};

	xtify.push.prepare = function(sendAudience, sendAudienceData, txtMessage, txtButton, customData, action, callback) {
	    
	    return _preparePushObject(sendAudience, sendAudienceData, txtMessage, txtButton, customData, action, callback);
	        
	};

	xtify.push.fullNotification = function(x, callback) {

	    // The user should call xtify.push.prepare() first and then make modifications to the object

	    // Call the Server Side Javascript function so the API key is kept secure
	    app.callSSJ('xtifySend', function(error, data, httpResponse) {
	        if(data.ResponseCode=="202")
	            callback(false, "");
	        else 
	            callback(true, data.ResponseCode + " " + data.Content);
	    }, [x]);         
	    
	};


##Server Side Javascript
If you intend to use the Notification API, you will need to add this to your Server Side Javascript code. Be sure to set your own API key.

	/////////////////// ATTENTION CAMPERS : YOU MUST SET YOUR XTIFY API KEY BELOW
	const _apiKey = "123456-c1be-47b3-ab57-5dc8b34878b5";

	// This is all you need to make it secure
	function xtifySend(objXtify) {
	    objXtify.apiKey = _apiKey;
	    return  ssj.httpRequestAdv("http://api.xtify.com/2.0/push", "POST", JSON.stringify(objXtify), "JSON", {"Content-Type":"application/json"});   
	}

