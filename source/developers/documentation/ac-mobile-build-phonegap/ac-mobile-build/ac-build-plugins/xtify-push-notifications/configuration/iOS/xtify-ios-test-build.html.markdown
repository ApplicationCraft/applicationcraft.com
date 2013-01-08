---
title: "Do a test build"
active_menu_item: developers
class_name: developers
full_width: true
---

This is actually a good time to check that you can build your App properly. If there are any issues at this point, it is best to isolate them here and now before we do the Push Certificate generation.

We can almost guarantee that you will experience considerable pain the first time through if you have not been through this process a couple of times and understand what is going on.

The process of creating certificates and building your App is [described here](/developers/documentation/ac-mobile-build-phonegap/certificates/). There are not really any shortcuts other than to go through the process.

##Requirements for Push Notification Apps
There are some things that you need to do differently for Push Apps. 

 - You **must** use a dedicated App ID. For non Push Apps, you can actually use a shared App ID such as `com.somedomain.*`, which allows any Application ID starting with `com.somedomain` to be used. 
 - Make sure that your Provisioning Profile is valid for your App ID and your Developer Certificate
 - Use a correctly matched Developer Certificate and Provisioning Profile in AC Mobile Build or Phonegap Build.

##Success?
Once you can build and deploy your App to your device, you are ready for the final bit.



