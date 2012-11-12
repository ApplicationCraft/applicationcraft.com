---
title: "Building Your Apps"
active_menu_item: developers
class_name: developers
full_width: true
---


If you have not yet created any Certificates or Provisioning Profiles, you will need to do so first. This is described in all its gory detail in the [iOS Keys and Certificates](../certificates/ios-keys-and-certificates/) section. For those of you who don't want to deal with this, please contact AC Support and ask about our [iOS Assist Service](../certificates/ios-keys-and-certificates/i-havent-got-a-mac) .

You will need to have the following file(s) available

 - a [P12 Certificate](../certificates/ios-keys-and-certificates/do-it-yourself-guide/setting-up-for-development/generating-a-p12-certificate) (.p12) which is used for signing the App

 - a [Mobile Provisioning Profile](../certificates/ios-keys-and-certificates/do-it-yourself-guide/setting-up-for-development/create-a-provisioning-profile) (.mobileprovision) which is only needed for iOS builds

Once you have your files ready, you should locate your App in the AC Console, the 'Mobile Build' button on the bottom pane and select [AC Mobile Build]() . You will see the following screen.

![ac\_build](/img/docs/ac_build.zoom89.png)

 - Check/uncheck the Android or iOS boxes depending on which platforms you want to build.

**Android Certificate Signing**

To build your app for testing purposes the default Debug Certificate should be uploaded by pressing the Add Certificate button. If you have already uploaded a Certificate then you may find it in the drop-down list.

To build your app to deploy to the Google Play Store you need to sign your apps by adding your full certificate.

See [Android Certificate](../certificates/android-certificates/)

**iOS  Certificate Signing**

You need to upload both the P12 certificate file and then the Mobile Provisioning Profile by selecting Add Profile. When you upload the P12 Certificate, you will be asked to enter a password. This password must match the password you used when you exported the [P12 certificate as explained here](../certificates/ios-keys-and-certificates/do-it-yourself-guide/setting-up-for-development/generating-a-p12-certificate) .

If you have already uploaded a Certificate then you may find it in the drop-down list.

Click here for full details on [iOS Certificate and Provisioning Profiles](../certificates/ios-keys-and-certificates/) .

## Ready to Build

Once you have entered the required certificates and/profile files, press the Build/Rebuild button to start the build process. Application Craft will now call the build service in the background and the build will run asynchronously. You can close the window now and open it later.

The build process can take anywhere between 20 seconds and 2 minutes depending on the server load. As soon as each platform native App is built, you will see it appear in the window.

