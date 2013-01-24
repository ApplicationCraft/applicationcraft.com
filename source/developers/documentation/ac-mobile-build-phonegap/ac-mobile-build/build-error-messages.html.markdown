---
old_url: build_error_messages.htm
title: "Build Error Messages"
active_menu_item: developers
class_name: developers
full_width: true
---


The following list contains the common errors that can be generated form the build process along with advice on how to address them.

## Pre Build Errors

<table>
<tr>
<td width="271">
<b>Error 1200.</b> - Certificate file with ID # not found.

</td>
<td width="20">
</td>
<td width="595">
  The Certificate file you are using does not relate to the ID of this app.

</td>
</tr>
<tr>
<td width="271">
<b>Error 1020.</b> - File config.xml not found in root of zip archive.

</td>
<td width="20">
</td>
<td width="595">
 The config.xml file needs to be in the root of the zip archive. Check the structure of your zip file to ensure the project is in the root and not in another folder in the zip. 

</td>
</tr>
<tr>
<td width="271">
<b>Error 1021.</b> - File config.xml not in root folder.

</td>
<td width="20">
</td>
<td width="595">
  As above.

</td>
</tr>
<tr>
<td width="271">
<b>Error 1022.</b> - Config xml parse error.

</td>
<td width="20">
</td>
<td width="595">
  The config.xml file is malformed and possibly a node is not correctly closed. You can usually see such problems if you open the XML file in a browser.

</td>
</tr>
<tr>
<td width="271">
<b>Error 1010.</b> - A version attribute must be specified in the widget tag.

</td>
<td width="20">
</td>
<td width="595">
  For best results use a major/minor/patch style version, with three numbers, such as 0.0.1.

</td>
</tr>
<tr>
<td width="271">
<b>Error 1011.</b> - An ID attribute must be specified in the widget tag.

</td>
<td width="20">
</td>
<td width="595">
  This is the unique identifier for your application. 

</td>
</tr>
<tr>
<td width="271">
<b>Error 1012.</b> - A name tag must be specified in the widget tag.

</td>
<td width="20">
</td>
<td width="595">
  This is the name of your application and needs to be specified.

</td>
</tr>
<tr>
<td width="271">
<b>Error 1013.</b> - App ID has wrong structure - for example use com.companyname.applicationname.

</td>
<td width="20">
</td>
<td width="595">
  To support all supported platforms, this must be reverse-domain name style (e.g. com.yourcompany.yourapp). Take care when defining your App ID's. '-' is not allowed, '_' is allowed.

</td>
</tr>
<tr>
<td width="271">
<b>Error 1014.</b> - You must specify at least one build platform in the platform tag.

</td>
<td width="20">
</td>
<td width="595">
  Your config.xml needs to contain specific lines for each platform you want to build for. 

</td>
</tr>
<tr>
<td width="271">
<b>Error 1015.</b> - A versionCode attribute must be specified in the widget tag.

</td>
<td width="20">
</td>
<td width="595">
  When building for Android, you can set the versionCode by specifying it in your config.xml. For more information on Android's versionCode attribute see <a href="http://developer.android.com/tools/publishing/versioning.html" target="_blank">the Android Documentation</a>.

</td>
</tr>
<tr>
<td width="271">
<b> Error 1016.</b> - Plugin and Cordova build error.

</td>
<td width="20">
</td>
<td width="595">
  If you are using AC Build Plugins you need to include reference in your config.xml. See <a href="http://www.applicationcraft.com/developers/documentation/ac-mobile-build-phonegap/ac-mobile-build/ac-build-plugins/" target="_blank">AC Build Plugins</a> for more information.

</td>
</tr>
<tr>
<td width="271">
<b>Error 1017.</b> - Icon and/or Splash images error.

</td>
<td width="20">
</td>
<td width="595">
  There is a problem referencing your Icon and/or Splash Images in your project. Check that the images are of .png format and exist in the project in the location specified in your config.xml.

</td>
</tr>
<tr>
<td width="271">
<b>Error 1018.</b> - You must specify an author tag in the widget tag

</td>
<td width="20">
</td>
<td width="595">
  This is the author of the app, in most cases will be you and is required.

</td>
</tr>
<tr>
<td width="271">
The ZIP File you uploaded is more than 25Mb allowed. Please make sure that your ZIP file is smaller

</td>
<td width="20">
</td>
<td width="595">
This should be self-explanatory.

</td>
</tr>
</table>

## Android Build Errors

<table>
<tr>
<td width="271">
<b>Error 420.</b> You have uploaded an invalid Android Certificate.

</td>
<td width="20">
</td>
<td width="595">
  Certificates are fiddly little things and you will need to be absolutely sure you have gone through the correct process to generate them. Please refer to <a href="/developers/documentation/ac-mobile-build-phonegap/certificates/">this section</a> on how to generate your Certificates correctly.

</td>
</tr>
<tr>
<td width="271">
<b>Error 421.</b> You have entered an invalid password for your Certificate file. It must be the same as the password entered when you created the Certificate

