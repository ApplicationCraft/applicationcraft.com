---
title: "Our Recommendations"
active_menu_item: developers
class_name: developers
full_width: true
---


In this section we try to help you out with some decisions you may be faced with when deciding on a client side data storage strategy.

Before we start, we should differentiate between the two types of applications as this affects your decision making on client side data storage.

 - Web Application - this is an Application Craft application that starts up in the regular browser on your mobile device or desktop.

 - Compiled Application - this is an Application Craft application that is deployed using the Phonegap/Cordova compilation process. This means it is deployed and installed as a binary application, typically via an App Store. It can be started offline and access device hardware as well as being able to work with Phonegap/Cordova plugins for advanced features like barcode scanning, push notifications, SQLite database storage and more.

The general thought process should be

 - Complexity level of your storage - unless you need JOIN type behavior on your database, try to use Local Storage.

 - Web Applications have storage size limits - 5MB is the limit for Local Storage and for WebSQL, so if you need to go above this then you will need to deploy a Compiled Application in both cases.

 - iOS 5.0.1 has a Local Storage bug - under certain circumstances it can delete the data. Apparently fixed in iOS 6

You are building an application with minimal storage requirements that runs on mobile devices and/or the desktop.

Use the Cookie approach if your data is less than the 4K cookie size limit. If it could exceed this, then use Local Storage.

You are building an application with low to moderate storage complexity that runs on mobile devices and possibly the desktop.

You should use Local Storage. You should be wary of the iOS 5.0.1 bug described in the Local Storage chapter. If the size of data exceeds 5MB then you will a) have to deploy as a Compiled Application and b) you will need to use the [SQLite Plugin](/developers/documentation/ac-mobile-build-phonegap/ac-mobile-build/ac-build-plugins/sqlite-plugin/) that frees you from this limit.

You have an application which needs to store several tables of data but there is no need to perform JOIN type queries at the storage level.

Local Storage is ideal for this and is easier to implement than WebSQL / SQLite. If the volume of data exceeds 5MB then you will a) have to deploy as a Compiled Application and b) you will need to use the [SQLite Plugin](/developers/documentation/ac-mobile-build-phonegap/ac-mobile-build/ac-build-plugins/sqlite-plugin/) that frees you from this limit.

You have an application with more complex storage requirements that would really benefit from a relational database.

You should take the WebSQL/SQLite approach. This will mean tougher coding but you will get what you want as far as power is concerned.

If you have a Web Application then you will be limited to 5MB of storage. Also, you need to be aware that it will not run on Firefox at all and other browsers may remove support. If you can deploy as a Compiled Application (mobile) then you are ok as described below.

If you can deploy as a Compiled Application (will only run on a mobile device), then you can use our [SQLite Plugin](/developers/documentation/ac-mobile-build-phonegap/ac-mobile-build/ac-build-plugins/sqlite-plugin/) . This frees you from the 5MB storage limit and is browser independent although this cannot be deployed to the desktop.

