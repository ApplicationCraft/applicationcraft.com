---
title: "Debug Development Certificates"
active_menu_item: developers
class_name: developers
full_width: true
---


The good news is that you don't actually need any certificates for developing and testing your Apps. Both [AC Mobile Build](/developers/documentation/ac-mobile-build-phonegap/ac-mobile-build/) and [PhoneGap:Build](/developers/documentation/ac-mobile-build-phonegap/phonegapbuild/) do not require them in order to build you APK files.

The screenshot below shows how the 'Debug certificate' is specified in the dropdown list in the Android section.

![ac\_build](/img/docs/ac_build.zoom85.png)

And once they are built, you are perfectly free to distribute these to people without the need for any special certificates to codesign your Apps.

However, if you want to distribute your Apps via Google Play and generally be more formal about your distribution, then you should codesign your Apps using a certificate.

