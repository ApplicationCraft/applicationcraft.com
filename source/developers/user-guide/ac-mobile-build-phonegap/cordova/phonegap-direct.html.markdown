---
title: "Phonegap Direct"
active_menu_item: developers
class_name: developers
full_width: true
---


If you find that you cannot get [Phonegap:Build](phonegapbuild) or [AC Mobile Build](application-craft-build) to behave exactly the way you need it to, then you may want to use PhoneGap itself. This provides you with direct access to the platform compilers so you can fine tune everything.

It also has the advantage of letting you integrate Phonegap Plugins that may not be available in Application Craft Build.

Although the setup is more complex and you need to setup development environments for each individual platform, it can be desirable if total control is required.

The Basics

To find out how to install PhoneGap and get started, just go to [http://www.phonegap.com](http://www.phonegap.com) At the top of the site, you will see a download button. Download PhoneGap and you will then see instructions on how to install it correctly.

Downloading the App

To download your App from Application Craft, you will need to go to the Console, select your App and press the Download button in the bottom pane.

Modifying index.html

In the downloaded App, you will need to make a modification to your index.html file. Locate the script tag and you will see the phonegap.js file is referenced. This is the correct file for Phonegap:Build but not for using Phonegap directly.

    <script src="phonegap.js">
    <script src="phonegap-1.2.0.js">
   

You should modify this to point to the version on Phonegap you are using, for example

Modifying your XCode Project

If you are building an App for iOS and you are using the httpRequest() or soapRequest() functions, you will run into problems due to crossdomain errors. To avoid this, you will need to provide domain exceptions.

![phonegap-plist](/img/docs/phonegap-plist.zoom80.png)

As shown in the screenshot above, locate your project folder. Within it you will see a folder called 'Supporting Files' where you will find PhoneGap.plist. In the right hand pane will be an entry External Hosts. You should add any domains that should allow crossdomain access. You can add multiple entries and use wildcards where appropriate.

To allow access to all and any domains, simply add a single entry with \*.

