---
old_url: automatic_building.htm
title: "Building Your Apps"
active_menu_item: developers
class_name: developers
full_width: true
---

##Prepapring your Certificates
If you have not yet created any Certificates and, in the case of ioS, a Provisioning Profile, you will need to do so first. Be sure to read the [Certificates](/developers/documentation/ac-mobile-build-phonegap/certificates/) section. This explains the ways you can generate your certificates either manually, or via our platform.

##Building for Android
You do not need to generate a Certificate for general usage ad testing. You can use the default Certificate provided in the drop-down list. To build your app to deploy to Google Play you need to sign your apps by adding a proper Certificate. Be sure to read the [Certificates](/developers/documentation/ac-mobile-build-phonegap/certificates/) section.

##Building for iOS
You need to generate a Certificate and a Mobile Provisioning Profile for testing and production deployments. This is described in the [Certificates](/developers/documentation/ac-mobile-build-phonegap/certificates/) section. 

##Building for Windows Phone
Windows does not require any certificates to build apps.

## Ready to Build
Once you have got the Certificates sorted out, press the Build/Rebuild button to start the build process. Application Craft will now call the build service in the background and the build will run asynchronously. You can close the window now and open it later.

The build process can take anywhere between 20 seconds and 2 minutes depending on the server load. As soon as each platform native App is built, you will see it appear in the window.

