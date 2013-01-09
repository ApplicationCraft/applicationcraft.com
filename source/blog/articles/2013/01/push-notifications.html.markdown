---
title: Push Notification app in minutes
author: Freddy May
date: 2013-01-10
tags: push notifications, ios, android, mobile
class_name: blog
full_width: true
---

We have just completed full support for Push Notifications in Application Craft, and have teamed up with [Xtify](http://www.xtify.com), who provide the underlying push technology. You will need to create an Account with them, although this is free (you start paying Xtify once you reach large volumes).

We have also added a new drop-in API that makes it ridiculously easy to add support for push notifications in your app.

How easy? Well this is all it takes ...

1. You create an App in Application Craft
1. You create an App in Xtify for [iOS](/developers/documentation/ac-mobile-build-phonegap/ac-mobile-build/ac-build-plugins/xtify-push-notifications/configuration/iOS/xtify-ios-portal-setup/) or for [Android](/developers/documentation/ac-mobile-build-phonegap/ac-mobile-build/ac-build-plugins/xtify-push-notifications/configuration/android/xtify-android-portal-setup/)
1. You generate your iOS / Android keys
1. You add the following code to your App

		function notificationReceived() {
		    // Your own, optional callback function
		    // Called when your App receives the notification
		}

		function handler_application_onAppStarted(){
		    xtify.applicationKeyiOS = "12345678-9754-4ffc-be65-ecd00a482269";
		    xtify.applicationKeyAndroid = "abcdefg-9754-4ffc-be65-ecd00a482269";
		    xtify.startedCallback = notificationReceived;
		    xtify.init();
		}

1. You send out the Notification from [Xtify](/developers/documentation/ac-mobile-build-phonegap/ac-mobile-build/ac-build-plugins/xtify-push-notifications/xtify-push-message/), or from your own App using [our API](/developers/documentation/ac-mobile-build-phonegap/ac-mobile-build/ac-build-plugins/xtify-push-notifications/apis/xtify-notification-api/).


##The AC Xtify API
We have added our own API that sits in front of the Xtify system and makes life really very easy for you. However, you can always access the Xtify API directly if required.

The main features of this are

- ease-of-use is at the top of the list; less experienced developers may struggle with Xtify's own API and so we have simplified things for all common operations
- allows you to operate in test mode, so you can test lots of things from your desktop rather than a mobile device
- a single call 'xtify.location.update()' that automatically tells the Xtify system where the user is located. You can then set up auto notifications based on a user's location.
- a cool 'Tag API' that lets your App tag users with any information you require, typically information gathered from the App itself. You can then send out notifications only to those users with certain tags.


