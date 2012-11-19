---
title: "Mobile & Client Side Data Storage"
active_menu_item: developers
class_name: developers
full_width: true
---


When building mobile applications you will often need to store persistent data on the device itself. This type of storage allows your applications to function effectively when there is no connection as well as offering more advanced and often faster functionality than server side storage only.

In many cases your application may have both client side storage and server side storage and your application will manage the flow of data between the client and server. Application Craft provides all the tools you need to do this.

The following client side storage methods are available to you, all of which are standard HTML5 features but not necessarily supported in all browsers. Read on to get the low down.

## Cookies

This is the most basic approach and is very limiting as you can only store 4KB of data in a cookie. It is also vulnerable to being deleted if a user simply clears cookies. It is recommended only for the simplest storage requirements. Local Storage has the same level of simplicity but much more storage.

Application Craft provides the [app.cookie()](/developers/documentation/scripting-apis/client-api/others/cookie) method for setting and getting cookies.

## Local Storage

This is the best way to store persistent data for applications that do not require relational database capabilities. It allows for very fast storage of data and is really easy to use. You can take your javascript objects and arrays and simply convert them into JSON using JSON.stringify() and you can just store it with a simple command. Restoring data from Local Storage is just as easy. You simply get your data with a single call and then use JSON.parse() to convert your JSON string back into a javascript object or array.

Local Storage has a 5MB limit per domain for normal web applications. However, from September 2012 you will be able to  exceed this limit if you deploy your App using our one-click PhoneGap/Cordova option.

**Warning** : iOS 5.0.1 has a nasty bug that means that iOS can delete your entire Local Storage data as a part of its cleanup operations when it needs to make space. Local Storage is supposed to be persistent. This bug has now been fixed in iOS 6 but you should be aware of this risk. You might not notice, but if you cannot take the risk, heed the warning and look to  PhoneGap + SQLite solution.

## Web SQL for pure Web Apps

This is a bit of a problem child. Web SQL uses the very powerful SQL Lite engine to provide full relational database capabilities. For anyone familiar with MySQL, Postgres, SQL-Server etc, this is effectively what you are getting. The only drawback is that for some extraordinary reason Mozilla have decided in their ultimate wisdom that they do not want to support it and it has therefore been deprecated as a formal HTML5 standard.

In practice, though, it is still fully available for mobile applications as Webkit (and many other browsers) still fully supports it. However, developing a large application using Web SQL is definitely a risk as a year or two down the line you could suddenly find the rug pulled out from under your feet. However, there is some good news, so read on.

Web SQL is not nearly as easy to use as Local Storage, which should be used where possible. Web SQL databases for a given domain are restricted to typically 5MB (browser dependent).

## SQLite for Compiled Apps

If you are using [AC Mobile Build](/developers/documentation/ac-mobile-build-phonegap/ac-mobile-build/) to compile your application, then you can build applications using SQLite. SQLite is a popular choice as embedded database for local storage in native apps and with this approach the SQLite database library is a part of your application. Also, there are no storage size limits. See [SQLite Plugin](/developers/documentation/ac-mobile-build-phonegap/ac-mobile-build/ac-build-plugins/sqlite-plugin/)

## Indexed DB

This is a No SQL database implementation that is definitely becoming a part of the W3C HTML5 specification but as yet (July 2012) is not implemented across all browsers and no mobile browser currently supports it. At this point, therefore, there is not much worth saying about it as far as Application Craft is concerned.

## Custom Data Storage Options (PhoneGap/Cordova)

Because Application Craft supports one-click compilation of plugins without the need for you to install any compilers on your desktop, any custom data storage mechanism that is available as a plugin can be added to the system. In order to maintain quality and assure things work properly, we test plugins ourselves before adding them to our library of supported plugins. If you are interested in us adding any plugin, please contact [support@applicationcraft.com](mailto:support@applicationcraft.com) .

