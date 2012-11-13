---
title: "Native Apps"
active_menu_item: developers
class_name: developers
full_width: true
---


There are a variety of ways of debugging Application Craft Apps. The great thing about these options is that you can get almost all debugging done on the desktop without having to spend lots of time deploying to real devices.

## Debug in Application Craft as a Web App

You should aim to get as much testing and debugging done within Application Craft as there is absolutely no time lost copying files. This allows you to use Chrome Developer Tools or Firefox Firebug to debug your Javascript. The only things you cannot test like this is device specific features and hardware.

You can find detailed information on this sort of debugging in the [Debugging AC Scripts](/developers/documentation/scripting-apis/client-scripting-overview/debugging-ac-scripts/) chapter.

Make sure you load QR-Code readers onto your various devices as this saves time loading them. The main menu bar of the AC Designer has a QR-Code button as does the Console for the selected App.

Once you have tested the non-device stuff using this approach, only then spend time on the next levels (unless you can't resist seeing your creation in action on your shiny device).

## Ripple Emulator

The Ripple Emulator is a very cool Application that emulates various platforms. This can be downloaded from [https://bdsc.webapps.blackberry.com/html5/download](https://bdsc.webapps.blackberry.com/html5/download)

Once the Emulator is running, simply Copy/Paste your App URL into the address bar.

You should also make sure that the Emulator is really running in PhoneGap mode or you will get errors when you try to access Device specific PhoneGap functions.

## Related Videos

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/xMaLI9Fa93Q?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) Ripple Emulator [3:03]

## Rapid Device Based Testing

A very neat way to test your Apps is to make use of the [app.switchApp()](/developers/documentation/scripting-apis/client-api/app-functions/switchapp) function. By specifying the same App ID as the App itself, you can reload the App while it is still running. You simply create a script behind a button, label or other widget and when it is pressed the App will reload itself. So, if you want to make some quick changes to your App, do so then press save and then, on your device, press the button to reload the changes from the Application Craft server. Obviously this approach requires an Internet connection to work and also you need to do a regular deploy to the device first.

## Related Videos

[![Videos\_P](/img/docs/videos_p.png)](http://www.youtube.com/v/ITkE2fsTOiI?autoplay=1&hd=1&fs=1&showsearch=0&rel=0&) The switchApp() debugging trick [2:22]

## Weinre Debugger

This debugger is available if you are using PhoneGap:Build and use either the [Manual Building](/developers/documentation/ac-mobile-build-phonegap/phonegapbuild/manual-building) approach or if you use the [Automatic Building](/developers/documentation/ac-mobile-build-phonegap/phonegapbuild/building-the-native-apps) but shut down the Application Craft build window and leave it closed.

Any console.log() or app.debugOutput() allow you to write to the Weinre Console.

 - Login to PhoneGap:Build

 - Go to Apps (your App should be at the top)

 - Press the Admin button below your App name

 - Press the 'Edit' button at the top of the page

![pg-build-debug-flag](/img/docs/pg-build-debug-flag.png)

 - Check 'enable debug mode'. This will cause your Apps to be rebuilt immediately.

 - Now, go to your App listing again and press Admin.

 - At the top of the screen is a 'Debug' button. Launch your App on the device first before pressing it.

 - For instructions on how to debug with this approach , look here : [https://build.phonegap.com/docs/phonegap-debug](https://build.phonegap.com/docs/phonegap-debug)

Once your App is running on the device and you have pressed the Debug button within the PhoneGap:Build site, you should see the following screen

![weinre-debugging](/img/docs/weinre-debugging.png)

This screenshot shows the console inspecting the navigator object

![weinre-navigator](/img/docs/weinre-navigator.png)

