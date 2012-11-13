---
title: "Scandit Widget"
active_menu_item: developers
class_name: developers
full_width: true
---


The Scandit widget should be considered to be in Beta until this notice is removed.

This widget allows you to implement scanning in your native apps in conjunction with our [Scandit Free](/developers/documentation/ac-mobile-build-phonegap/cordova/ac-mobile-build/ac-build-plugins/scandit-free) plugin and capture the type and value of the scanned item into your app.

The Scandit barcode scanner offers the most accurate recognition when faced with real-world challenges.

**Configure your Scandit widget properties**

![Scandit](/img/docs/scandit.zoom83.png)

 - your Scandit App Key (obtainable from: [http://www.scandit.com/product-api/](http://www.scandit.com/product-api/) )

 - the text strings that appear to the user when scanning

 - colors of target boxes

 - whether the phone beeps or vibrates after a successful scan

 - whether to allow regular 1D codes (normal barcodes) and/or 2D barcodes (QR and other codes)

**Customize your AC Events**

 - onSuccess - a barcode was successfully read and you are passed the type of barcode as parameter 1 and the actual barcode value in parameter 2; you would normally then display this value in a field elsewhere in your App.

![scanOnSuccess](/img/docs/scanonsuccess.zoom78.png)

 - onFail - usually called when the user presses ‘Cancel’ in the scanning window

**Build your app:**

With most Application Craft Apps, you can now simply run your App directly from the IDE. However, because the Scandit component is a binary component that is not part of HTML5, we need to build a Phonegap/Cordova App.

Enable the [Scandit Free](/developers/documentation/ac-mobile-build-phonegap/cordova/ac-mobile-build/ac-build-plugins/scandit-free) plugin from the App Property: [AC Build Plugins](/developers/documentation/ac-mobile-build-phonegap/cordova/ac-mobile-build/ac-build-plugins/) and build your Native app using [AC Mobile Build](/developers/documentation/ac-mobile-build-phonegap/cordova/ac-mobile-build/) .

Related Video:

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/Qjt3pkZXJn8?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Scandit [4:25]

