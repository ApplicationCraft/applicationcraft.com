---
title: "Do a test build"
active_menu_item: developers
class_name: developers
full_width: true
---


This is actually a good time to check that you can build your App properly. If there are any issues at this point, it is best to isolate them here and now before configuring Xtify.

The process of creating certificates and building your App is [described here](/developers/documentation/ac-mobile-build-phonegap/certificates/). For Android this is quite straightforward and for development testing you can build your app using the included Debug Certificate.

##Requirements for Push Notification Apps
There are some things that you need to do differently for Push Apps. 

 - You **must** use a dedicated App ID. While for non Push Apps, you can actually use a shared App ID such as `com.somedomain.*`, for Push Apps you must make sure your App ID is completely unique, so something like `com.somedomain.myPushApp`

##Success?
Once you can build and deploy your App to your device, you are ready for the final steps.



