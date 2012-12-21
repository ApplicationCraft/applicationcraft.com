---
title: "Android"
active_menu_item: developers
class_name: developers
full_width: true
---

Android is a lot easier to set up and all you need to be able to push notifications to Android devices is to set up Google Cloud Messaging to obtain your Sender ID and API Key to then set up in the Xtify Portal to get the Application Key.

To get started go: [http://developer.android.com/guide/google/gcm/gs.html](http://developer.android.com/guide/google/gcm/gs.html) and click the link there to go to the Google API Console
![googleconsole](/img/docs/googleconsole.png)

## To Create your project and obtain your GCM Sender ID

As you create your project, your browser URL will change to something like:

[https://code.google.com/apis/console/\#project:4815162342](https://code.google.com/apis/console/#project:4815162342)

Take note of the value after \#project: (4815162342 in this example). This is your project ID, and it will be used later on as the GCM Sender ID.

## To obtain an API key

In the main Google APIs Console page, select API Access and note the API key
![googleapikey](/img/docs/googleapikey.png)

