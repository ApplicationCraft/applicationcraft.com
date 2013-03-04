---
title: "AdMob"
active_menu_item: developers
class_name: developers
full_width: true
---


This plugin is used in conjunction with the [Ad Mob](http://www.google.co.uk/ads/admob/) service to allow you to present adverts in your native apps.

Sign in to the [Ad Mob](http://www.google.co.uk/ads/admob/) service, configure your site/app to obtain Android, iOS and Windows publisher ID keys and enter into the Plugin properties and you are ready to go.

Setting up your AdMob Publisher ID is a quick and simple process. Follow these steps and you'll have your AdMob Publisher ID in no time!

- Go to [admob.com](http://www.admob.com) and sign up.
- Choose Add Site/App from the menu
- Pick the required platform you wish to generate a Publisher ID for.
- Fill in the required fields, App Name, Category and App description. You don't need to enter Package URL as you won't know it until your app is deployed to the App Stores. Leave that completely blank. (Please note to make sure you remove all text from the URL field if you don't use it, e.g. remove the default "market://" text.)
- Click OK.
- You'll then see a screen that talks about the AdMob SDK. This is the confusing part. Just ignore it and click the 'Go to Sites/Apps' button at the bottom. You don't need to download the SDK if building your app in AC and using the plugin.
- Now you'll see a list of your Apps. Find the app you just added and hover over the name with your mouse. You'll see a Manage Settings button appear. Click it.
- You'll see your Publisher ID up at the top. It is below the App Name and below the Site URL. It is labelled 'Publisher ID' and is a 15 character code (alphanumeric).
- Copy the Publisher ID into the relevant field in the Plugin dialog fields and you are ready to go.
## Build Support: 
 - Android: Supported for all [Phonegap Version](/developers/documentation/ac-mobile-build-phonegap/apps-developed-with-application-craft/enabling-device-features/)
 
 - iOS: Supported for all [Phonegap Version](/developers/documentation/ac-mobile-build-phonegap/apps-developed-with-application-craft/enabling-device-features/)
 
 - Windows: Supported for all [Phonegap Version](/developers/documentation/ac-mobile-build-phonegap/apps-developed-with-application-craft/enabling-device-features/)

# HTML5+CSS+JS Apps not developed in Application Craft #

If you have developed your App outside Application Craft then please do the following:

 - In your index.html include `admob.js`
 - In your config.xml add the following:
      
<pre><code><gap:plugin name="AdMob" version="1.0.0" >
		<parameter name="AD_MOB_ANDROID_AD_UNIT_ID" value="ANDROID_PUBLISHER_ID_HERE" platform="android"/>
		<parameter name="AD_MOB_IOS_AD_UNIT_ID" value="IOS_PUBLISHER_ID_HERE" platform="ios"/>
		<parameter name="AD_MOB_WP_AD_UNIT_ID" value="WP7_PUBLISHER_ID_HERE" platform="winphone"/>
		<parameter name="AD_MOB_ON_TOP" value="true" /> // true for ad at the top, false for ad at the bottom
		<parameter name="AD_MOB_FORCE_START" value="true" /> // true to start advert as app starts, false to not start
		<parameter name="AD_MOB_DEBUG" value="true" /> // true to run plugin in debug mode. Always set to false before compiling for production release
	</gap:plugin></code></pre>

You should replace `x.y.z` in `version='x.y.z'` depending on which version of Cordova you are using for your App. Please refer to the list below:

 - Cordova 1.6.0-1.8.0 use "1.0.0"
 - Cordova 1.9.0-2.0.0 use "2.0.0"
 - Cordova 2.1.0 or later use "2.1.0"

# Apps Developed with Application Craft #

<table>
<tr>
<td width="182">
Plugin Name

</td>
<td width="20">
</td>
<td width="740">
The name of the plugin - AdMob

</td>
</tr>
<tr>
<td width="182">
Enabled

</td>
<td width="20">
</td>
<td width="740">
True/False(default). Select True to use a plugin in your app

</td>
</tr>
<tr>
<td width="182">
Show 'not native' warning

</td>
<td width="20">
</td>
<td width="740">
True(default)/False. If True will present a message to users if the app is not being run as a Native App.

</td>
</tr>
<tr>
<td width="182">
Android Publisher ID

</td>
<td width="20">
</td>
<td width="740">
The Publisher ID for Android obtained from AdMob.

</td>
</tr>
<tr>
<td width="182">
iOS Publisher ID

</td>
<td width="20">
</td>
<td width="740">
The Publisher ID for iOS obtained from AdMob.

</td>
</tr>
<tr>
<td width="182">
WP Publisher ID

</td>
<td width="20">
</td>
<td width="740">
The Publisher ID for Windows obtained from AdMob.

</td>
</tr>
<tr>
<td width="182">
Show adv on Top

</td>
<td width="20">
</td>
<td width="740">
true/false. True to show ad at top of app, false to show at the bottom.

</td>
</tr>
<tr>
<td width="182">
Start at load

</td>
<td width="20">
</td>
<td width="740">
true/false. True to start ad as app starts, false to not show.

</td>
</tr>
<tr>
<td width="182">
Adv Debug Mode

</td>
<td width="20">
</td>
<td width="740">
true/false. True to show ad in debug mode.

</td>
</tr>
</table>


# Other use examples #

If you do not wish to show your advert continually or from the start (perhaps you want it to only show on specific pages or after a period of time and then stop it from showing later), the following functions can be used.

## To start Adverts ##

	window.plugins.AdMob.start(successCallback, errorCallback)


successCallback - The advert was successfully started

errorCallback - The error callback function

**Example:**

	window.plugins.AdMob.start(function(msg){
	    console.log("Adv was started");
	}, function(msg){
	    console.log("Adv start failed");  //User use AdBlock or problem with internet connection
	}); 

## To stop Adverts ##

	window.plugins.AdMob.stop(successCallback, errorCallback)

successCallback - The advert was successfully started

errorCallback - The error callback function

**Example:**

	window.plugins.AdMob.stop(function(msg){
	    console.log("Adv was stoped");
	}, function(msg){
	    console.log("Adv stop error");
	}); 

Link to the complete documentation for this plugin is available here [https://github.com/destitutus/AdMobPlugin](https://github.com/destitutus/AdMobPlugin)



## See Also

 - [Adfonic Advertising](/developers/documentation/product-guide/advanced-features/pro-account-advertising/)
