---
title: "Non-AC built Apps"
active_menu_item: developers
class_name: developers
full_width: true
---

If you have developed your App outside Application Craft then please do the following:

 - In your index.html include `XtifyCordovaPlugin.js`
 - In your config.xml add the following:
      
<pre><code><gap:plugin name="Xtify" version="1.0.0" >
  <parameter name="XTIFY_APPLICATION_KEY" value="XTIFY_APPLICATION_KEY_VALUE_ANDROID" platform="android"/>
  <parameter name="XTIFY_APPLICATION_KEY" value="XTIFY_APPLICATION_KEY_VALUE_IOS" platform="ios"/>
  <parameter name="XTIFY_SENDER_ID" value="XTIFY_SENDER_ID_VALUE" />
</gap:plugin>
<gap:plugin name="ChildBrowser" version="1.0.0" /></code></pre>

You should replace `x.y.z` in `version='x.y.z'` depending on which version of Cordova you are using for your App. Please refer to the list below:

 - Cordova 1.6.0-1.8.0 use "1.0.0"
 - Cordova 1.9.0-2.0.0 use "2.0.0"
 - Cordova 2.1.0 or later use "2.1.0"

From this point on, please refer to the documentation on the Xtify site. There is documentation for both [iOS](http://developer.xtify.com/display/sdk/PhoneGap+Cordova+for+iOS+Xtify+Integration+Guide) and [Android](http://developer.xtify.com/display/sdk/PhoneGap+Cordova+for+Android+Xtify+Integration+Guide).

