---
title: "Geo targeted notifications"
active_menu_item: developers
class_name: developers
full_width: true
---

Xtify lets you send Geolocation targeted notifications. To do this, you will need to perform actions in your App as well as in Xtify once you are ready to send out geo targeted notifications.

##Changes to your App

- Get your current location
- Get the XID of your App's running instance
- Call the Xtify Location API

In Xtify's dashboard, make sure you get the Application Key for your App. You will need it in your code.

**Important:** if you get a parse error back from the Xtify API call, you may have the date formatted incorrectly. Xtify is very specific about the format. Do not include the 'Z' UTC character in it.

##Example
The following code example illustrates how this is done.

	function handler_btnSendLocation_onClick(mouseev){
	    // Get the current position from Phonegap
	    navigator.geolocation.getCurrentPosition(
	        function(pos) {
	        	// Prepare an object to send to Xtify
	            var gLoc = {
	            	// Make sure you modify the App key to your own App
	                appKey : "12345abcde-9754-4ffc-be65-ecd00a482269", 
	                lat : pos.coords.latitude , 
	                lng : pos.coords.longitude, 
	                ts : isoCurDateTime            
	            }; 
	            // Now get the Xtify XID of this instance of the App
	            window.plugins.XtifySDK.getXid(function(xid) {
	                // Now call the Xtify API to tell it where I am
	                var apiUrl = "http://api.xtify.com/2.0/location/" + xid + "/update";
	                app.httpRequest(apiUrl, "POST", function(data, error, httpResponse){
	                    // Callback from the Xtify server
	                   	// Contains tags for the User as identified by the XID
	                }, JSON.stringify(gLoc), "JSON", {"Content-Type":"application/json"}, {})
	            }, function(error) {
	                // Error getting the XID
	            });            
	        }, 
	        function(){
	            // Error getting location
	        });
	                                    
	}


##What to do in Xtify
Once your App is up and running, it will send the current location to Xtify's servers. It will only do this while your App is actually running.

First of all, you should set up some locations in the Xtify dashboard as shown below. You can also set up location groups consisting of several locations which can be used at the notification stage.

![xtify location setup](/img/docs/xtify-location.png)

Next, you need to set up a Target as shown below. Create a New Target first. This will allow you to define which location(s) to target.

![xtify target setup](/img/docs/xtify-targets.png)

Once you have set one up, you can manage it from the Target Manager. This will allow you to edit an existing Target definition as well as configuring your notification content. 

Once you switch a Target live, notifications will be sent out automatically by Xtify as people move into a 'Geofence'.

##Define a Window rule
For Geofenced notifications, you must define a Window rule in the Target manager. This ensures that notification go out on certain days and times within a specified date range.




