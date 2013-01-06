---
title: "Location API"
active_menu_item: developers
class_name: developers
full_width: true
---


Xtify lets you send geolocation targeted notifications. To do this, you will need to do things in your App as well as in Xtify.

##Testing in a regular browser
One thing that we found very useful early on was to be able to test things our from your App running on your desktop, rather than as a Native app. This let's you test out the actual Xtify console.

We have made this very easy indeed. All you do is make the following call, supplying a latitude and a longitude parameter as well as an optional callback function to monitor error or success.

	xtify.location.update(52.1856, -1.7946, myCallbackFunction);

Please refer to the [App Testing section](/developers/documentation/ac-mobile-build-phonegap/ac-mobile-build/ac-build-plugins/xtify-push-notifications/your-app/xtify-app-testing/) for information on adding the necessary code to your app.


##Production mode on the device
Production mode assumes that you have built your App using AC Mobile Build. 

When your App is running for real, you will almost certain want to use the GPS sensor to get the current location of the user. We have done the hard work for you here, so all you need do is

	xtify.location.update(myCallbackFunction);

Feel free to inspect the code that handles this in the xtify file you created.


##What to do in Xtify
Once your App is up and running, it will send the current location to Xtify's servers. 

###Set up Location points
First of all, you should set up some locations in the Xtify dashboard as shown below. You can also set up location groups consisting of several locations which can be used at the notification stage.

![xtify location setup](/img/docs/xtify-location.png)

###Create a Target
Next, you need to set up a Target as shown below. Create a New Target first. This will allow you to define which location(s) to target.

![xtify target setup](/img/docs/xtify-targets.png)

On the main screen, enter the relevant notification and platform details.

![xtify target setup](/img/docs/xtify-target-screen1.png)

Press next to move the the rule definition screen.

###Remove any existing rule elements
All you are going to want here is a Location and a Window rule, so get rid of any existing rules (like Frequency) by dragging them to the trash on the right side.

###Add a Location rule
Drag this from the top bar to the lower one and then configure it with your location(s). Note that you can also create Locations Groups from the Target menu bar and then select a group in the the Location rule.

###Set up Window Rule
Now do the same for the Window rule. This lets you set a time window to narrow down exactly when your notifications may get sent.

You should now see something like this.

![xtify target setup](/img/docs/xtify-target-rule.png)

###Activate it
Once you switch a Target live, notifications will be sent out automatically by Xtify as people move into a 'Geofence'.

###Testing
Once your Target definition is active, you can start testing. We recommend you start off with the testing approach explained at the top, as this let's you try things out on the desktop without having to build your app each time.

Switch to production as soon as you are comfortable that everything is working smoothly.




