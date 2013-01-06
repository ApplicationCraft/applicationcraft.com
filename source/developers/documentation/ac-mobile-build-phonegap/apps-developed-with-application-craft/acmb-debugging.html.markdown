---
title: "Debugging"
active_menu_item: developers
class_name: developers
full_width: true
---

From January 2013, we added 'Debug Mode' to AC Apps built using [AC Mobile Build](/developers/documentation/ac-mobile-build-phonegap/ac-mobile-build/). 

The key thing about this is that you only need to build your application once and load it onto your device. The App will then be loaded from the Applciation Craft server each and every time it starts. This means that you can make a small change to your App, press save and then restart the App on your mobile device and the change will be instantly reflected. There is no compile needed using AC Mobile Build.

![ac mobile build debug](/img/docs/acmb-debug-properties.png)

After setting the Debug Mode to true, you must compile your App using AC Mobile Build.

You should be sure to reset both Debug properties when your App is built and tested. 

