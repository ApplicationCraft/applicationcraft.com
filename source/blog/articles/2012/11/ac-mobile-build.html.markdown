---
title: AC Mobile Build, a PhoneGap Build alternative with Plugins
author: Freddy May
tags: phonegap, cordova, html5, native apps, mobile build
date: 2012-11-13
class_name: blog
full_width: true
image: blog/acmb-1.png
---

We're really excited to announce the availability of a full-featured alternative to PhoneGap Build that incorporates everything that Adobe's platform offers as well as a healthy number of plugins.

Feel free to take a look at the [User Guide section](/developers/documentation/ac-mobile-build-phonegap/ac-mobile-build/external-html5cssjs-apps)

For those who don't know PhoneGap/Cordova, it lets you take any HTML5+CSS+JS App or Site and compile it into a binary that can be deployed to App Stores. It also lets you access all the hardware goodies on your device (GPS, Accelerometer, Compass, Camera etc.).

We've also made it incredibly easy to use by offering Certificate management **and** Certificate generation, as well as config.xml editing - all through the Application Craft platform. So, no problem even if you don't have a Mac.

It doesn't matter what tools you used to build your App, any HTML5+CSS+JS App should work just fine. And for you Application Craft developers, all you need to know is that it is very easy to use.

![AC Mobile Build](/img/blog/acmb-2.png "Application Craft Mobile Build") 
##Why we built it
PhoneGap/Cordova technology is something that most developers are probably already familiar with. However, using it is not for the faint hearted. You need to install and configure XCode (for iOS), Java (for Android and Blackberry) and other compilers. This is a pain in the arse and it is why PhoneGap:Build was built. 

As we make pretty heavy use of PhoneGap/Cordova, we needed to be in a position where we have control over the build process. Being able to add plugins in line with our users's needs was on e pretty key motivator to build our own platform. The other was the simple need to be in control and not end up red-faced because of changes that Adobe might make. 

We would, at this point, like to say thanks to the PhoneGap crew - especially Brian "Spacelord" Leroux and Andrew "Sorry for the Snark" Lunny, who have been especially helpful to us in the past.

##How does it differ from PhoneGap:Build?
In principle, it is very similar. The main differences are free private builds, 6 PhoneGap/Cordova plugins, being able to edit your config.xml without re-uploading and keeping a a history of compiled Apps.

Application Craft will only support iOS, Android (both available now) and Windows Phone (available from December 1st, 2012). We simply don't see the need for Blackberry, Symbian and WebOS I'm afraid. You can still use PhoneGap:Build for those.

##Plugins?
Application Craft curates plugins. This means that they are built and tested by us to reduce complexity for the user. We have added the most commonly requested ones but will aggressively add more in line with demand.

  - **Child Browser Window** : this allows a user to display a URL within the app rather than it appearing in the system browser.
  - **Push Notifications** : we have integrated the Xtify system and may support others on request.
  - **Scandit Barcode Reader** : a very high quality barcode reader; it is requires a commcercial license but for mission critical barcode reading it is worth it
  - **Google ZXing** : this is a free barcode reader
  - **SQLite** : this gives you a relational database on your mobile device
  - **MailTo** : send emails from your device

Want more? We build plugins based on popular demand. If plenty of people want one, we'll add it. If you have a very obscure plugin you want adding, our services guys can look at that, too.




