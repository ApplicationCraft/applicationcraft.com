---
title: "Create an App ID"
active_menu_item: developers
class_name: developers
full_width: true
---


You need to create an App ID. As the name suggests, it uniquely identifies an App. However, you can also identify a group of Apps by using the \* character as described below.

There are situations where you will need to generate a dedicated App ID for an individual App, specifically when you want to use one of the following

 - Push Notifications

 - In App Purchases

 - Game Center features

![iosa-appid-0](/img/docs/iosa-appid-0.zoom68.png)

Click on the New App ID button to get going.

![iosa-appid-1](/img/docs/iosa-appid-1.zoom67.png)

Next, specify a description for the App ID. Below that, you specify the 'Bundle Identifier'. The naming of this Identifier is important. It MUST match the App ID as specified in the Phonegap App property dialog (if you App was built with AC) or as specified in the config.xml (if your App was built outside AC).

## Your App was built with Application Craft

In this case, your App gets a default App ID, unless you override this in the Phonegap App property dialog (see image below).

![acmb-appid](/img/docs/acmb-appid.png)

The default App ID will be

    com.applicationcraft.app<xxxxxxxxxxxxxxxxx>
    com.applicationcraft.app<xxxxxxxxxxxxxxxxx>
    com.applicationcraft.*
    com.yourdomain.yoursuffix
    id = "com.yourdomain.yoursuffix"
   

where \<xxxxxxxxxxxxxxx\> is the ID of your App as can be seen in the AC Console with your App selected. The Bundle Identifier you specify in the Apple Developer Portal can then be one of the following

If you override this, typical with something along the lines of

then you should specify the same App ID in your Bundle Identifier.

## Your App was NOT built with Application Craft

In this case, you specify the App ID in your config.xml file

and you should specify the same App ID in your Bundle Identifier.

