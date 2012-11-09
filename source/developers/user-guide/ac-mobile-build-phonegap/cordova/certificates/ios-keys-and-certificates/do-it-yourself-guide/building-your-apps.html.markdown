---
title: "Building your Apps"
active_menu_item: developers
class_name: developers
full_width: true
---


If you have been through the [Do It Yourself Guide](index.htm) or you have used Application Craft's [iOS Assist Service](../i-havent-got-a-mac.htm) , you will now end up with 2 key files

 - a [P12 Certificate](setting-up-for-development/generating-a-p12-certificate.htm) (.p12).

 - a [Mobile Provisioning Profile](setting-up-for-development/create-a-provisioning-profile.htm) (.mobileprovision).

Be careful to use the correct files for development builds as opposed to distribution builds. Each type requires a different pair of files.

These are now used by

 - [AC Mobile Build](../../../ac-mobile-build/index.htm) - builds your App using Phonegap Technology integrated into the AC Platform; this has 5 [plugins](../../../ac-mobile-build/ac-build-plugins/index.htm) .

 - [Phonegap Build](../../../phonegapbuild/index.htm) - builds your App in the same way but on Adobe's platform; at the time of writing, this has no [plugin](../../../ac-mobile-build/ac-build-plugins/index.htm) capabilities

