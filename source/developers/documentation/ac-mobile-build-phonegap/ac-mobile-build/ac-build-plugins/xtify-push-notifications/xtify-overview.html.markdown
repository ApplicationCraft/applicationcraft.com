---
title: "Overview"
active_menu_item: developers
class_name: developers
full_width: true
---

A Push Notification is a message that is sent by your to a mobile device. A typical Push Notificaiton looks like this (1. The App name, 2. The Content, 3. The Button action label).

![ios push notification xtify](/img/docs/xtify-sample-notf1.png)

or appears at the top of an iOS device

![ios push notification xtify](/img/docs/xtify-sample-notf2.jpeg)

Here is a high level overview of what goes on. We'll use a simple diagram to explain the main concepts. You can click on it to enlarge it.

![ios push notification xtify](/img/docs/xtify-overview.png)

##1. Build your Application and Distribute it
You build you Application with AC Mobile Build and distribute it as with any other App. When you install it, the App is given an unique ID (XID), which is sent to the Xtify servers. Each installed Instance of each App gets its own Unique ID.

##2. Xtify's System Database
You don't really need to know too much about this, but it may help to know that the XID registration sends the device information to this DB. Also, as shown in Step 6., your App can send its location and tags fields to the same DB. This enabled Xtify to send special Geolocated messages when people move into a specified area. It can also send messages only to users who have certain tags.

##3. Xtify Console
This is where you generate your Application Keys, which are used in the building of your App. You also use the Console to send out messages to users is various ways. You can send test messages, global messages, geo targeted messages as well as messages to users with certain tags.

##4. Message from an Application
As well as being able to send notifications from the Xtify Console, there is also an API that lets you send out notifications from your own Apps. AC provides a very easy to use API and you can access the Xtify API directly if you prefer. If you're interested, take a look at the [Notification API](/developers/documentation/ac-mobile-build-phonegap/ac-mobile-build/ac-build-plugins/xtify-push-notifications/apis/xtify-notification-api/), 

##5. Apple & Android Push Servers
What happens in the background when a message is sent is that the Xtify system talks to Apple or Android's Push Notification servers. These systems handle the actual delivery to the device itself. You don't actually need to know this for any important reason, but it helps complete the picture.

##6. App generated data
There are a couple of important bits of data your App can send to the Xtify servers. 

- Its location : this means that you can send messages to users based on the where are, or last were. Xtify lets you configure rules for locations and groups of locations along with distances from those locations. This offers some very powerful marketing opportunities obviously. If you're interested take a look at the [Location API](/developers/documentation/ac-mobile-build-phonegap/ac-mobile-build/ac-build-plugins/xtify-push-notifications/apis/xtify-location-api/).
- Tags : if your App collects data about a user, such as 'Sex', 'Age Group', 'Interest' or indeed anything you like, then your App can send tags to the Xtify system. You can then use the Xtify Console to send messages to certain types of users of a specific App. Also pretty powerful. If you're interested, take a look at the [Tag API](/developers/documentation/ac-mobile-build-phonegap/ac-mobile-build/ac-build-plugins/xtify-push-notifications/apis/xtify-tag-api/).





