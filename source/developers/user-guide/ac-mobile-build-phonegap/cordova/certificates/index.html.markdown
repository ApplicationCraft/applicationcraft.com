---
title: "Certificates"
active_menu_item: developers
class_name: developers
full_width: true
---


This is the part of the process that may lose you a few hairs, so take a deep breath.

Here is a quick overview of the different approaches to certificates that each platform takes.

Android

To build and test, you don't need to do anything. You can use our default debug certificate. If you want to deploy a codesigned App, which you will need to deploy via Google Play, then you need to generate a proper Certificate. You can [generate your own](android-certificates/index.htm) or you can use our Certificate Assistant (coming in November 2012) in which case the Application Craft platform generates them for you.

iOS

Apple requires both a Codesigning Certificate and a so called Mobile Provisioning Profile. You need different ones for development and for App Store deployment. [Click here](ios-keys-and-certificates/index.htm) for more on iOS Certificate Management.

Thanks to our Certificate Assistant (coming in November 2012), you can actually do everything without needing a Mac, which you will need otherwise.

Windows Phone

This will be available in December 2012.

## In This Section:

[iOS Keys and Certificates](ios-keys-and-certificates/index.htm)

[Android Certificates](android-certificates/index.htm)
