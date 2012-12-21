---
title: "Do a test build"
active_menu_item: developers
class_name: developers
full_width: true
---

##IGNORE CONTENT UNTIL UPDATED FOR ANDROID

This is actually a good time to check that you can build your App properly. If there are any issues at this point, it is best to isolate them here and now before we do the Push Certificate generation.

The process of creating certificates and building your App is [described here](/developers/documentation/ac-mobile-build-phonegap/certificates/). For Android this is quite straightforward and for development testing you can build your app using the included Debug Certificate.

##Requirements for Push Notification Apps
There are some things that you need to do differently for Push Apps. 

 - You **must** use a dedicated Application ID. For non Push Apps, you can actually use a shared App ID such as `com.somedomain.*`, which allows any Application ID starting with `com.somedomain` to be used. 

##Success?
Once you can build and deploy your App to your device, you are ready for the final bit.



