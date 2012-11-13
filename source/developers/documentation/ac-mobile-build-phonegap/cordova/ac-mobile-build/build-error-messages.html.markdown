---
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
The ZIP File you uploaded doesn’t seem to be a proper Cordova application. Please check it and upload again.

</td>
<td width="20">
</td>
<td width="595">
  A Phonegap/Cordova application needs to be prepared in the correct way as described on the Phonegap Build site. Please refer to the Phonegap documentation on <a href="http://build.phonegap.com/docs/preparing-your-app">preparing your App</a> for full details.

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

## iOS Build Errors

<table>
<tr>
<td width="271">
You have uploaded an invalid iOS Certificate.

</td>
<td width="20">
</td>
<td width="595">
  Certificates are fiddly little things and you will need to be absolutely sure you have gone through the correct process to generate them. Please refer to <a href="/developers/documentation/ac-mobile-build-phonegap/cordova/certificates/ios-keys-and-certificates/do-it-yourself-guide/setting-up-for-distribution/distribution-profile">this section</a> on how to generate your Certificates correctly.

</td>
</tr>
<tr>
<td width="271">
You have entered an invalid password for your Certificate. It must be the same as the password entered when you created the Certificate.

</td>
<td width="20">
</td>
<td width="595">
  Certificates are generated with a password. When you do this, it is important that you note the exact password used at the time. Please refer to <a href="/developers/documentation/ac-mobile-build-phonegap/cordova/certificates/ios-keys-and-certificates/do-it-yourself-guide/">this section</a> on how to generate your Certificates correctly.

</td>
</tr>
<tr>
<td width="271">
Your Certificate has been revoked. You need to create a new one or contact you Apple Developer portal Administrator and request a new one

</td>
<td width="20">
</td>
<td width="595">
An Administrator in the Apple Developer Portal (developer.apple.com) can revoke certificates which makes them invalid for the build process, so please take a look there.

</td>
</tr>
<tr>
<td width="271">
Your Mobile Provisioning Profile is not valid.

</td>
<td width="20">
</td>
<td width="595">
  It looks like you have uploaded the wrong type of file. Please refer to <a href="/developers/documentation/ac-mobile-build-phonegap/cordova/certificates/ios-keys-and-certificates/do-it-yourself-guide/">this section</a> for help on Provisioning Profiles and upload again.

</td>
</tr>
<tr>
<td width="271">
Your Provisioning Profile is associated with another Certificate

</td>
<td width="20">
</td>
<td width="595">
  iOS requires a Mobile Provisioning Profile. This is tied to a certificate and so if the certificate you used is not the one referred to by the Provisioning Profile you will get an error. Please refer to <a href="/developers/documentation/ac-mobile-build-phonegap/cordova/certificates/ios-keys-and-certificates/do-it-yourself-guide/setting-up-for-development/create-a-provisioning-profile">this section</a> on how to generate your Certificates correctly.

</td>
</tr>
<tr>
<td width="271">
Your Provisioning Profile is associated with another App Id

</td>
<td width="20">
</td>
<td width="595">
  When you configure your Provisioning Profile in the Apple Developer Portal, you need to specify an App ID. This must match the App ID specified within your Application Craft App (if it is an AC App) or the App ID specified within your config.xml (if it is developed outside AC). Please refer to <a href="/developers/documentation/ac-mobile-build-phonegap/cordova/certificates/ios-keys-and-certificates/do-it-yourself-guide/setting-up-for-development/create-a-provisioning-profile">this section</a> for more information.

</td>
</tr>
</table>

## Android Build Errors

<table>
<tr>
<td width="271">
You have uploaded an invalid Android Certificate.

</td>
<td width="20">
</td>
<td width="595">
  Certificates are fiddly little things and you will need to be absolutely sure you have gone through the correct process to generate them. Please refer to <a href="/developers/documentation/ac-mobile-build-phonegap/cordova/certificates/android-certificates/">this section</a> on how to generate your Certificates correctly.

</td>
</tr>
<tr>
<td width="271">
You have entered an invalid password for your Certificate file. It must be the same as the password entered when you created the Certificate

</td>
<td width="20">
</td>
<td width="595">
  Certificates are generated with a password. When you do this, it is important that you note the exact password used at the time. Note that the password referred to is the FILE password, not the keychain password. Please refer to <a href="/developers/documentation/ac-mobile-build-phonegap/cordova/certificates/android-certificates/">this section</a> on how to generate your Certificates correctly.

</td>
</tr>
<tr>
<td width="271">
You have entered an invalid password for your Certificate. It must be the same as the password entered when you created the Certificate.

</td>
<td width="20">
</td>
<td width="595">
  Certificates are generated with a password. When you do this, it is important that you note the exact password used at the time. Note that the password referred to is the KEYCHAIN password, not the File password. Please refer to <a href="/developers/documentation/ac-mobile-build-phonegap/cordova/certificates/android-certificates/">this section</a> on how to generate your Certificates correctly..

</td>
</tr>
<tr>
<td width="271">
Certificate alias is not listed in the uploaded keychain file.

</td>
<td width="20">
</td>
<td width="595">
</td>
</tr>
<tr>
<td width="271">
Your Certificate has expired. You need to create a new one.

</td>
<td width="20">
</td>
<td width="595">
Should be self-explanatory.

</td>
</tr>
</table>

## Other Build Errors

If you get any other errors, then you should contact [support@applicationcraft.com](mailto:support@applicationcraft.com) . We will probably need to take a look behind the scenes and sort it out.

