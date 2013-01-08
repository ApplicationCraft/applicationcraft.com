---
title: "Testing on your desktop"
active_menu_item: developers
class_name: developers
full_width: true
---

Although the actual receipt of a notification cannot be tested on the desktop, most other things can be. This is a preferred approach as it prevents you having to test on a mobile device.

##onAppStarted()
Make sure you include the following code in your onAppStarted() event

    xtify.testXid("50e4256e87242167c695e34d");
    xtify.applicationKeyiOS = "54dec04a-9754-4ffc-be65-ecd00a482269";
    xtify.applicationKeyAndroid = "59abcde-9754-4ffc-be65-ecd00a482269";
    xtify.applicationTestPlatform = "ios";

xtify.applicationTestPlatform is important as it tells the Application Craft API which platform to simulate. It can be either 'ios' or 'android'.

##xtify.testXid
You can see from the above code that you need to specify a testXid when testing. When you are running on a desktop, Application Craft will send use this wherever an API call would otherwise get the XID from the running native app.

There are two ways to find out the device key.

1. On an installed, native App, read and display xtify.xid. You could copy this manually but often you only want to see this to compare with the device xids listed in the Xtify console.
1. In the Xtify Console, select Test Implementation as shown in the screenshot below. You can then copy and paste this. If you have lots of them, then check out step 1 so you can see what your XID is.

![xtify get xids](/img/docs/xtify-getting-xids.png)