</td>
<td width="20">
</td>
<td width="595">
Certificates are generated with a password. When you do this, it is important that you note the exact password used at the time. Note that the password referred to is the FILE password, not the keychain password. Please refer to <a href="/developers/documentation/ac-mobile-build-phonegap/certificates/">this section</a> on how to generate your Certificates correctly.

</td>
</tr>
<tr>
<td width="271">
<b>Error 422.</b> You have entered an invalid password for your Certificate. It must be the same as the password entered when you created the Certificate.

</td>
<td width="20">
</td>
<td width="595">
  Certificates are generated with a password. When you do this, it is important that you note the exact password used at the time. Note that the password referred to is the KEYCHAIN password, not the File password. Please refer to <a href="/developers/documentation/ac-mobile-build-phonegap/certificates/">this section</a> on how to generate your Certificates correctly..

</td>
</tr>
<tr>
<td width="271">
<b>Error 423.</b> Certificate alias is not listed in the uploaded keychain file.

</td>
<td width="20">
</td>
<td width="595">
</td>
</tr>
<tr>
<td width="271">
<b>Error 424.</b> Your Certificate has expired. You need to create a new one.

</td>
<td width="20">
</td>
<td width="595">
Should be self-explanatory.

</td>
</tr>
</table>

## iOS Build Errors

<table>
<tr>
<td width="271">
<b>Error 432.</b> You have uploaded an invalid iOS Certificate.

</td>
<td width="20">
</td>
<td width="595">
  Certificates are fiddly little things and you will need to be absolutely sure you have gone through the correct process to generate them. Please refer to <a href="/developers/documentation/ac-mobile-build-phonegap/certificates/">this section</a> on how to generate your Certificates correctly.

</td>
</tr>
<tr>
<td width="271">
<b>Error 433.</b> You have entered an invalid password for your Certificate. It must be the same as the password entered when you created the Certificate.

</td>
<td width="20">
</td>
<td width="595">
  Certificates are generated with a password. When you do this, it is important that you note the exact password used at the time. Please refer to <a href="/developers/documentation/ac-mobile-build-phonegap/certificates/">this section</a> on how to generate your Certificates correctly.

</td>
</tr>
<tr>
<td width="271">
<b>Error 434.</b> Your Certificate has been revoked. You need to create a new one or contact you Apple Developer portal Administrator and request a new one

</td>
<td width="20">
</td>
<td width="595">
An Administrator in the Apple Developer Portal (developer.apple.com) can revoke certificates which makes them invalid for the build process, so please take a look there.

</td>
</tr>
<tr>
<td width="271">
<b>Error 440.</b> Your Mobile Provisioning Profile is not valid.

</td>
<td width="20">
</td>
<td width="595">
  It looks like you have uploaded the wrong type of file. Please refer to <a href="/developers/documentation/ac-mobile-build-phonegap/certificates/manual/ios-keys-and-certificates/do-it-yourself-guide/setting-up-for-development/create-a-provisioning-profile">this section</a> for help on Provisioning Profiles and upload again.

</td>
</tr>
<tr>
<td width="271">
<b>Error 450.</b> Your Provisioning Profile is associated with another App Id

</td>
<td width="20">
</td>
<td width="595">
  When you configure your Provisioning Profile in the Apple Developer Portal, you need to specify an <a href="/developers/documentation/ac-mobile-build-phonegap/certificates/manual/ios-keys-and-certificates/do-it-yourself-guide/setting-up-for-development/create-an-app-id">App ID</a>. This must match the Application ID <a href="/developers/documentation/ac-mobile-build-phonegap/apps-developed-with-application-craft/enabling-device-features">specified within your Application Craft App</a> (if it is an AC App) or the App ID <a href="/developers/documentation/ac-mobile-build-phonegap/ac-mobile-build/external-html5cssjs-apps">specified within your config.xml</a> (if it is developed outside AC). Please refer to <a href="/developers/documentation/ac-mobile-build-phonegap/certificates/manual/ios-keys-and-certificates/do-it-yourself-guide/setting-up-for-development/create-a-provisioning-profile">this section</a> for more information.

</td>
</tr>
<tr>
<td width="271">
<b>Error 451.</b> Your Provisioning Profile is associated with another Certificate

</td>
<td width="20">
</td>
<td width="595">
  iOS requires a <a href="/developers/documentation/ac-mobile-build-phonegap/certificates/manual/ios-keys-and-certificates/do-it-yourself-guide/setting-up-for-development/create-a-provisioning-profile">Mobile Provisioning Profile</a>. This is tied to a certificate and so if the certificate you used is not the one referred to by the Provisioning Profile you will get an error. Please refer to <a href="/developers/documentation/ac-mobile-build-phonegap/certificates/manual/ios-keys-and-certificates/do-it-yourself-guide/setting-up-for-development/create-a-provisioning-profile">this section</a> on how to generate your Certificates correctly.

</td>
</tr>
</table>

## Other Build Errors

If you get any other errors, then you should contact [support@applicationcraft.com](mailto:support@applicationcraft.com) . We will probably need to take a look behind the scenes and sort it out.
