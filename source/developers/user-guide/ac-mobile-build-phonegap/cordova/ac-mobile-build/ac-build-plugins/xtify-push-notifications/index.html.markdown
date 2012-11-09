---
title: "Xtify Push Notifications"
active_menu_item: developers
class_name: developers
full_width: true
---


The Xtify Push Notifications Plugins enables send notifications to your native apps.

HTML5+CSS+JS Apps not developed in Application Craft

If you have developed your App outside Application Craft then please do the following

<table>
<tr>
<td width="13">
 - 

</td>
In your index.html include

      XtifyCordovaPlugin.js
      <gap:plugin name="Xtify" version="1.0.0" >
      <parameter name="XTIFY_APPLICATION_KEY" value="XTIFY_APPLICATION_KEY_VALUE_ANDROID" platform="android"/>
      <parameter name="XTIFY_APPLICATION_KEY" value="XTIFY_APPLICATION_KEY_VALUE_IOS" platform="ios"/>
      <parameter name="XTIFY_SENDER_ID" value="XTIFY_SENDER_ID_VALUE" />
      </gap:plugin><gap:plugin name="ChildBrowser" version="1.0.0" />
     

</tr>
</table>
 - In your config.xml add

You should replace x.y.z in version='x.y.z' depending on which version of Cordova you are using for your App. Please refer to the list below

 - Cordova 1.6.0-1.8.0 use "1.0.0"

 - Cordova 1.9.0-2.0.0 use "2.0.0"

 - Cordova 2.1.0 or later use "2.1.0"

Apps Developed with Application Craft

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
Link to documentation for this plugin (http://xtify.com/products.html\#tab=tab-push)

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

The properties “Android App Key” and “iOS App Key” are unique for the each app. The Android Sender Id is created by [Google Cloud Messaging](google-cloud-messaging)

To obtain keys, you need to first register at [https://console.xtify.com/registration](https://console.xtify.com/registration)

The Free account is suitable for 10,000 notifications but for larger volumes see [http://www.xtify.com/pricing.html](http://www.xtify.com/pricing.html) .

## In This Section:

 - [Google Cloud Messaging](google-cloud-messaging)

 - [Apple App Id](apple-app-id)

 - [Adding New Application Keys](adding-new-application)

 - [Configuring your app](configuring-your-app)

 - [Sending Push Notifications to your apps](sending-push-notifications-to-)

