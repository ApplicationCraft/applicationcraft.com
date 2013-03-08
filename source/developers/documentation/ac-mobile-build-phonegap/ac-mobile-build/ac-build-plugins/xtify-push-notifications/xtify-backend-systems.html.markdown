---
title: "Back End Systems"
active_menu_item: developers
class_name: developers
full_width: true
---

Although this is not relevant for your AC Apps, it is worth mentioning for anyone who wants to be able to drive notifications from their back end systems.

Application Craft itself does nothing more than call Xtify's APIs. So, if your back end systems need to be able to send out notifications, the full functionality of Xtify is available to you by accessing the Xtify REST Apis.

##Typical Scenario
You will have your own back end database where you manage people or users. All you need to do is to store the Xtify XID in your user record.

If you read this section, you will see there is a callback function that is called when an App starts up. In this function you can get the XID of the users App. All you need to do is to send this XID to your own systems so it can be stored.

From this point on, you know the XID of each users with a running App, so you are able to send out messages to individuals or groups of users.

##Xtify API documentation 
The Xtify APIs are all available on their site

- [Push API](http://developer.xtify.com/display/APIs/Push+API+2.0)
- [All APIs](http://developer.xtify.com/display/APIs/API+Reference)

##Support
While you should use Application Craft's support for the APIs we provide, please use Xtify support if you are accessing their APIs directly.
