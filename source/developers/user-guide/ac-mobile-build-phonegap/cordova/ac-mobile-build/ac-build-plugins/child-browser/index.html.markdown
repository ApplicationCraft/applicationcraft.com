---
title: "Child Browser"
active_menu_item: developers
class_name: developers
full_width: true
---


The Child Browser plugin allows you to display external web pages within your app, in a sub view. It is preferable to a regular link in that it allows the user to press a button to dismiss that view, returning control back to your App.

## HTML5+CSS+JS Apps not developed in Application Craft

If you have developed your App outside Application Craft then please do the following

 - In your index.html include childbrowser.js

 - In your config.xml add \<gap:plugin name="ChildBrowser" version="x.y.z" /\>

You should replace x.y.z in version='x.y.z' depending on which version of Cordova you are using for your App. Please refer to the list below

 - Cordova 1.6.0-1.8.0 use "2.1.0"

 - Cordova 1.9.0-2.0.0 use "3.0.0"

 - Cordova \>=2.1.0 use "4.0.0"

## Apps Developed with Application Craft

<table>
<tr>
<td width="182">
Plugin Name

</td>
<td width="33">
</td>
<td width="727">
The name of the plugin - Child Browser

</td>
</tr>
<tr>
<td width="182">
Enabled

</td>
<td width="33">
</td>
<td width="727">
True/False(default). Select True to use a plugin in your app

</td>
</tr>
<tr>
<td width="182">
Show 'not native' warning

</td>
<td width="33">
</td>
<td width="727">
True(default)/False. If True will present a message to users if the app is not being run as a Native App.

</td>
</tr>
</table>

All functions are called on the singleton ChildBrowser instance - accessible as

    window.plugins.childBrowser
   

.

The Child Browser plugin can also be used if building using [Phonegap:Build](/developers/user-guide/ac-mobile-build-phonegap/cordova/phonegapbuild/)

## See

 - [Methods](/developers/user-guide/ac-mobile-build-phonegap/cordova/ac-mobile-build/ac-build-plugins/child-browser/methods/)

 - [Events](/developers/user-guide/ac-mobile-build-phonegap/cordova/ac-mobile-build/ac-build-plugins/child-browser/events/)

