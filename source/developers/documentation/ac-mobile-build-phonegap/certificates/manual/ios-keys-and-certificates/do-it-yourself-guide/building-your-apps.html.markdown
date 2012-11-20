---
title: "Building your Apps"
active_menu_item: developers
class_name: developers
full_width: true
---


If you have been through the [Do It Yourself Guide](/developers/documentation/ac-mobile-build-phonegap/certificates/manual/ios-keys-and-certificates/do-it-yourself-guide/) or you have used Application Craft's [iOS Assist Service](/developers/documentation/ac-mobile-build-phonegap/certificates/manual/ios-keys-and-certificates/i-havent-got-a-mac) , you will now end up with 2 key files

 - a [P12 Certificate](/developers/documentation/ac-mobile-build-phonegap/certificates/manual/ios-keys-and-certificates/do-it-yourself-guide/setting-up-for-development/generating-a-p12-certificate) (.p12).

 - a [Mobile Provisioning Profile](/developers/documentation/ac-mobile-build-phonegap/certificates/manual/ios-keys-and-certificates/do-it-yourself-guide/setting-up-for-development/create-a-provisioning-profile) (.mobileprovision).

Be careful to use the correct files for development builds as opposed to distribution builds. Each type requires a different pair of files.

These are now used by

 - [AC Mobile Build](/developers/documentation/ac-mobile-build-phonegap/ac-mobile-build/) - builds your App using PhoneGap Technology integrated into the AC Platform; this has 5 [plugins](/developers/documentation/ac-mobile-build-phonegap/ac-mobile-build/ac-build-plugins/) .

 - [PhoneGap Build](/developers/documentation/ac-mobile-build-phonegap/phonegapbuild/) - builds your App in the same way but on Adobe's platform; at the time of writing, this has no [plugin](/developers/documentation/ac-mobile-build-phonegap/ac-mobile-build/ac-build-plugins/) capabilities

