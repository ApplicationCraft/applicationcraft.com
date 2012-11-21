---
old_url: apple_app_id.htm
title: "Apple App Id"
active_menu_item: developers
class_name: developers
full_width: true
---


In order to get pushes working on your iOS app, you'll need to create a provisioning profile and a push certificate on the Apple Developer Provisioning Portal for your Apple Application ID (Bundle ID).

The provisioning profile you create must match the push certificate you upload to Xtify, for example, a Development Provisioning Profile will work with a Development Push Certificate.

Similarly, there are two "production" distribution profiles: Ad Hoc and App Store.

These provisioning profiles will only work with production push certificates.

The provisioning profile will be bundled with your app, it will include the push entitlement which will ask the user for permission to send push notifications upon launching your app for the first time.

The push certificate will need to be uploaded to Xtify so that pushes can be sent to your app users on your behalf. This will allow you to use Xtify's push campaign automation tools on the console.

Xtify have very good documentation on the steps required. See [http://developer.xtify.com/display/sdk/iOS+Integration+Guide+for+APNS\#iOSIntegrationGuideforAPNS-RegisteryouriOSAppwithApple](http://developer.xtify.com/display/sdk/iOS+Integration+Guide+for+APNS#iOSIntegrationGuideforAPNS-RegisteryouriOSAppwithApple) .

