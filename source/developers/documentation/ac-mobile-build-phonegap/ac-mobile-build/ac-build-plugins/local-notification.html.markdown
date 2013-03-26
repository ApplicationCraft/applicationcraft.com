---
title: "Local Notification"
active_menu_item: developers
class_name: developers
full_width: true
---


The Local Notification plugin allows you to send notifications that originate from the device itself as opposed to somewhere outside the device. Notifications can be sent immediately or scheduled. Optional callback functions are available.

For **iOS**, an application can specify a sound file along with an alert message or badge number. The sound file should contain a short, distinctive sound. At the same moment iOS displays the alert or badges the icon, it plays the sound to alert the user to the incoming notification.

**iOS** Notification alert messages can have one button instead of two. In the latter case, the action button is suppressed. The user can only dismiss these kinds of alerts. (See <a href="http://developer.apple.com/library/mac/#documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/WhatAreRemoteNotif/WhatAreRemoteNotif.html">here</a> for more information).

If building apps for Android and iOS usage, with the different parameters available see [getPlatform](/developers/documentation/scripting-apis/client-api/app-functions/getplatform/) where you can detect the platform type, and then call the relevant parameters.

## Build Support: 
 - Android: Supported for all [Phonegap Version](/developers/documentation/ac-mobile-build-phonegap/apps-developed-with-application-craft/enabling-device-features/)
 
 - iOS: Supported for all [Phonegap Version](/developers/documentation/ac-mobile-build-phonegap/apps-developed-with-application-craft/enabling-device-features/)
 
 - Windows: Not currently supported.

## HTML5+CSS+JS Apps not developed in Application Craft

If you have developed your App outside Application Craft then please do the following

 - In your index.html include `LocalNotification.js`
           
 - In your config.xml add `<gap:plugin name="LocalNotification" version="1.0.0" />`

You should replace x.y.z in version='x.y.z' depending on which version of Cordova you are using for your App. Please refer to the list below

 - Cordova 1.6.0-1.8.0 use "1.0.0"

 - Cordova 2.0.0 or later use "2.0.0"

## Apps Developed with Application Craft

<table>
<tr>
<td width="170">
Plugin Name

</td>
<td width="17">
</td>
<td width="755">
The name of the plugin - Local Notification

</td>
</tr>
<tr>
<td width="170">
Enabled

</td>
<td width="17">
</td>
<td width="755">
True/False(default). Select True to use a plugin in your app

</td>
</tr>
<tr>
<td width="170">
Show 'not native' warning

</td>
<td width="17">
</td>
<td width="755">
True(default)/False. If True will present a message to users if the app is not being run as a Native App.

</td>
</tr>
<tr>
<td width="170">
Plugin Files

</td>
<td width="17">
</td>
<td width="755">
Define sound files to use in your notifications from your account resources. .mp3 and .wav files required for Android, .caf, .wav or .aiff files for iOS (see <a href="http://developer.apple.com/library/mac/#documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/IPhoneOSClientImp/IPhoneOSClientImp.html#//apple_ref/doc/uid/TP40008194-CH103-SW6">here</a> for more information). Please note that sound file names cannot start with a number, (ie 8mysound.mp3 is not allowed, mysound8.mp3 is allowed).

</td>
</tr>
</table>


## Android Parameters

<table>
<tr>
<td width="168">
date

</td>
<td width="21">

</td>
<td width="691">
The notification date as a javascript object.
</td>
</tr>
<tr>
<td width="168">
message

</td>
<td width="21">

</td>
<td width="691">
The notification message.

</td>
</tr>
<tr>
<td width="168">
id

</td>
<td width="21">

</td>
<td width="691">
The notification id, must be integer.

</td>
</tr>
<tr>
<td width="168">
repeat

</td>
<td width="21">

</td>
<td width="691">
The repeat value, see Repeat values:

</td>
</tr>
<tr>
<td width="168">
sound
</td>
<td width="21">

</td>
<td width="691">
The name of sound file to play, set in options "Plugin files"

</td>
</tr>

</table>

## iOS Parameters

