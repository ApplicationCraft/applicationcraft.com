---
title: "PhoneGap Options"
active_menu_item: developers
class_name: developers
full_width: true
---


Apps built using [Phonegap:Build](/developers/user-guide/ac-mobile-build-phonegap/cordova/phonegapbuild/) or [AC Mobile Build](/developers/user-guide/ac-mobile-build-phonegap/cordova/ac-mobile-build/) use a config.xml. The config.xml file allows developers to easily specify metadata about their applications.  More details available here: [https://build.phonegap.com/docs/config-xml](https://build.phonegap.com/docs/config-xml)

Using the PhoneGap Options property located in the Phonegap section of the App properties you can manage many of these properties to include within your Build.

![pg-options](/img/docs/pg-options.zoom79.png)

<table>
<tr>
<td width="181">
**Essential Properties**

</td>
<td width="46">

</td>
<td width="614">

</td>
</tr>
<tr>
<td width="181">
Application Version

</td>
<td width="46">

</td>
<td width="614">
for best results, use a major/minor/patch style version, with three numbers, such as 0.0.1

</td>
</tr>
<tr>
<td width="181">
Application ID

</td>
<td width="46">

</td>
<td width="614">
Define an ID for your application

</td>
</tr>
<tr>
<td width="181">
Description

</td>
<td width="46">

</td>
<td width="614">
A description for your application.

</td>
</tr>
<tr>
<td width="181">
Author

</td>
<td width="46">

</td>
<td width="614">
Enter your name

</td>
</tr>
<tr>
<td width="181">
Author E-Mail

</td>
<td width="46">

</td>
<td width="614">
Enter your email address

</td>
</tr>
<tr>
<td width="181">
Author Site

</td>
<td width="46">

</td>
<td width="614">
Enter your website

</td>
</tr>
</table>

<table>
<tr>
<td width="182">
**Multi-Platform**

</td>
<td width="44">

</td>
<td width="615">

</td>
</tr>
<tr>
<td width="182">
PhoneGap Version

</td>
<td width="44">

</td>
<td width="615">
Select your chosen release of PhoneGap:Build

</td>
</tr>
<tr>
<td width="182">
Orientation

</td>
<td width="44">

</td>
<td width="615">
Any/Portrait/Landscape. Where you can lock the orientation of Mobile Apps. Please note that Orientation for iOS6 devices requires build version 2.1.0 or greater

</td>
</tr>
<tr>
<td width="182">
Target a Specific Device

</td>
<td width="44">

</td>
<td width="615">
Universal/Tablet/Handset. Please note that this currently only applies to iOS builds; by default all builds are universal

</td>
</tr>
<tr>
<td width="182">
Full Screen

</td>
<td width="44">

</td>
<td width="615">
true/false(default). Set to true to not show top status bar in Native App usage

</td>
</tr>
<tr>
<td width="182">
Auto Hide Splash Screen

</td>
<td width="44">

</td>
<td width="615">
true(default)/false. If set to true the splash screen is hidden. To show your own Splash Screen images (Pro subscription required) set to false. Supported in [AC Mobile Build](/developers/user-guide/ac-mobile-build-phonegap/cordova/ac-mobile-build/)

</td>
</tr>
<tr>
<td width="182">
Autodetection E-mail

</td>
<td width="44">

</td>
<td width="615">
true/false(default). Safari on iOS detects any string formatted like an email and makes it a link that calls the mail program. Select false to disable this feature.

</td>
</tr>
<tr>
<td width="182">
Autodetection Phones

</td>
<td width="44">

</td>
<td width="615">
true/false(default). Safari on iOS detects any string formatted like a phone number and makes it a link that calls the number. Select false to disable this feature.

</td>
</tr>
</table>
<table>
<tr>
<td width="199">
**iOS Specific**

</td>
<td width="18">

</td>
<td width="624">

</td>
</tr>
<tr>
<td width="199">
WebView Bounce

</td>
<td width="18">

</td>
<td width="624">
true/false. This controls whether the screen "bounces" when scrolled beyond the top or bottom on iOS. By default, the bounce is 'off'

</td>
</tr>
<tr>
<td width="199">
Open all links in WebView

</td>
<td width="18">

</td>
<td width="624">
true/false. If set to true, all links (even with target set to blank) will open in the app's webview. If your app is utilizing the [YouTube](/developers/user-guide/product-guide/widget-properties-events/advanced/youtube) widget for iOS, set this property to true

</td>
</tr>
<tr>
<td width="199">
Status Bar Style

</td>
<td width="18">

</td>
<td width="624">
default/black-opaque/black-translucent. default is a grey status bar, black-opaque will appear black.  Although black-translucent is supported, the PhoneGap webview does not extend beneath the status bar, so it will appear identical to black-opaque once your app is running

</td>
</tr>
<tr>
<td width="199">
Show Splash Screen Spinner

</td>
<td width="18">

</td>
<td width="624">
true(default)/false. if set to false, the spinner won't appear on the splash screen during app loading. Supported in [AC Mobile Build](/developers/user-guide/ac-mobile-build-phonegap/cordova/ac-mobile-build/)

</td>
</tr>
<tr>
<td width="199">
Allow Inline Media Playback

</td>
<td width="18">

</td>
<td width="624">
true/false(default). If set to true HTML5 videos will play inline. If set to false HTML5 videos will use the native full-screen controller. To play [YouTube](/developers/user-guide/product-guide/widget-properties-events/advanced/youtube) videos inline, also set Open all links in WebView to true

</td>
</tr>
</table>

<table>
<tr>
<td width="183">
**Android Specific**

</td>
<td width="42">

</td>
<td width="617">

</td>
</tr>
<tr>
<td width="183">
Minimum SDK Version

</td>
<td width="42">

</td>
<td width="617">
corresponds to the usesSdk attributes in the AndroidManifest.xml file - for more information see [http://developer.android.com/guide/topics/manifest/uses-sdk-element.html](http://developer.android.com/guide/topics/manifest/uses-sdk-element.html)

</td>
</tr>
<tr>
<td width="183">
Install Location

</td>
<td width="42">

</td>
<td width="617">
internalOnly/auto/preferExternal. Where an app can be installed - defaults to internalOnly (as the Android SDK). auto or preferExternal allow the app to be installed on an SD card - this can lead to unexpected behavior, more details available [here](http://developer.android.com/guide/appendix/install-location.html)

</td>
</tr>
<tr>
<td width="183">
Load URL Timeout

</td>
<td width="42">

</td>
<td width="617">
The time (ms) at which Android will report an error that it cannot load the webpage

</td>
</tr>
<tr>
<td width="183">
Launch Mode

</td>
<td width="42">

</td>
<td width="617">
Standard(default)/SingleTop. An instruction on how the activity should be launched. If Standard, the system always creates a new instance of the activity in the target task and routes the intent to it. If Single Top - If an instance of the activity already exists at the top of the target task. For more information see [http://developer.android.com/guide/topics/manifest/activity-element.html\#lmode](http://developer.android.com/guide/topics/manifest/activity-element.html#lmode) . Supported in [AC Mobile Build](/developers/user-guide/ac-mobile-build-phonegap/cordova/ac-mobile-build/)

</td>
</tr>
<tr>
<td width="183">
Version Code

</td>
<td width="42">

</td>
<td width="617">
when building for Android, you can set the version Code. For more information on Android's versionCode attribute, see [http://developer.android.com/tools/publishing/versioning.html](http://developer.android.com/tools/publishing/versioning.html) . Supported in [AC Mobile Build](/developers/user-guide/ac-mobile-build-phonegap/cordova/ac-mobile-build/)

</td>
</tr>
</table>

Some platforms, such as Android, will warn you if an App you are about to install could try to access device features.

To avoid unnecessary warnings, you can use the API Features property to specify which features your App will try to access.

If you specify features of the PhoneGap API, those will be expanded to the appropriate Android and Windows Phone permissions for you application. Phonegap API Documentation is available here: [http://docs.phonegap.com](http://docs.phonegap.com)

Currently supported through this interface are the following feature names:

<table>
<tr>
<td width="183">
**API Features**

</td>
<td width="25">

</td>
<td width="635">
true/false

</td>
</tr>
<tr>
<td width="183">
Battery

</td>
<td width="25">

</td>
<td width="635">
maps to android:BROADCAST\_STICKY permission

</td>
</tr>
<tr>
<td width="183">
Camera

</td>
<td width="25">

</td>
<td width="635">
maps to android:CAMERA, winphone:ID\_CAP\_ISV\_CAMERA, and winphone:ID\_HW\_FRONTCAMERA permissions

</td>
</tr>
<tr>
<td width="183">
Contacts

</td>
<td width="25">

</td>
<td width="635">
maps to android:READ\_CONTACTS, android:WRITE\_CONTACTS, android:GET\_ACCOUNTS, and winphone:ID\_CAP\_CONTACTS permissions

</td>
</tr>
<tr>
<td width="183">
File

</td>
<td width="25">

</td>
<td width="635">
maps to WRITE\_EXTERNAL\_STORAGE permission

</td>
</tr>
<tr>
<td width="183">
Geolocation

</td>
<td width="25">

</td>
<td width="635">
maps to android:ACCESS\_COARSE\_LOCATION, android:ACCESS\_FINE\_LOCATION, android:ACCESS\_LOCATION\_EXTRA\_COMMANDS, and winphone:ID\_CAP\_LOCATION permissions

</td>
</tr>
<tr>
<td width="183">
Media

</td>
<td width="25">

</td>
<td width="635">
maps to android:RECORD\_AUDIO, android:RECORD\_VIDEO, android:MODIFY\_AUDIO\_SETTINGS, and winphone:ID\_CAP\_MICROPHONE permissions

</td>
</tr>
<tr>
<td width="183">
Network

</td>
<td width="25">

</td>
<td width="635">
maps to android:ACCESS\_NETWORK\_STATE, and winphone:ID\_CAP\_NETWORKING permissions

</td>
</tr>
<tr>
<td width="183">
Notification

</td>
<td width="25">

</td>
<td width="635">
maps to VIBRATE permission

</td>
</tr>
<tr>
<td width="183">
Device

</td>
<td width="25">

</td>
<td width="635">
maps to winphone:ID\_CAP\_IDENTITY\_DEVICE permission

</td>
</tr>
</table>

