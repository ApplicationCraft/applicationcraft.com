---
title: "Certificates"
active_menu_item: developers
class_name: developers
full_width: true
---


Certificates are a necessary evil for your Apps. It is the part of the process that may lose you a few hairs (or turn them gray), so take a deep breath.

##The Application Craft Certificate Generator
If you want to just get your Certificates built with minimum fuss and could not care less about controlling it all yourself, then use our in-built [AC Certificate Generator](/developers/documentation/ac-mobile-build-phonegap/certificates/wizard).

For those of you who want to do it all yourself, here is a quick overview of the different approaches to certificates that each platform takes. Or just skip straight to the section on [Manual Certificate Generation](/developers/documentation/ac-mobile-build-phonegap/certificates/manual).

## Android

To build and test, you don't need to do anything. You can use our default debug certificate. If you want to deploy a codesigned App, which you will need to deploy via Google Play, then you need to generate a proper Certificate. You can [generate your own](/developers/documentation/ac-mobile-build-phonegap/certificates/manual/android-certificates/) or you can use our [Certificate Generator](/developers/documentation/ac-mobile-build-phonegap/certificates/wizard), in which case the Application Craft platform generates them for you.

## iOS

Apple requires both a Codesigning Certificate and a so called Mobile Provisioning Profile. You need different ones for development and for App Store deployment. [Click here](/developers/documentation/ac-mobile-build-phonegap/certificates/manual/ios-keys-and-certificates/) for more on iOS Certificate Management.

Thanks to our [Certificate Generator](/developers/documentation/ac-mobile-build-phonegap/certificates/wizard), you can actually do everything without needing a Mac, which you will need otherwise.

## Windows Phone

This will be available in December 2012.

## In This Section

 - [iOS Keys and Certificates](/developers/documentation/ac-mobile-build-phonegap/certificates/manual/ios-keys-and-certificates/)
 - [Android Certificates](/developers/documentation/ac-mobile-build-phonegap/certificates/manual/android-certificates/)