<table>
<tr>
<td width="168">
date

</td>
<td width="21">

</td>
<td width="691">
The notification date as a javascript object.
</td>
</tr>
<tr>
<td width="168">
message

</td>
<td width="21">

</td>
<td width="691">
The notification message.

</td>
</tr>
<tr>
<td width="168">
hasAction

</td>
<td width="21">

</td>
<td width="691">
true/false. Set to true to show an action button.

</td>
</tr>
<tr>
<tr>
<td width="168">
action

</td>
<td width="21">

</td>
<td width="691">
The action text.

</td>
</tr>
<tr>
<td width="168">
badge

</td>
<td width="21">

</td>
<td width="691">
Set the Badge Count to the app icon.

</td>
</tr>
<td width="168">
id

</td>
<td width="21">

</td>
<td width="691">
The notification id, must be integer.

</td>
</tr>
<tr>
<td width="168">
repeat

</td>
<td width="21">

</td>
<td width="691">
The repeat value, see Repeat values:

</td>
</tr>
<tr>
<td width="168">
sound
</td>
<td width="21">

</td>
<td width="691">
The name of sound file to play, set in options "Plugin files"

</td>
</tr>

</table>

## Repeat Values
<table>
<tr>
<td width="168">
LocalNotification.NSSecondCalendarUnit

</td>
<td width="21">

</td>
<td width="691">
Repeat every second.
</td>
</tr>
<tr>
<td width="168">
LocalNotification.NSMinuteCalendarUnit

</td>
<td width="21">

</td>
<td width="691">
Repeat every minute.

</td>
</tr>
<tr>
<td width="168">
LocalNotification.NSHourCalendarUnit

</td>
<td width="21">

</td>
<td width="691">
Repeat every hour. 

</td>
</tr>
<tr>
<td width="168">
LocalNotification.NSDayCalendarUnit

</td>
<td width="21">

</td>
<td width="691">
Repeat every day. 

</td>
</tr>
<tr>
<td width="168">
LocalNotification.NSWeekCalendarUnit
</td>
<td width="21">

</td>
<td width="691">
Repeat every week. 

</td>
</tr>

</table>


## Examples

To start the plugin listener:

    function handler_application_onAppStarted(){
    	plugins.localNotification.start();
	}

To cancel all notifications:

	plugins.localNotification.cancelAll(successCallback, failureCallback);

To cancel notification by id:

	plugins.localNotification.cancel( app.getData("text1"), successCallback, failureCallback);   // the notification id being stored in widget 'text1'

### Android

To send a notification immediately:

	 plugins.localNotification.addPresent({ 
        message: 'This is an immediate notification #1;, 
        id: 1, 
        sound:'horn.wav'
    },successCallback, failureCallback);    

To schedule a notification to be sent in one minute:

	plugins.localNotification.addSchedule({ 
        date : new Date(),
        message: 'This is a scheduled notification #2', 
        id: 2, 
        sound:'horn.wav',
        repeat : LocalNotification.NSMinuteCalendarUnit
    },successCallback, failureCallback); 

## iOS

To send a notification immediately:

	 plugins.localNotification.addPresent({ 
        message: 'This is an immediate notification #1, 
        badge: 1, 
        id: 1, 
        sound:'horn.caf',
        action : "Show me" 
    }, successCallback, failureCallback); 

To schedule a notification in one hour:

	 plugins.localNotification.addSchedule({ 
        date : new Date(),
        message: 'This is a scheduled notification #2', 
        badge: 1, 
        id: 2, 
        sound:'horn.caf',
        action : "Show me",
        repeat : LocalNotification.NSHourCalendarUnit
    }, successCallback, failureCallback); 

To set the badge count:

	plugins.localNotification.setSpringBoardBadgeCount( count, successCallback, failureCallback );    

To get the badge count: 

	plugins.localNotification.getSpringBoardBadgeCount( successCallback, failureCallback ); 
     
   

## See Also

 - [Xtify Push Notifications](/developers/documentation/ac-mobile-build-phonegap/ac-mobile-build/ac-build-plugins/xtify-push-notifications/)
