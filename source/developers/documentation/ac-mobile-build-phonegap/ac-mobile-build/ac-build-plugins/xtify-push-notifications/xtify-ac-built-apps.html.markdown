---
title: "AC Built Apps"
active_menu_item: developers
class_name: developers
full_width: true
---

If you build your Apps with Application Craft, the entire process is very easy. The main step is to enable the Xtify plugin. The image below shows where to find the AC Build Plugins in the App property bar.

![xtify ac build phonegap cordova plugin](/img/docs/xtify-plugin.png)

##Setting the Application ID
The first thing you will need to do is to set up your Phonegap settings in AC. 

![xtify phonegap cordova settings](/img/docs/xtify-pg-options.png)

It is important to give your App a proper name that uniquely identifies it. We have chosen `com.fm.pushdemo` here.

Also note that if building for Android, you can control how receipt of notifications can restart the app or if running in the background not restart the app with the Android Specific - Launch Mode property. Set to 'Single Top' and the app will not automatically restart. See [Phonegap Options](/developers/documentation/ac-mobile-build-phonegap/apps-developed-with-application-craft/enabling-device-features/) for more information. 
No special settings are required for iOS.

##Adding the Xtify AC Build Extension

<table>
<tr>
<td width="182">
Plugin Name

</td>
<td width="20">

</td>
<td width="740">
The name of the plugin - Xtify Push notifications

</td>
</tr>
<tr>
<td width="182">
Enabled

</td>
<td width="20">

</td>
<td width="740">
True/False(default). Select True to use this plugin in your app

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
Documentation

</td>
<td width="20">

</td>
<td width="740">
Link to documentation for this plugin (<a href="http://xtify.com/products.html\#tab=tab-push" target="_blank">http://xtify.com/products.html\#tab=tab-push</a>)

</td>
</tr>
<tr>
<td width="182">
Android App Key

</td>
<td width="20">

</td>
<td width="740">
Xtify Android key

</td>
</tr>
<tr>
<td width="182">
Android Sender Key

</td>
<td width="20">

</td>
<td width="740">
Xtify Android Sender Id

</td>
</tr>
<tr>
<td width="182">
iOS App Key

</td>
<td width="20">

</td>
<td width="740">
Xtify iOS key

</td>
</tr>
</table>

The properties “Android App Key” and “iOS App Key” are unique for the each app and can be found in your Xtify portal. To obtain these keys, you need to first register at [https://console.xtify.com/registration](https://console.xtify.com/registration).

The Android Sender Id is created by [Google Cloud Messaging](/developers/documentation/ac-mobile-build-phonegap/ac-mobile-build/ac-build-plugins/xtify-push-notifications/google-cloud-messaging)

The Xtify Free account is suitable for 10,000 notifications but for larger volumes see [http://www.xtify.com/pricing.html](http://www.xtify.com/pricing.html) .
