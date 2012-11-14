---
title: "Generating a P12 Certificate"
active_menu_item: developers
class_name: developers
full_width: true
---


You will need to generate a P12 Certificate which needs to be provided to the [AC Mobile Build](/developers/documentation/ac-mobile-build-phonegap/ac-mobile-build/) Platform or to [Phonegap:Build](/developers/documentation/ac-mobile-build-phonegap/phonegapbuild/) . The screenshot below shows where this certificate should be used.

![iosa-p12-1](/img/docs/iosa-p12-1.zoom71.png)

![iosa-p12-2](/img/docs/iosa-p12-2.zoom67.png)

Click on the Download button within the iOS Portal as shown above. You should end up with a file called

    ios_development.cer
   

on your PC.

![iosa-p12-3](/img/docs/iosa-p12-3.zoom68.png)

Double click this file or open the Keychain App on your Mac and from the menu, select File \> Import Items. It will then appear in the keys section within the Keychain App as shown above.

![iosa-p12-4](/img/docs/iosa-p12-4.zoom77.png)

Finally, right click on the key as shown in the screenshot above. Select Export and your P12 file will be created. During this process, you will be asked for a password. This password is associated with the actual certificate and so you should be sure to remember it. If you forget it you just need to regenerate it.

The P12 certificate is now ready for upload into either your [AC Mobile Build](/developers/documentation/ac-mobile-build-phonegap/ac-mobile-build/) screen (shown at the very top of this page) or into Phonegap Build.

If you lose your P12 certificate, as happens to most people, simply regenerate it by re-doing the above steps.

